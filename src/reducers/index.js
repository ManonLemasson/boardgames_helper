import {
  CHANGE_VALUE,
  ADD_PLAYER,
  RESET_PLAYERS,
  ADD_SCORE,
} from 'src/actions';
import { getHighestId, addScoreToPlayer } from 'src/selectors';

export const initialState = {
  pseudo: '',
  players: [],
  playerSelected: 0,
  eauS1: '',
  total: 0,
  eauS2: '',
  vegeS2: '',
  totalS2: 0,
  eauS3: '',
  vegeS3: '',
  pierreS3: '',
  sakuraS3: '',
  totalS3: 0,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_VALUE:
      return {
        ...state,
        [action.key]: action.value,
      };
    case ADD_PLAYER:
      return {
        ...state,
        players: [
          ...state.players,
          {
            id: getHighestId(state.players) + 1,
            pseudo: state.pseudo,
          },
        ],
        pseudo: '',
      };
    case RESET_PLAYERS:
      return {
        ...state,
        players: [],
        pseudo: '',
      };
    case ADD_SCORE:
      return {
        ...state,
        players: addScoreToPlayer(
          state.players,
          action.key,
          parseInt(action.value, 10),
          state.playerSelected,
        ),
        eauS1: '',
        eauS2: '',
        vegeS2: '',
        eauS3: '',
        vegeS3: '',
        pierreS3: '',
        sakuraS3: '',
        playerSelected: 0,
      };
    default:
      return state;
  }
};

export default reducer;
