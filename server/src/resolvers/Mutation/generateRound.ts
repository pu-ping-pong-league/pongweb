import { Context, getUserId } from "../../utils";
export default {
  generateRound: async (parent, args, ctx: Context, info) => {
    const users = await ctx.db.query.statses({
      orderBy: "netwins_DESC",
      where: {
        fixture: { round: 0 },
        season: { season: args.season }
      }
    });
    console.log(users);

    const fixture = await ctx.db.query.fixtures({
      where: { round: args.round, season: { season: args.season } }
    });

    console.log(fixture);
    for (var i = 0; i < users.length; i = i + 2) {
      for (var j = 1; j < users.length; j++) {
        if (i != j) {
          await ctx.db.mutation.createMatch({
            data: {
              player1: {
                connect: { email: users[i].playeremail }
              },
              player2: {
                connect: { email: users[j].playeremail }
              },
              fixture: { connect: { id: fixture[0].id } },
              season: { connect: { season: args.season } }
            }
          });
        }
      }
    }

    const matches = await ctx.db.query.matches({
      where: {
        season: { season: args.season },
        fixture: { round: args.round }
      }
    });

    for (var i = 1; i < matches.length; i++) {
      await ctx.db.mutation.updateFixture(
        {
          data: {
            matches: {
              connect: [{ id: matches[i].id }]
            }
          },
          where: { id: fixture[0].id }
        },
        info
      );
    }

    return await ctx.db.mutation.updateFixture(
      {
        data: {
          matches: {
            connect: [{ id: matches[0].id }]
          }
        },
        where: { id: fixture[0].id }
      },
      info
    );
  }
};
