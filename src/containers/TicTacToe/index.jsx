import React from 'react';

import './tictactoe.scss';
import Nav from '../Nav';
import Status from '../Status';
import Area from '../Area';
import NewGame from '../NewGame';

const TicTacToe = () => (
  <div className="tictactoe">
    <div className="tictactoe__content">
      <Nav />
      <Area />
      <Status />
      <NewGame />
    </div>
  </div>
);

export default TicTacToe;
