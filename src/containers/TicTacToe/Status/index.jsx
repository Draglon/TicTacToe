import React from 'react';
import { connect } from 'react-redux';

import './status.scss';

const Status = () => {
  return (
    <footer className="tictactoe__footer">
      <div className="sets">Sets played: 5</div>
      <div className="player player--first">Player 1 wins: 1</div>
      <div className="player player--second">Player 2 wins: 4</div>
    </footer>
  );
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Status);
