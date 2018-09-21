import { getUserId, Context } from "../utils";

export const Query = {
  me(parent, args, ctx: Context, info) {
    const id = getUserId(ctx);
    return ctx.db.query.user({ where: { id: id } }, info);
  },

  getleaderboard: async (parent, args, ctx: Context, info) => {
    return ctx.db.query.users(
      {
        ...args
      },
      info
    );
  },
  getunplayedmatches: async (parent, args, ctx: Context, info) => {
    return ctx.db.query.matches(
      {
        where: {
          season: { season: args.season, round: args.round },
          player1set: null
        }
      },
      info
    );
  },
  getUser: async (parent, args, ctx: Context, info) => {
    return ctx.db.query.user(
      {
        where: { email: args.email }
      },
      info
    );
  },
  getUserbyID: async (parent, args, ctx: Context, info) => {
    return ctx.db.query.user(
      {
        ...args
      },
      info
    );
  },
  getUsers: async (parent, args, ctx: Context, info) => {
    return ctx.db.query.users(
      {
        ...args
      },
      info
    );
  },
  getPlayerMatches: async (parent, args, ctx: Context, info) => {
    return ctx.db.query.matches(
      {
        ...args
      },
      info
    );
  },
  getPlayer1vsPlayer2Matches: async (parent, args, ctx: Context, info) => {
    return ctx.db.query.matches(
      {
        ...args
      },
      info
    );
  },
  statses: async (parent, args, ctx: Context, info) => {
    return ctx.db.query.statses(
      {
        ...args
      },
      info
    );
  },
  matches: async (parent, args, ctx: Context, info) => {
    return ctx.db.query.matches(
      {
        ...args
      },
      info
    );
  },
  getallplayers: async (parent, args, ctx: Context, info) => {
    return ctx.db.query.users({}, info);
  },
  getcurrent: async (parent, args, ctx: Context, info) => {
    return ctx.db.query.currents({ where: {} }, info);
  }
  // feed(parent, args, ctx: Context, info) {
  //   return ctx.db.query.matches(
  //     {
  //       ...args
  //     },
  //     info
  //   );
  // },
  // match(parent, args, ctx: Context, info) {
  //   return ctx.db.query.match({ where: { id: args.id } }, info);
  // }
  // getMatchId(parent, args, ctx: Context, info) {
  //   return ctx.db.query.match(
  //     {
  //       where: {
  //         id:
  //       }
  //     },
  //     info
  //   );
  // }
};
