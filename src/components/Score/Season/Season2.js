import React from 'react';
import PropTypes from 'prop-types';
import FieldForm from 'src/components/FieldForm';
import { isValuesOk } from 'src/selectors';

import './style.scss';

const Season2 = ({
  players,
  changeField,
  playerSelected,
  eauS2,
  vegeS2,
  addScore,
  showS3,
}) => {
  const handleChangeSelect = (evt) => {
    changeField(parseInt(evt.target.value, 10), 'playerSelected');
  };
  const handleSubmit = (name, value) => (event) => {
    event.preventDefault();
    addScore(value, name);
  };
  const handleClick = () => {
    if (isValuesOk(players, 'S2')) {
      showS3();
    }
  };
  return (
    <section className="season">
      <h1 className="season-title">Saison 2</h1>
      <form onSubmit={handleSubmit('eauS2', eauS2)} className="season-form">
        <div className="season-form-field">
          <select name="pseudo" id="pseudo" onChange={handleChangeSelect} value={playerSelected} className="season-form-field-input">
            <option value="0">Choisir un joueur</option>
            {players.map((player) => (
              <option key={player.id} value={player.id}>{player.pseudo}</option>
            ))}
          </select>
        </div>
        <FieldForm
          name="eauS2"
          placeholder="Nombre de carte eau"
          onChange={changeField}
          value={eauS2}
          type="number"
        />
        <button type="submit" className="season-form-button">Ok</button>
      </form>
      <form onSubmit={handleSubmit('vegeS2', vegeS2)} className="season-form">
        <div className="season-form-field">
          <select name="pseudo" id="pseudo" onChange={handleChangeSelect} value={playerSelected} className="season-form-field-input">
            <option value="0">Choisir un joueur</option>
            {players.map((player) => (
              <option key={player.id} value={player.id}>{player.pseudo}</option>
            ))}
          </select>
        </div>
        <FieldForm
          name="vegeS2"
          placeholder="Nombre de carte végétation"
          onChange={changeField}
          value={vegeS2}
          type="number"
        />
        <button type="submit" className="season-form-button">Ok</button>
      </form>
      <button type="button" className="season-form-button" onClick={handleClick}>Saison suivante</button>
    </section>
  );
};

Season2.propTypes = {
  players: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      pseudo: PropTypes.string.isRequired,
    }),
  ).isRequired,
  changeField: PropTypes.func.isRequired,
  playerSelected: PropTypes.number.isRequired,
  eauS2: PropTypes.string.isRequired,
  vegeS2: PropTypes.string.isRequired,
  addScore: PropTypes.func.isRequired,
  showS3: PropTypes.func.isRequired,
};

export default Season2;
