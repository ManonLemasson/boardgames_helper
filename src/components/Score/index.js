import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import Season1 from 'src/containers/Season1';
import Season2 from 'src/containers/Season2';
import Season3 from 'src/containers/Season3';
import { List } from 'semantic-ui-react';

const Score = ({
  players,
  showS1,
  showS2,
  showS3,
}) => (
  <div>
    {showS1 && (
      <Season1 />
    )}
    {showS2 && (
      <Season2 />
    )}
    {showS3 && (
      <Season3 />
    )}
    <List horizontal id="list-players">
      {players.map((player) => (
        <List.Item key={player.id} id="list-item-pseudo">
          {player.pseudo}
          <List.Item id="list-item-season">Saison 1</List.Item>
          <List.Item id="list-item"> <List.Icon name="tint" verticalAlign="top" /> {player.eauS1}</List.Item>
          <List.Item id="list-item-season">Saison 2</List.Item>
          <List.Item id="list-item"><List.Icon name="tint" verticalAlign="top" /> {player.eauS2}</List.Item>
          <List.Item id="list-item"><List.Icon name="leaf" verticalAlign="top" /> {player.vegeS2}</List.Item>
          <List.Item id="list-item-season">Saison 3</List.Item>
          <List.Item id="list-item"><List.Icon name="tint" verticalAlign="top" /> {player.eauS3}</List.Item>
          <List.Item id="list-item"><List.Icon name="leaf" verticalAlign="top" /> {player.vegeS3}</List.Item>
          <List.Item id="list-item"><List.Icon name="diamond" verticalAlign="top" /> {player.pierreS3}</List.Item>
          <List.Item id="list-item"><List.Icon name="certificate" verticalAlign="top" /> {player.sakuraS3}</List.Item>
          <List.Item id="list-item-season">Total : {(typeof player.totalS3 !== 'undefined' && typeof player.totalS2 !== 'undefined' && typeof player.totalS1 !== 'undefined') ? player.total : ''}</List.Item>
        </List.Item>
      ))}
    </List>
  </div>
);

Score.propTypes = {
  players: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      pseudo: PropTypes.string.isRequired,
      totalS1: PropTypes.number,
      eauS1: PropTypes.number,
      totalS2: PropTypes.number,
      eauS2: PropTypes.number,
      vegeS2: PropTypes.number,
      totalS3: PropTypes.number,
      eauS3: PropTypes.number,
      vegeS3: PropTypes.number,
      pierreS3: PropTypes.number,
      sakuraS3: PropTypes.number,
      total: PropTypes.number,
    }),
  ).isRequired,
  showS1: PropTypes.bool.isRequired,
  showS2: PropTypes.bool.isRequired,
  showS3: PropTypes.bool.isRequired,
};

export default Score;
