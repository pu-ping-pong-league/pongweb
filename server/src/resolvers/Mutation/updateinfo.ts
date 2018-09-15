import { Context, getUserId } from "../../utils";
export default {
  updateinfo: async (parent, args, ctx: Context, info) => {
    return await ctx.db.mutation.updateUser(
      {
        ...args
      },
      info
    );
  }
};
