import React from 'react';

import './Home.scss';
import TicTacToe from '../TicTacToe';

const Home = () => (
  <section className="home">
    <div className="wrapper">
      <TicTacToe />
    </div>
  </section>
);

export default Home;
