import { Context, getUserId } from "../../utils";
export default {
  updateseason: async (parent, args, ctx: Context, info) => {
    // const id = getUserId(ctx);

    return await ctx.db.mutation.updateSeason(
      {
        ...args
      },
      info
    );
  }
};
