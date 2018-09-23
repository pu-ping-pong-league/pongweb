import { Context, getUserId } from "../../utils";
export default {
  generateStats: async (parent, args, ctx: Context, info) => {
    // const id = getUserId(ctx);

    const users = await ctx.db.query.users({
      where: { stats_every: {} }
    });

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
            season: { connect: { season: args.season } },
            playeremail: users[i].email,
            round: args.round
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
          season: { connect: { season: args.season } },
          playeremail: users[0].email,
          round: args.round
        }
      },
      info
    );
  }
};
