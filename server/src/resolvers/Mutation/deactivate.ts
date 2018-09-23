import { Context, getUserId } from "../../utils";
export default {
  deactivate: async (parent, args, ctx: Context, info) => {
    return await ctx.db.mutation.updateUser(
      {
        data: {
          deactivated: args.deactivated
        },
        where: { email: args.email }
      },
      info
    );
  }
};
