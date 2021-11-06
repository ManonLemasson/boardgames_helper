import { connect } from 'react-redux';
import Season3 from 'src/components/Score/Season/Season3';
import { changeValue, addScore, calcScore } from 'src/actions';

const mapStateToProps = (state) => ({
  players: state.players,
  playerSelected: state.playerSelected,
  eauS3: state.eauS3,
  vegeS3: state.vegeS3,
  pierreS3: state.pierreS3,
  sakuraS3: state.sakuraS3,
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
  calcScore: () => {
    dispatch(calcScore());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Season3);
