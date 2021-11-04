import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import FieldForm from 'src/components/FieldForm';

const Score = ({
  players,
  changeField,
  playerSelected,
  eauS1,
  addScore,
}) => {
  const handleChangeSelect = (evt) => {
    changeField(parseInt(evt.target.value, 10), 'playerSelected');
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    addScore(eauS1, 'eauS1');
  };
  return (
    <div>
      <h1>Saison 1</h1>
      <form onSubmit={handleSubmit}>
        <select name="pseudo" id="pseudo" onChange={handleChangeSelect} value={playerSelected}>
          <option value="0">Choisir un joueur</option>
          {players.map((player) => (
            <option key={player.id} value={player.id}>{player.pseudo}</option>
          ))}
        </select>
        <FieldForm
          name="eauS1"
          placeholder="Nombre de carte eau"
          onChange={changeField}
          value={eauS1}
        />
        <button type="submit">Ok</button>
      </form>
    </div>
  );
};

Score.propTypes = {
  players: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      pseudo: PropTypes.string.isRequired,
    }),
  ).isRequired,
  changeField: PropTypes.func.isRequired,
  playerSelected: PropTypes.number.isRequired,
  eauS1: PropTypes.string.isRequired,
  addScore: PropTypes.func.isRequired,
};

export default Score;
