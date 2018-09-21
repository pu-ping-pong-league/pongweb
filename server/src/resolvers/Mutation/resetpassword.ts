import { Context, getUserId } from "../../utils";
import * as bcrypt from "bcryptjs";
export default {
  resetpassword: async (parent, args, ctx: Context, info) => {
    const password = await bcrypt.hash(args.password, 10);
    return await ctx.db.mutation.updateUser(
      {
        data: { password: password },
        where: { email: args.email }
      },
      info
    );
  }
};
