import { connect } from 'react-redux';
import Season1 from 'src/components/Score/Season/Season1';
import { changeValue, addScore, showS2 } from 'src/actions';

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
  showS2: () => {
    dispatch(showS2());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Season1);
