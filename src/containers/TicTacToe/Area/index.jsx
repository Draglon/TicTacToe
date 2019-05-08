import React, { Component } from 'react';
import { connect } from 'react-redux';

import './area.scss';
import {
  CURRENT_PLAYER,
  ARRAY_STEPS,
} from '../../../store/constants/ticTacToe.constants';
import { getTicTacToe } from '../../../store/selectors/ticTacToe';

class Area extends Component {
  setNewArea(index) {
    const { setTicTacToe, ticTacToe } = this.props;
    const obj = JSON.parse(JSON.stringify(ticTacToe));
    const { arraySteps, currentPlayer } = obj;

    if (!arraySteps[index]) {
      arraySteps[index] = currentPlayer === 1 ? 'x' : 'o';
      setTicTacToe(CURRENT_PLAYER, currentPlayer === 1 ? 2 : 1);
      setTicTacToe(ARRAY_STEPS, arraySteps);
    }
    // (<i className="icon-cross"/>)
  }

  render() {
    const { arraySteps } = this.props.ticTacToe;

    return (
      <div className="area">
        {arraySteps.map((item, index) => (
          <div className="area__item" key={index} onClick={() => this.setNewArea(index)}>
            {item}
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
