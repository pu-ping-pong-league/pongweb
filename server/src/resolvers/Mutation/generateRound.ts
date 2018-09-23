import { Context, getUserId } from "../../utils";

export default {
  generateRound: async (parent, args, ctx: Context, info) => {
    const users = await ctx.db.query.users(
      {
        where: {
          season: { season: args.season }
        }
      },
      info
    );
    console.log(users);
    // format user data for matchmaking
    var users_array = [];
    for (var i = 0; i < users.length; i++) {
      const net_wins = users[i].stats[0].wins - users[i].stats[0].losts;
      const net_sets =
        users[i].stats[0].totalsetwon - users[i].stats[0].totalsetlost;
      users_array.push([users[i], net_wins, net_sets]);
    }
    // sort user data in order required for matchmaking
    console.log("sort");
    function user_comparator(a, b) {
      if (a[1] < b[1]) return 1;
      if (a[1] == b[1] && a[2] < b[2]) return 1;
      return 0;
    }
    users_array.sort(user_comparator);

    // matchmaking function
    console.log("matchmaking function");
    async function match_em(players, unmatched_player, args) {
      // handle unmatched player
      if (unmatched_player != null) {
        players.unshift(unmatched_player);
        unmatched_player = null;
      }

      /* Generate matches using "cut in the middle -> parallel fold". */
      console.log("function");
      // find middle cut and next unmatched player (if any)
      var middle = 0;
      var top_middle = 0;
      if (players.length % 2 == 0) {
        middle = Math.floor(players.length / 2);
        top_middle = middle;
      } else {
        middle = Math.floor(players.length / 2 + 1);
        top_middle = middle - 1;
        unmatched_player = players[middle - 1];
      }

      // perform parallel fold matching
      for (var i = 0; i < top_middle; i++) {
        console.log(i);
        console.log(i + middle);

        await ctx.db.mutation.createMatch({
          data: {
            player1: {
              connect: { email: players[i][0].email }
            },
            player2: {
              connect: { email: players[i + middle][0].email }
            },
            season: { connect: { season: args.season } },
            round: args.round
          }
        });
      }

      return unmatched_player;
    }

    // do the matching
    console.log("dothematching");
    var unmatched_player = null;
    const min_wins = users_array[users.length - 1][1];
    console.log("min_wins");
    console.log(min_wins);
    console.log(users_array[0][1]);
    for (var ref_wins = users_array[0][1]; ref_wins >= min_wins; ref_wins--) {
      // collect players to next get matched
      var current_players = [];
      for (var i = 0; i < users.length; i++) {
        if (ref_wins == users_array[i][1]) {
          current_players.push(users_array[i]);
        } else if (ref_wins > users_array[i][1]) {
          break;
        }
      }
      console.log("current");
      console.log(current_players);
      if (current_players.length > 0) {
        unmatched_player = await match_em(
          current_players,
          unmatched_player,
          args
        );
      }
    }

    // form 'Bye' match if odd number of players

    if (unmatched_player != null) {
      console.log(unmatched_player);
      console.log(unmatched_player[0].stats[0]);
      console.log(unmatched_player[0].stats[0].id);
      await ctx.db.mutation.createMatch({
        data: {
          player1: {
            connect: { email: unmatched_player[0].email }
          },
          player1set: 2,
          player2set: 0,
          submit: true,
          season: { connect: { season: args.season } },
          round: args.round
        }
      });
      await ctx.db.mutation.updateUser({
        data: {
          stats: {
            create: [
              {
                playeremail: unmatched_player[0].email,

                wins: 1 + unmatched_player[0].stats[0].wins,
                totalsetwon: unmatched_player[0].stats[0].totalsetwon + 2,
                totalsetlost: unmatched_player[0].stats[0].totalsetlost,
                losts: unmatched_player[0].stats[0].losts,
                rating: unmatched_player[0].stats[0].rating,
                netwins: unmatched_player[0].stats[0].netwins + 1 + 0.01 * 2,
                round: args.round,
                season: {
                  connect: { season: args.season }
                }
              }
            ],
            update: [
              {
                data: {
                  totalsetwon: unmatched_player[0].stats[0].totalsetwon + 2,
                  wins: 1 + unmatched_player[0].stats[0].wins,
                  totalsetlost: unmatched_player[0].stats[0].totalsetlost,
                  rating: unmatched_player[0].stats[0].rating,
                  netwins: unmatched_player[0].stats[0].netwins + 1 + 0.01 * 2
                },
                where: {
                  id: unmatched_player[0].stats[0].id
                }
              }
            ]
          }
        },
        where: {
          email: unmatched_player[0].email
        }
      });
    }

    // fetch matches we just created (useful for debugging)
    const matches = await ctx.db.query.matches({
      where: {
        season: { season: args.season, round: args.round }
      }
    });

    return users;
  }
};
