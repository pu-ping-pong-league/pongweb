import { Context, getUserId } from "../../utils";

export default {
  generateRound: async (parent, args, ctx: Context, info) => {
    const users = await ctx.db.query.users({
      where: {
        season: { season: args.season }
      }
    });
    console.log(users);

    // format user data for matchmaking
    var users_array = [];
    for (var i = 0; i < users.length; i = i + 2) {
      const net_wins = users[i].stats[0].wins - users[i].stats[0].losts;
      const net_sets = users[i].stats[0].totalsetwon - users[i].stats[0].totalsetlost;
      users_array.push([users[i], net_wins, net_sets]);
    }

    // sort user data in order required for matchmaking
    function user_comparator(a, b) {
      if (a[1] > b[1]) return 1;
      if (a[1] == b[1] && a[2] > b[2]) return 1;
      return 0;
    }
    users_array.sort(user_comparator);

    // matchmaking function
    function match_em(players, unmatched_player, args) {
      // handle unmatched player
      if (unmatched_player != null) {
        players.unshift(unmatched_player);
        unmatched_player = null;
      }

      /* Generate matches using "cut in the middle -> parallel fold". */

      // find middle cut and next unmatched player (if any)
      var middle = 0;
      var top_middle = 0;
      if (players.length % 2 == 0) {
        middle = players.length / 2;
        top_middle = middle;
      } else {
        middle = players.length / 2 + 1;
        top_middle = middle - 1;
        unmatched_player = players[middle - 1];
      }

      // perform parallel fold matching
      for (var i = 0; i < top_middle; i++) {
        ctx.db.mutation.createMatch({
          data: {
            player1: {
              connect: { email: players[i].playeremail }
            },
            player2: {
              connect: { email: players[i + middle].playeremail }
            },
            season: { connect: { season: args.season } }
          }
        });
      }

      return unmatched_player
    }

    // do the matching
    var unmatched_player = null;
    const min_wins = users_array[users.length - 1][1];
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
      if (current_players.length > 0) {
        unmatched_player = match_em(current_players, unmatched_player, args)
      }
    }

    // form 'Bye' match if odd number of players
    if (unmatched_player != null) {
      await ctx.db.mutation.createMatch({
        data: {
          player1: {
            connect: { email: unmatched_player.playeremail }
          },
          season: { connect: { season: args.season } }
        }
      });
    }

    // fetch matches we just created (useful for debugging)
    const matches = await ctx.db.query.matches({
      where: {
        season: { season: args.season, round: args.round }
      }
    });

    return matches;
  }
};
