import React from 'react';
import { connect } from 'react-redux';

import './Home.scss';
import Header from './Header';
import Footer from './Footer';
import Area from './Area';

const Home = () => {
  return (
    <section className="home">
      <div className="wrapper">
        <div className="tictactoe">
          <div className="tictactoe__content">
            <Header />
            <Area />
            <Footer />
          </div>
        </div>
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
