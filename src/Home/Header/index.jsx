import React from 'react';
import { connect } from 'react-redux';

import './header.scss';

const Header = () => {
  return (
    <header className="tictactoe__header">
      <div className="btn-step step-back">
        <i className="icon-arrow-left"/>
        Step Back
      </div>
      <div className="btn-step step-forward">
        Step Forward
        <i className="icon-arrow-right"/>
      </div>
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
)(Header);
