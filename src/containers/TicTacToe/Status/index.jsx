import React from 'react';
import { connect } from 'react-redux';

import './status.scss';
import { getTicTacToe } from '../../../store/selectors/ticTacToe';

const Status = ({ ticTacToe }) => (
  <footer className="tictactoe__status">
    <div className="sets">Sets played: {ticTacToe.sets}</div>
    <div className="player player--first">Player 1 wins: {ticTacToe.wins.player1}</div>
    <div className="player player--second">Player 2 wins: {ticTacToe.wins.player2}</div>
  </footer>
);

const mapStateToProps = state => ({
  ticTacToe: getTicTacToe(state),
});

export default connect(
  mapStateToProps,
  null,
)(Status);
