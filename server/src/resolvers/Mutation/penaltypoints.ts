import { Context, getUserId } from "../../utils";
export default {
  penaltypoints: async (parent, args, ctx: Context, info) => {
    const players1 = await ctx.db.query.users(
      {
        where: {}
      },
      info
    );
    const players = await ctx.db.query.users(
      {
        where: { penaltypoints: 3 }
      },
      info
    );
    for (var i = 0; i < players.length; i++) {
      await ctx.db.mutation.updateUser(
        {
          data: {
            deactivated: true
          },
          where: {
            email: players[i].email
          }
        },
        info
      );
    }
    return await ctx.db.mutation.updateUser(
      {
        data: {},
        where: {
          email: players1[0].email
        }
      },
      info
    );
  }
};
