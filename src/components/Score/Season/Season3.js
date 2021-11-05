import React from 'react';
import PropTypes from 'prop-types';
import FieldForm from 'src/components/FieldForm';

import './style.scss';

const Season3 = ({
  players,
  changeField,
  playerSelected,
  eauS3,
  vegeS3,
  pierreS3,
  sakuraS3,
  addScore,
}) => {
  const handleChangeSelect = (evt) => {
    changeField(parseInt(evt.target.value, 10), 'playerSelected');
  };
  const handleSubmit = (name, value) => (event) => {
    event.preventDefault();
    addScore(value, name);
  };
  return (
    <section className="season">
      <h1 className="season-title">Saison 3</h1>
      <form onSubmit={handleSubmit('eauS3', eauS3)} className="season-form">
        <div className="season-form-field">
          <select name="pseudo" id="pseudo" onChange={handleChangeSelect} value={playerSelected} className="season-form-field-input">
            <option value="0">Choisir un joueur</option>
            {players.map((player) => (
              <option key={player.id} value={player.id}>{player.pseudo}</option>
            ))}
          </select>
        </div>
        <FieldForm
          name="eauS3"
          placeholder="Nombre de carte eau"
          onChange={changeField}
          value={eauS3}
          type="number"
        />
        <button type="submit" className="season-form-button">Ok</button>
      </form>
      <form onSubmit={handleSubmit('vegeS3', vegeS3)} className="season-form">
        <div className="season-form-field">
          <select name="pseudo" id="pseudo" onChange={handleChangeSelect} value={playerSelected} className="season-form-field-input">
            <option value="0">Choisir un joueur</option>
            {players.map((player) => (
              <option key={player.id} value={player.id}>{player.pseudo}</option>
            ))}
          </select>
        </div>
        <FieldForm
          name="vegeS3"
          placeholder="Nombre de carte végétation"
          onChange={changeField}
          value={vegeS3}
          type="number"
        />
        <button type="submit" className="season-form-button">Ok</button>
      </form>
      <form onSubmit={handleSubmit('pierreS3', pierreS3)} className="season-form">
        <div className="season-form-field">
          <select name="pseudo" id="pseudo" onChange={handleChangeSelect} value={playerSelected} className="season-form-field-input">
            <option value="0">Choisir un joueur</option>
            {players.map((player) => (
              <option key={player.id} value={player.id}>{player.pseudo}</option>
            ))}
          </select>
        </div>
        <FieldForm
          name="pierreS3"
          placeholder="Nombre de carte pierre"
          onChange={changeField}
          value={pierreS3}
          type="number"
        />
        <button type="submit" className="season-form-button">Ok</button>
      </form>
      <form onSubmit={handleSubmit('sakuraS3', sakuraS3)} className="season-form">
        <div className="season-form-field">
          <select name="pseudo" id="pseudo" onChange={handleChangeSelect} value={playerSelected} className="season-form-field-input">
            <option value="0">Choisir un joueur</option>
            {players.map((player) => (
              <option key={player.id} value={player.id}>{player.pseudo}</option>
            ))}
          </select>
        </div>
        <FieldForm
          name="sakuraS3"
          placeholder="Nombre de carte sakura"
          onChange={changeField}
          value={sakuraS3}
          type="number"
        />
        <button type="submit" className="season-form-button">Ok</button>
      </form>
    </section>
  );
};

Season3.propTypes = {
  players: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      pseudo: PropTypes.string.isRequired,
    }),
  ).isRequired,
  changeField: PropTypes.func.isRequired,
  playerSelected: PropTypes.number.isRequired,
  eauS3: PropTypes.string.isRequired,
  vegeS3: PropTypes.string.isRequired,
  pierreS3: PropTypes.string.isRequired,
  sakuraS3: PropTypes.string.isRequired,
  addScore: PropTypes.func.isRequired,
};

export default Season3;
