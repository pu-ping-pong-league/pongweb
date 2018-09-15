import { Context, getUserId } from "../../utils";
export default {
  generateSeason: async (parent, args, ctx: Context, info) => {
    // const id = getUserId(ctx);

    const users = await ctx.db.query.users({
      where: {}
    });
    console.log(users);
    await ctx.db.mutation.createSeason(
      {
        data: { season: args.season }
      },
      info
    );

    for (var i = 0; i < users.length; i++) {
      ctx.db.mutation.updateSeason(
        {
          data: { players: { connect: { email: users[i].email } } },
          where: { season: args.season }
        },
        info
      );
    }

    return await ctx.db.mutation.updateSeason(
      {
        data: { season: args.season },
        where: { season: args.season }
      },
      info
    );
  }
};
