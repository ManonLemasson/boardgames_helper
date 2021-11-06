/* eslint-disable import/prefer-default-export */
import { sakuraValue } from 'src/data';

export function getHighestId(array) {
  if (array.length === 0) {
    return 0;
  }
  const id = array.map((object) => object.id);
  const highestId = Math.max(...id);
  return highestId;
}

export function addScoreToPlayer(
  array,
  key,
  value,
  playerSelected,
) {
  const newArray = array.map((player) => {
    if (player.id === playerSelected) {
      player[key] = value;
    }
    return player;
  });
  return newArray;
}

export function isValuesOk(array, season) {
  if (season === 'S1') {
    const newArray = array.map((player) => {
      if (typeof player.eauS1 !== 'undefined') {
        return player;
      }
      return null;
    });
    for (let i = 0; i < newArray.length; i += 1) {
      if (newArray[i] === null) {
        return false;
      }
    }
    return true;
  }
  if (season === 'S2') {
    const newArray = array.map((player) => {
      if (typeof player.eauS2 !== 'undefined' && typeof player.vegeS2 !== 'undefined') {
        return player;
      }
      return null;
    });
    for (let i = 0; i < newArray.length; i += 1) {
      if (newArray[i] === null) {
        return false;
      }
    }
    return true;
  }
  if (season === 'S3') {
    const newArray = array.map((player) => {
      if (typeof player.eauS3 !== 'undefined' && typeof player.vegeS3 !== 'undefined' && typeof player.pierreS3 !== 'undefined' && typeof player.sakuraS3 !== 'undefined') {
        return player;
      }
      return null;
    });
    for (let i = 0; i < newArray.length; i += 1) {
      if (newArray[i] === null) {
        return false;
      }
    }
    return true;
  }
  return false;
}

export function calcScore(array) {
  const newArray = array.map((player) => {
    if (typeof player.eauS1 !== 'undefined') {
      player.totalS1 = parseInt(player.eauS1, 10) * 3;
    }
    if (typeof player.eauS2 !== 'undefined') {
      if (typeof player.totalS2 === 'undefined') {
        player.totalS2 = parseInt(player.eauS2, 10) * 3;
      }
      else {
        player.totalS2 += parseInt(player.eauS2, 10) * 3;
      }
    }
    if (typeof player.vegeS2 !== 'undefined') {
      if (typeof player.totalS2 === 'undefined') {
        player.totalS2 = parseInt(player.vegeS2, 10) * 4;
      }
      else {
        player.totalS2 += parseInt(player.vegeS2, 10) * 4;
      }
    }
    if (typeof player.eauS3 !== 'undefined') {
      if (typeof player.totalS3 === 'undefined') {
        player.totalS3 = parseInt(player.eauS3, 10) * 3;
      }
      else {
        player.totalS3 += parseInt(player.eauS3, 10) * 3;
      }
    }
    if (typeof player.vegeS3 !== 'undefined') {
      if (typeof player.totalS3 === 'undefined') {
        player.totalS3 = parseInt(player.vegeS3, 10) * 4;
      }
      else {
        player.totalS3 += parseInt(player.vegeS3, 10) * 4;
      }
    }
    if (typeof player.pierreS3 !== 'undefined') {
      if (typeof player.totalS3 === 'undefined') {
        player.totalS3 = parseInt(player.pierreS3, 10) * 7;
      }
      else {
        player.totalS3 += parseInt(player.pierreS3, 10) * 7;
      }
    }
    if (typeof player.sakuraS3 !== 'undefined') {
      if (typeof player.totalS3 === 'undefined') {
        player.totalS3 = ((
          parseInt(player.sakuraS3, 10) <= 15) ? sakuraValue[parseInt(player.sakuraS3, 10)] : 120
        );
      }
      else {
        player.totalS3 += ((
          parseInt(player.sakuraS3, 10) <= 15) ? sakuraValue[parseInt(player.sakuraS3, 10)] : 120
        );
      }
    }
    player.total = 0;
    player.total = ((typeof player.totalS1 === 'undefined') ? 0 : player.totalS1)
    + ((typeof player.totalS2 === 'undefined') ? 0 : player.totalS2)
    + ((typeof player.totalS3 === 'undefined') ? 0 : player.totalS3);
    return player;
  });
  return newArray;
}
