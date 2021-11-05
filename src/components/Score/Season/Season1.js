import React from 'react';
import PropTypes from 'prop-types';
import FieldForm from 'src/components/FieldForm';

import './style.scss';

const Season1 = ({
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
    <section className="season">
      <h1 className="season-title">Saison 1</h1>
      <form onSubmit={handleSubmit} className="season-form">
        <div className="season-form-field">
          <select name="pseudo" id="pseudo" onChange={handleChangeSelect} value={playerSelected} className="season-form-field-input">
            <option value="0">Choisir un joueur</option>
            {players.map((player) => (
              <option key={player.id} value={player.id}>{player.pseudo}</option>
            ))}
          </select>
        </div>
        <FieldForm
          name="eauS1"
          placeholder="Nombre de carte eau"
          onChange={changeField}
          value={eauS1}
          type="number"
        />
        <button type="submit" className="season-form-button">Ok</button>
      </form>
    </section>
  );
};

Season1.propTypes = {
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

export default Season1;
