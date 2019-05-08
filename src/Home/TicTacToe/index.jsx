import React from 'react';
import { connect } from 'react-redux';

import './tictactoe.scss';
import Header from '../Header';
import Footer from '../Footer';
import Area from '../Area';

const Home = () => {
  return (
    <div className="tictactoe">
      <div className="tictactoe__content">
        <Header />
        <Area />
        <Footer />
        <div className="tictactoe__btns">
          <button className="btn btn-primary btn-reset" type="button">New Game</button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
