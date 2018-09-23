import { Context, getUserId } from "../../utils";
export default {
  updatecurrent: async (parent, args, ctx: Context, info) => {
    const current = await ctx.db.query.currents({
      where: {}
    });

    return await ctx.db.mutation.updateCurrent(
      {
        data: { round: args.round, season: args.season, timer: args.timer },
        where: { id: current[0].id }
      },
      info
    );
  }
};
