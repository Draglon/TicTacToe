import React, { Component } from 'react';
import { connect } from 'react-redux';

import './area.scss';
import {
  CURRENT_PLAYER,
  CURRENT_STEP,
  CURRENT_AREA,
  ALL_STEPS,
  SETS,
  WINS,
  NEW_SET,
} from '../../../store/constants/ticTacToe.constants';
import { getTicTacToe } from '../../../store/selectors/ticTacToe';

class Area extends Component {
  winningСombinations(indexes) {
    const combinations = [
      [0, 1, 2], [0, 3, 6],
      [0, 4, 8], [3, 4, 5],
      [1, 4, 7], [2, 4, 6],
      [6, 7, 8], [2, 5, 8],
    ];

    return combinations.filter((item, index) => indexes.includes(index));
  }

  getСombinations(index) {
    switch (index) {
      case 0: return this.winningСombinations([0, 1, 2]);
      case 1: return this.winningСombinations([0, 4]);
      case 2: return this.winningСombinations([0, 5, 7]);
      case 3: return this.winningСombinations([1, 3]);
      case 4: return this.winningСombinations([2, 3, 4, 5]);
      case 5: return this.winningСombinations([3, 7]);
      case 6: return this.winningСombinations([1, 5, 6]);
      case 7: return this.winningСombinations([4, 6]);
      case 8: return this.winningСombinations([2, 6, 7]);
      default: return false;
    }
  }

  setNewArea(index) {
    const { setTicTacToe, ticTacToe } = this.props;
    const {
      currentPlayer,
      currentStep,
      currentArea,
      allSteps,
      sets,
      wins,
    } = JSON.parse(JSON.stringify(ticTacToe));

    if (!currentArea[index]) {
      const player = currentPlayer === 1 ? 2 : 1;
      const sign = currentPlayer === 1 ? 'x' : 'o';
      const step = currentStep + 1;

      currentArea[index] = sign;
      allSteps[step] = currentArea;

      setTicTacToe(ALL_STEPS, allSteps.slice(0, step + 1));
      setTicTacToe(CURRENT_PLAYER, player);
      setTicTacToe(CURRENT_STEP, step);
      setTicTacToe(CURRENT_AREA, currentArea);

      // Check Position
      const combinations = this.getСombinations(index);

      combinations.map((item) => {
        if (
          currentArea[item[0]] === sign
          && currentArea[item[1]] === sign
          && currentArea[item[2]] === sign
        ) {
          setTicTacToe(SETS, sets + 1);
          setTicTacToe(WINS, currentPlayer === 1
            ? { ...wins, player1: wins.player1 + 1 }
            : { ...wins, player2: wins.player2 + 1 });
          setTicTacToe(NEW_SET, null);
        }
        return null;
      });
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
