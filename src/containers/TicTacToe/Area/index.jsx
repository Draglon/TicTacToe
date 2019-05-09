import React, { Component } from 'react';
import { connect } from 'react-redux';

import './area.scss';
import {
  CURRENT_PLAYER,
  CURRENT_STEP,
  CURRENT_AREA,
  ALL_STEPS,
} from '../../../store/constants/ticTacToe.constants';
import { getTicTacToe } from '../../../store/selectors/ticTacToe';

class Area extends Component {
  setNewArea(index) {
    const { setTicTacToe, ticTacToe } = this.props;
    const {
      currentPlayer,
      currentStep,
      currentArea,
      allSteps,
    } = JSON.parse(JSON.stringify(ticTacToe));

    if (!currentArea[index]) {
      currentArea[index] = currentPlayer === 1 ? 'x' : 'o';
      allSteps[currentStep + 1] = currentArea;

      setTicTacToe(ALL_STEPS, allSteps.slice(0, currentStep + 2));

      setTicTacToe(CURRENT_PLAYER, currentPlayer === 1 ? 2 : 1);
      setTicTacToe(CURRENT_STEP, currentStep + 1);
      setTicTacToe(CURRENT_AREA, currentArea);
    }
  }

  render() {
    const { currentArea } = this.props.ticTacToe;

    return (
      <div className="area">
        {currentArea.map((item, index) => (
          <div className={`area__item${item && ' active'}`} key={index} onClick={() => this.setNewArea(index)}>
            {item === 'x' && <i className="icon-cross"/>}
            {item === 'o' && <i className="icon-circle"/>}
          </div>
        ))}
      </div>
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
)(Area);
