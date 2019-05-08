import React from 'react';
import { connect } from 'react-redux';

import './Home.scss';
import TicTacToe from './TicTacToe';

const Home = () => {
  return (
    <section className="home">
      <div className="wrapper">
        <TicTacToe />
      </div>
    </section>
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
