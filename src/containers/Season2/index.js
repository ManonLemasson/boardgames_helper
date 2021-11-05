import { connect } from 'react-redux';
import Season2 from 'src/components/Score/Season/Season2';
import { changeValue, addScore } from 'src/actions';

const mapStateToProps = (state) => ({
  players: state.players,
  playerSelected: state.playerSelected,
  eauS2: state.eauS2,
  vegeS2: state.vegeS2,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    const action = changeValue(name, value);
    dispatch(action);
  },
  addScore: (value, name) => {
    const action = addScore(name, value);
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Season2);
