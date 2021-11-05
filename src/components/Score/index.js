import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import Season1 from 'src/containers/Season1';
import Season2 from 'src/containers/Season2';
import Season3 from 'src/containers/Season3';
import { List } from 'semantic-ui-react';

const Score = ({
  players,
}) => (
  <div>
    <Season1 />
    <List horizontal>
      {players.map((player) => (
        <List.Item key={player.id}>
          {player.pseudo}
          <List.Item>Eau : {player.eauS1}</List.Item>
          <List.Item>Total : {player.totalS1}</List.Item>
        </List.Item>
      ))}
    </List>
    <Season2 />
    <List horizontal>
      {players.map((player) => (
        <List.Item key={player.id}>
          {player.pseudo}
          <List.Item>Eau : {player.eauS2}</List.Item>
          <List.Item>Végétation : {player.vegeS2}</List.Item>
          <List.Item>Total saison 2 : {player.totalS2}</List.Item>
          <List.Item>Total : {(typeof player.totalS2 !== 'undefined') ? player.total : ''}</List.Item>
        </List.Item>
      ))}
    </List>
    <Season3 />
    <List horizontal>
      {players.map((player) => (
        <List.Item key={player.id}>
          {player.pseudo}
          <List.Item>Eau : {player.eauS3}</List.Item>
          <List.Item>Végétation : {player.vegeS3}</List.Item>
          <List.Item>Pierre : {player.pierreS3}</List.Item>
          <List.Item>Sakura : {player.sakuraS3}</List.Item>
          <List.Item>Total saison 3 : {player.totalS3}</List.Item>
          <List.Item>Total : {(typeof player.totalS3 !== 'undefined') ? player.total : ''}</List.Item>
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
};

export default Score;
