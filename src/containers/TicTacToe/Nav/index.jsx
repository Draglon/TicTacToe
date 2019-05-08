import React from 'react';
import { connect } from 'react-redux';

import './nav.scss';

const Nav = () => {
  return (
    <header className="tictactoe__header">
      <button type="button" className="btn-step step-back" disabled>
        <i className="icon-arrow-left"/>
        Step Back
      </button>
      <button type="button" className="btn-step step-forward" disabled>
        Step Forward
        <i className="icon-arrow-right"/>
      </button>
    </header>
  );
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Nav);
