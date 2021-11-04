export const CHANGE_VALUE = 'CHANGE_VALUE';
export const changeValue = (key, value) => ({
  type: CHANGE_VALUE,
  key: key,
  value: value,
});

export const ADD_PLAYER = 'ADD_PLAYER';
export const addPlayer = () => ({
  type: ADD_PLAYER,
});

export const RESET_PLAYERS = 'RESET_PLAYERS';
export const resetPlayers = () => ({
  type: RESET_PLAYERS,
});

export const ADD_SCORE = 'ADD_SCORE';
export const addScore = (key, value) => ({
  type: ADD_SCORE,
  key: key,
  value: value,
});
