import { Context } from "../../utils";
export default {
  submitmatch: async (parent, args, ctx: Context, info) => {
    const [match] = await ctx.db.query.matches(
      {
        where: {
          player1: { email: args.player1 },
          player2: { email: args.player2 },
          season: { season: args.season },
          fixture: { round: args.round },
          sumbit: false
        }
      },
      info
    );

    const fixture = await ctx.db.query.fixtures({
      where: { round: args.round, season: { season: args.season } }
    });

    const stats1 = await ctx.db.query.statses({
      where: {
        playeremail: args.player1,
        season: { season: 1 },
        fixture: { round: 0 }
      }
    });

    const stats2 = await ctx.db.query.statses({
      where: {
        playeremail: args.player2,
        season: { season: 1 },
        fixture: { round: 0 }
      }
    });
    console.log(match);
    if (args.player1set == 0 && args.player2set == 0) {
      await ctx.db.mutation.updateUser({
        data: {
          stats: {
            create: [
              {
                playeremail: args.player1,

                wins: match.player1.stats[0].wins,
                totalsetwon: match.player1.stats[0].totalsetwon,
                totalsetlost: match.player1.stats[0].totalsetlost,
                losts: match.player1.stats[0].losts,
                rating: match.player1.stats[0].rating,
                netwins: match.player1.stats[0].netwins,
                fixture: { connect: { id: fixture[0].id } },
                season: { connect: { season: args.season } }
              }
            ]
          }
        },
        where: {
          email: args.player1
        }
      });
      await ctx.db.mutation.updateUser({
        data: {
          stats: {
            create: [
              {
                playeremail: args.player2,
                wins: match.player2.stats[0].wins,
                totalsetwon: match.player2.stats[0].totalsetwon,
                totalsetlost: match.player2.stats[0].totalsetlost,
                losts: match.player2.stats[0].losts,
                rating: match.player2.stats[0].rating,
                netwins: match.player2.stats[0].netwins,
                fixture: { connect: { id: fixture[0].id } },
                season: { connect: { season: args.season } }
              }
            ]
          }
        },
        where: {
          email: args.player2
        }
      });
    }
    if (args.player1set == 2) {
      await ctx.db.mutation.updateUser({
        data: {
          stats: {
            create: [
              {
                playeremail: args.player1,

                wins: 1 + match.player1.stats[0].wins,
                totalsetwon:
                  match.player1.stats[0].totalsetwon + args.player1set,
                totalsetlost:
                  match.player1.stats[0].totalsetlost + args.player2set,
                losts: match.player1.stats[0].losts,
                rating:
                  match.player1.stats[0].rating +
                  (args.player1set - args.player2set + 1) *
                    10 *
                    Math.exp(
                      1 -
                        match.player1.stats[0].rating /
                          match.player2.stats[0].rating
                    ),
                netwins:
                  match.player1.stats[0].netwins +
                  1 +
                  0.01 * (args.player1set - args.player2set),
                fixture: { connect: { id: fixture[0].id } },
                season: { connect: { season: args.season } }
              }
            ],
            update: [
              {
                data: {
                  totalsetwon:
                    match.player1.stats[0].totalsetwon + args.player1set,
                  wins: 1 + match.player1.stats[0].wins,
                  totalsetlost:
                    match.player1.stats[0].totalsetlost + args.player2set,
                  rating:
                    match.player1.stats[0].rating +
                    (args.player1set - args.player2set + 1) *
                      10 *
                      Math.exp(
                        1 -
                          match.player1.stats[0].rating /
                            match.player2.stats[0].rating
                      ),
                  netwins:
                    match.player1.stats[0].netwins +
                    1 +
                    0.01 * (args.player1set - args.player2set)
                },
                where: {
                  id: stats1[0].id
                }
              }
            ]
          }
        },
        where: {
          email: args.player1
        }
      });
      await ctx.db.mutation.updateUser({
        data: {
          stats: {
            create: [
              {
                playeremail: args.player2,
                wins: match.player2.stats[0].wins,
                totalsetwon:
                  match.player2.stats[0].totalsetwon + args.player2set,
                totalsetlost:
                  match.player2.stats[0].totalsetlost + args.player1set,
                losts: 1 + match.player2.stats[0].losts,
                rating:
                  match.player2.stats[0].rating -
                  (args.player1set - args.player2set + 1) *
                    10 *
                    Math.exp(
                      1 -
                        match.player1.stats[0].rating /
                          match.player2.stats[0].rating
                    ),
                netwins:
                  match.player2.stats[0].netwins -
                  1 +
                  0.01 * (args.player2set - args.player1set),
                fixture: { connect: { id: fixture[0].id } },
                season: { connect: { season: args.season } }
              }
            ],
            update: [
              {
                data: {
                  totalsetlost:
                    match.player2.stats[0].totalsetlost + args.player1set,

                  losts: 1 + match.player2.stats[0].losts,
                  totalsetwon:
                    match.player2.stats[0].totalsetwon + args.player2set,
                  rating:
                    match.player2.stats[0].rating -
                    (args.player1set - args.player2set + 1) *
                      10 *
                      Math.exp(
                        1 -
                          match.player1.stats[0].rating /
                            match.player2.stats[0].rating
                      ),
                  netwins:
                    match.player2.stats[0].netwins -
                    1 +
                    0.01 * (args.player2set - args.player1set)
                },
                where: { id: stats2[0].id }
              }
            ]
          }
        },
        where: {
          email: args.player2
        }
      });
    }
    if (args.player2set == 2) {
      await ctx.db.mutation.updateUser(
        {
          data: {
            stats: {
              create: [
                {
                  playeremail: args.player2,
                  wins: 1 + match.player2.stats[0].wins,
                  totalsetwon:
                    match.player2.stats[0].totalsetwon + args.player2set,
                  totalsetlost:
                    match.player2.stats[0].totalsetlost + args.player1set,
                  losts: match.player2.stats[0].losts,
                  rating:
                    match.player2.stats[0].rating +
                    (args.player2set - args.player1set + 1) *
                      10 *
                      Math.exp(
                        1 -
                          match.player2.stats[0].rating /
                            match.player1.stats[0].rating
                      ),
                  netwins:
                    match.player1.stats[0].netwins +
                    1 +
                    0.01 * (args.player2set - args.player1set),
                  fixture: { connect: { id: fixture[0].id } },
                  season: { connect: { season: args.season } }
                }
              ],
              update: [
                {
                  data: {
                    totalsetwon:
                      match.player2.stats[0].totalsetwon + args.player2set,
                    wins: 1 + match.player2.stats[0].wins,
                    totalsetlost:
                      match.player2.stats[0].totalsetlost + args.player1set,
                    rating:
                      match.player2.stats[0].rating +
                      (args.player2set - args.player1set + 1) *
                        10 *
                        Math.exp(
                          1 -
                            match.player2.stats[0].rating /
                              match.player1.stats[0].rating
                        ),
                    netwins:
                      match.player1.stats[0].netwins +
                      1 +
                      0.01 * (args.player2set - args.player1set)
                  },
                  where: { id: stats2[0].id }
                }
              ]
            }
          },
          where: {
            email: args.player2
          }
        },
        info
      ),
        await ctx.db.mutation.updateUser(
          {
            data: {
              stats: {
                create: [
                  {
                    playeremail: args.player1,
                    wins: match.player1.stats[0].wins,
                    totalsetwon:
                      match.player1.stats[0].totalsetwon + args.player1set,
                    totalsetlost:
                      match.player1.stats[0].totalsetlost + args.player2set,
                    losts: 1 + match.player1.stats[0].losts,
                    fixture: { connect: { id: fixture[0].id } },
                    season: { connect: { season: args.season } },
                    rating:
                      match.player1.stats[0].rating -
                      (args.player2set - args.player1set + 1) *
                        10 *
                        Math.exp(
                          1 -
                            match.player2.stats[0].rating /
                              match.player1.stats[0].rating
                        ),
                    netwins:
                      match.player1.stats[0].netwins -
                      1 +
                      0.01 * (args.player1set - args.player2set)
                  }
                ],
                update: [
                  {
                    data: {
                      totalsetlost:
                        match.player1.stats[0].totalsetlost + args.player2set,
                      losts: 1 + match.player1.stats[0].losts,
                      totalsetwon:
                        match.player1.stats[0].totalsetwon + args.player1set,
                      rating:
                        match.player1.stats[0].rating -
                        (args.player2set - args.player1set + 1) *
                          10 *
                          Math.exp(
                            1 -
                              match.player2.stats[0].rating /
                                match.player1.stats[0].rating
                          ),
                      netwins:
                        match.player1.stats[0].netwins -
                        1 +
                        0.01 * (args.player1set - args.player2set)
                    },
                    where: { id: stats1[0].id }
                  }
                ]
              }
            },
            where: {
              email: args.player1
            }
          },
          info
        );
    }

    return await ctx.db.mutation.updateMatch(
      {
        data: {
          player1set: args.player1set,
          player2set: args.player2set,
          sumbit: true
        },
        where: {
          id: match.id
        }
      },
      info
    );
  }
};
