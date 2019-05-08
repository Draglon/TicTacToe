import React from 'react';
import { connect } from 'react-redux';

import './footer.scss';

const Footer = () => {
  return (
    <footer className="tictactoe__footer">
      <div className="steps">Sets played: 5</div>
      <div className="first-player">Player 1 wins: 1</div>
      <div className="second-player">Player 2 wins: 4</div>
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
)(Footer);
