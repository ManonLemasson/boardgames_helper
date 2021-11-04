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

export function calcScore(array) {
  const newArray = array.map((player) => {
    if (player.eauS1 !== '') {
      player.totalS1 = parseInt(player.eauS1, 10) * 3;
    }
    if (player.eauS2 !== '') {
      player.totalS2 += parseInt(player.eauS2, 10) * 3;
    }
    if (player.vegeS2 !== '') {
      player.totalS2 += parseInt(player.vegeS2, 10) * 4;
    }
    if (player.eauS3 !== '') {
      player.totalS3 += parseInt(player.eauS3, 10) * 3;
    }
    if (player.vegeS3 !== '') {
      player.totalS3 += parseInt(player.vegeS3, 10) * 4;
    }
    if (player.pierreS3 !== '') {
      player.totalS3 += parseInt(player.pierreS3, 10) * 7;
    }
    if (player.sakuraS3 !== '') {
      player.totalS3 += ((
        parseInt(player.sakuraS3, 10) <= 15) ? sakuraValue[parseInt(player.sakuraS3, 10)] : 120
      );
    }
    player.total = player.totalS1 + player.totalS2 + player.totalS3;
    return player;
  });
  return newArray;
}
