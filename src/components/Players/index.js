import React from 'react';
import PropTypes from 'prop-types';
import {
  Link,
} from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

import './style.scss';

import FieldForm from 'src/components/FieldForm';

const Players = ({
  pseudo,
  changeField,
  addPlayer,
  players,
  resetPlayers,
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    addPlayer();
  };
  return (
    <div>
      <form className="form-player" onSubmit={handleSubmit}>
        <FieldForm
          name="pseudo"
          placeholder="Pseudo du joueur"
          onChange={changeField}
          value={pseudo}
        />
        <button
          type="submit"
          className="form-player-button"
        >
          Ajouter {'\u00A0'}
          <Icon disabled name="plus" />
        </button>
      </form>
      {!(typeof players[0] === 'undefined') && (
        <section className="gamerList">
          <h1 className="gamerList-title">Liste des joueurs :</h1>
          <ul className="gamerList-list">
            {players.map((player) => (
              <li key={player.id} className="gamerList-list-item"><Icon disabled name="user" />{player.pseudo}</li>
            ))}
          </ul>
          <button type="button" className="gamerList-button" onClick={resetPlayers}>
            Annuler {'\u00A0'}
            <Icon disabled name="trash" />
          </button>
          <h2 className="gamerList-title">Jeux :</h2>
          <Link to="ohanami" className="gamerList-button">Ohanami</Link>
        </section>
      )}
    </div>
  );
};

Players.propTypes = {
  pseudo: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  addPlayer: PropTypes.func.isRequired,
  players: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      pseudo: PropTypes.string.isRequired,
    }),
  ),
  resetPlayers: PropTypes.func.isRequired,
};

Players.defaultProps = {
  players: null,
};

export default Players;
