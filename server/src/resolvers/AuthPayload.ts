import { Context } from "../utils";

export const AuthPayload = {
  user: async ({ user: { id } }, args, ctx: Context, info) => {
    return ctx.db.query.user({ where: { id } }, info);
  }
};

export const AuthPayload1 = {
  user: async ({ user: { id } }, args, ctx: Context, info) => {
    return ctx.db.query.admin({ where: { id } }, info);
  }
};
