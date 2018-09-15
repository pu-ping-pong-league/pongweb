import { Context, getUserId } from "../../utils";
export default {
  generateFixture: async (parent, args, ctx: Context, info) => {


    return await ctx.db.mutation.createFixture(
      {
        data: {
          round: args.round,
          season: { connect: { season: args.season } }
        }
      },
      info
    );

  }
};
