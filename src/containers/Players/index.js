import { connect } from 'react-redux';
import Players from 'src/components/Players';
import { changeValue, addPlayer, resetPlayers } from 'src/actions';

const mapStateToProps = (state) => ({
  pseudo: state.pseudo,
  players: state.players,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    const action = changeValue(name, value);
    dispatch(action);
  },
  addPlayer: () => {
    dispatch(addPlayer());
  },
  resetPlayers: () => {
    dispatch(resetPlayers());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Players);
