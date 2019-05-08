import React from 'react';
import { connect } from 'react-redux';

import './new-game.scss';
import { NEW_GAME } from '../../../store/constants/ticTacToe.constants';

const NewGame = ({ startNewGame }) => (
  <div className="tictactoe__btns">
    <button
      className="btn btn-primary btn-reset"
      type="button"
      onClick={() => startNewGame(NEW_GAME)}
    >
      New Game
    </button>
  </div>
);

const mapDispatchToProps = dispatch => ({
  startNewGame(type) {
    dispatch({ type });
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(NewGame);
