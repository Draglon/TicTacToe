import React, { Component } from 'react';
import { connect } from 'react-redux';

import { CURRENT_PLAYER, CURRENT_STEP, CURRENT_AREA } from '../../../store/constants/ticTacToe.constants';
import { getTicTacToe } from '../../../store/selectors/ticTacToe';

import './nav.scss';
import Button from './Button';

class Nav extends Component {
  changeStep(step) {
    const { setTicTacToe } = this.props;
    const { currentPlayer, allSteps } = JSON.parse(JSON.stringify(this.props.ticTacToe));

    const newStep = step < 0 ? 0 : step;

    setTicTacToe(CURRENT_AREA, allSteps[newStep]);
    setTicTacToe(CURRENT_PLAYER, currentPlayer === 1 ? 2 : 1);
    setTicTacToe(CURRENT_STEP, newStep);
  }

  render() {
    const { allSteps, currentStep } = this.props.ticTacToe;

    return (
      <nav className="tictactoe__nav">
        <Button
          className="btn-step step-back"
          disabled={currentStep === 0}
          onClick={() => this.changeStep(currentStep - 1)}
          classIcon="icon-arrow-left"
          buttonText="Step Back"
        />
        <Button
          className="btn-step step-forward"
          disabled={!allSteps.length || currentStep === allSteps.length - 1}
          onClick={() => this.changeStep(currentStep + 1)}
          classIcon="icon-arrow-right"
          buttonText="Step Forward"
        />
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  ticTacToe: getTicTacToe(state),
});

const mapDispatchToProps = dispatch => ({
  setTicTacToe(type, payload) {
    dispatch({ type, payload });
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Nav);
