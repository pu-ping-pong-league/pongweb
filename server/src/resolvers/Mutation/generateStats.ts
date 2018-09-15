import { Context, getUserId } from "../../utils";
export default {
  generateStats: async (parent, args, ctx: Context, info) => {
    // const id = getUserId(ctx);

    const users = await ctx.db.query.users({
      where: { stats_every: {} }
    });

    const fixture = await ctx.db.query.fixtures({
      where: { round: args.fixture, season: { season: args.season } }
    });
    console.log(users);
    console.log(fixture);

    for (var i = 1; i < users.length; i++) {
      await ctx.db.mutation.createStats(
        {
          data: {
            wins: 0,
            losts: 0,
            totalsetlost: 0,
            totalsetwon: 0,
            rating: 1000,
            player: { connect: { email: users[i].email } },
            fixture: { connect: { id: fixture[0].id } },
            season: { connect: { season: args.season } },
            playeremail: users[i].email
          }
        },
        info
      );
    }

    return await ctx.db.mutation.createStats(
      {
        data: {
          wins: 0,
          losts: 0,
          totalsetlost: 0,
          totalsetwon: 0,
          rating: 1000,
          player: { connect: { email: users[0].email } },
          fixture: { connect: { id: fixture[0].id } },
          season: { connect: { season: args.season } },
          playeremail: users[0].email
        }
      },
      info
    );
  }
};
