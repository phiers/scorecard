

const roundReducers = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_PLAYERS': {
      const players = action.players;
      return {
        ...state,
        players,
      };
    }
    case 'CANCEL_ROUND':
      return {};

    case 'SAVE_HOLE_SCORE': {
      // save scores to round.player.scores
      const newPlayerState = state.players.map((player) => {
        if (player.roundId === action.id) {
          const newScoreArray = player.scores.map((score) => {
            if (score.hole === action.hole) {
              const holeScore = action.score;
              return {
                ...score,
                score: holeScore,
              };
            }
            return score;
          });
          return {
            ...player,
            scores: newScoreArray,
          };
        }
        return player;
      });
      // save scores to round.course.holeData
      const newHoleArray = state.course.holeData.map((hole) => {
        if (hole.holeNo === action.hole) {
          const score = action.score;
          const propName = action.id;
          return {
            ...hole,
            [propName]: score,
          };
        }
        return hole;
      });

      return {
        ...state,
        players: newPlayerState,
        course: {
          id: state.course.id,
          name: state.course.name,
          state: state.course.state,
          holeData: newHoleArray,
        },
      };
    }
    case 'SELECT_COURSE': {
      const course = action.course;
      return {
        ...state,
        course,
      };
    }
    case 'SET_HANDICAPS_AND_ROUND_ID': {
      const players = state.players.map((player) => {
        if (player.id === action.id) {
          return {
            ...player,
            hdcp: action.hdcp,
            roundId: action.roundId,
          };
        }
        return player;
      });
      return {
        ...state,
        players,
      };
    }
    case 'SETUP_SCORING': {
      const players = state.players.map((player) => {
        if (player.id === action.id) {
          return {
            ...player,
            scores: action.scores,
          };
        }
        return player;
      });
      return {
        ...state,
        players,
      };
    }
    case 'UPDATE_LAST_HOLE':
      return {
        ...state,
        lastHole: action.hole,
      };
    default:
      return state;
  }
};

export default roundReducers;
