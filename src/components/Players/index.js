import React from 'react';
import PropTypes from 'prop-types';
import {
  Link,
} from 'react-router-dom';

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
          Ajouter
        </button>
      </form>
      {!(typeof players[0] === 'undefined') && (
        <div>
          <h2>Liste des joueurs :</h2>
          <ul>
            {players.map((player) => (
              <li key={player.id}>{player.pseudo}</li>
            ))}
          </ul>
          <button type="button"><Link to="ohanami">Ohanami</Link></button>
          <button type="button" onClick={resetPlayers}>Annuler</button>
        </div>
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
