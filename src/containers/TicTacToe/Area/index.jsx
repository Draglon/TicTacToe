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
    const { arraySteps, currentPlayer } = JSON.parse(JSON.stringify(ticTacToe));

    if (!arraySteps[index]) {
      arraySteps[index] = currentPlayer === 1 ? 'x' : 'o';
      setTicTacToe(CURRENT_PLAYER, currentPlayer === 1 ? 2 : 1);
      setTicTacToe(ARRAY_STEPS, arraySteps);
    }
  }

  render() {
    const { arraySteps } = this.props.ticTacToe;

    return (
      <div className="area">
        {arraySteps.map((item, index) => (
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
