import { connect } from 'react-redux';
import Score from 'src/components/Score';
import { changeValue, addScore } from 'src/actions';

const mapStateToProps = (state) => ({
  players: state.players,
  playerSelected: state.playerSelected,
  eauS1: state.eauS1,
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

export default connect(mapStateToProps, mapDispatchToProps)(Score);
