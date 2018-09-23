import { Context } from "../../utils";
export default {
  submitmatch: async (parent, args, ctx: Context, info) => {
    // get submitted match info
    const [match] = await ctx.db.query.matches(
      {
        where: {
          player1: { email: args.player1 },
          player2: { email: args.player2 },
          season: { season: args.season },
          round: args.round,
          submit: false
        }
      },
      info
    );

    // get stats for both players
    const stats1 = await ctx.db.query.statses({
      where: {
        playeremail: args.player1,
        season: { season: 1 },
        round: 0
      }
    });
    const stats2 = await ctx.db.query.statses({
      where: {
        playeremail: args.player2,
        season: { season: 1 },
        round: 0
      }
    });

    // if match was not played, keep stats the same
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
                round: args.round,
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
                round: args.round,
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

    // rating update function
    function computeRating(winner_rating, loser_rating, winner_set, loser_set) {
      const set_value = (winner_set - loser_set + 1) * 10;
      const coefficient = Math.exp(1 - winner_rating / loser_rating);
      return set_value * coefficient;
    }

    // if player 1 won, update players' stats accordingly
    if (args.player1set == 2) {
      var ratingUpdate = computeRating(
        match.player1.stats[0].rating,
        match.player2.stats[0].rating,
        args.player1set, args.player2set
      );

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
                rating: match.player1.stats[0].rating + ratingUpdate,
                netwins:
                  match.player1.stats[0].netwins +
                  1 + 0.01 * (args.player1set - args.player2set),
                round: args.round,
                season: {
                  connect: { season: args.season }
                }
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
                    match.player1.stats[0].rating + ratingUpdate,
                  netwins:
                    match.player1.stats[0].netwins +
                    1 + 0.01 * (args.player1set - args.player2set)
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
                  match.player2.stats[0].rating - ratingUpdate,
                netwins:
                  match.player2.stats[0].netwins -
                  1 + 0.01 * (args.player2set - args.player1set),
                round: args.round,
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
                    match.player2.stats[0].rating - ratingUpdate,
                  netwins:
                    match.player2.stats[0].netwins -
                    1 + 0.01 * (args.player2set - args.player1set)
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

    // if player 2 won, update players' stats accordingly
    if (args.player2set == 2) {
      var ratingUpdate = computeRating(
        match.player2.stats[0].rating,
        match.player1.stats[0].rating,
        args.player2set, args.player1set
      );

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
                    match.player2.stats[0].rating + ratingUpdate,
                  netwins:
                    match.player1.stats[0].netwins +
                    1 + 0.01 * (args.player2set - args.player1set),
                  round: args.round,
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
                      match.player2.stats[0].rating + ratingUpdate,
                    netwins:
                      match.player1.stats[0].netwins +
                      1 + 0.01 * (args.player2set - args.player1set)
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
                    season: { connect: { season: args.season } },
                    rating:
                      match.player1.stats[0].rating - ratingUpdate,
                    netwins:
                      match.player1.stats[0].netwins -
                      1 + 0.01 * (args.player1set - args.player2set),
                    round: args.round
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
                        match.player1.stats[0].rating - ratingUpdate,
                      netwins:
                        match.player1.stats[0].netwins -
                        1 + 0.01 * (args.player1set - args.player2set)
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

    // update match info
    return await ctx.db.mutation.updateMatch(
      {
        data: {
          player1set: args.player1set,
          player2set: args.player2set,
          submit: true
        },
        where: {
          id: match.id
        }
      },
      info
    );
  }
};
