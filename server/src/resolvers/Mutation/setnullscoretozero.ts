import { Context, getUserId } from "../../utils";
export default {
  setnullscoretozero: async (parent, args, ctx: Context, info) => {
    const unplayedmatches = await ctx.db.query.matches(
      {
        where: {
          season: { season: args.season },
          fixture: { round: args.round },
          player1set: null
        }
      },
      info
    );

    const matches = await ctx.db.query.matches(
      {
        where: {
          season: { season: args.season },
          fixture: { round: args.round }
        }
      },
      info
    );
    console.log(matches);
    const fixture = await ctx.db.query.fixtures({
      where: { round: args.round, season: { season: args.season } }
    });
    console.log(fixture);
    if (unplayedmatches.length != 0) {
      for (let i = 0; i < unplayedmatches.length; i++) {
        await ctx.db.mutation.updateMatch(
          {
            data: {
              player1set: 0,
              player2set: 0
            },
            where: {
              id: unplayedmatches[i].id
            }
          },
          info
        );

        await ctx.db.mutation.updateUser({
          data: {
            stats: {
              create: [
                {
                  playeremail: unplayedmatches[i].player1.email,

                  wins: unplayedmatches[i].player1.stats[0].wins,
                  totalsetwon: unplayedmatches[i].player1.stats[0].totalsetwon,
                  totalsetlost:
                    unplayedmatches[i].player1.stats[0].totalsetlost,
                  losts: unplayedmatches[i].player1.stats[0].losts,
                  rating: unplayedmatches[i].player1.stats[0].rating,
                  netwins: unplayedmatches[i].player1.stats[0].netwins,
                  fixture: { connect: { id: fixture[0].id } },
                  season: { connect: { season: args.season } }
                }
              ]
            }
          },
          where: {
            email: unplayedmatches[i].player1.email
          }
        });
        await ctx.db.mutation.updateUser({
          data: {
            stats: {
              create: [
                {
                  playeremail: unplayedmatches[i].player2.email,
                  wins: unplayedmatches[i].player2.stats[0].wins,
                  totalsetwon: unplayedmatches[i].player2.stats[0].totalsetwon,
                  totalsetlost:
                    unplayedmatches[i].player2.stats[0].totalsetlost,
                  losts: unplayedmatches[i].player2.stats[0].losts,
                  rating: unplayedmatches[i].player2.stats[0].rating,
                  netwins: unplayedmatches[i].player2.stats[0].netwins,
                  fixture: { connect: { id: fixture[0].id } },
                  season: { connect: { season: args.season } }
                }
              ]
            }
          },
          where: {
            email: unplayedmatches[i].player2.email
          }
        });
      }
      return await ctx.db.mutation.updateMatch(
        {
          data: {},
          where: { id: unplayedmatches[0].id }
        },
        info
      );
    } else {
      return await ctx.db.mutation.updateMatch(
        {
          data: {},
          where: { id: matches[0].id }
        },
        info
      );
    }
  }
};
