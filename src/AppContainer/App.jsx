import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.scss';
import * as components from './Components';

class App extends Component {
  render() {
    const { page } = this.props;
    const Content = components[page];

    return (
      <main className="main page">
        <Content />
      </main>
    );
  }
}

const mapStateToProps = state => ({
  page: state.page,
});

export default connect(
  mapStateToProps,
  null,
)(App);
