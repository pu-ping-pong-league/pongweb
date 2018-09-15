import { Context, getUserId } from "../../utils";
export default {
  createcurrent: async (parent, args, ctx: Context, info) => {
    return await ctx.db.mutation.createCurrent(
      {
        data: { fixture: args.round, season: args.season, timer: args.timer }
      },
      info
    );
  }
};
