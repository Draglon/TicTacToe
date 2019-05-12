import { ticTacToeReducer, ticTacToeInitState } from './ticTacToe';
import * as t from '../constants/ticTacToe.constants';

describe('TicTacToe reducer tests', () => {
  it('CURRENT_PLAYER', () => {
    const action = {
      type: t.CURRENT_PLAYER,
      payload: 1,
    };

    expect(ticTacToeReducer(ticTacToeInitState, action)).toEqual({
      ...ticTacToeInitState,
      currentPlayer: action.payload,
    });
  });

  it('CURRENT_STEP', () => {
    const action = {
      type: t.CURRENT_STEP,
      payload: 0,
    };

    expect(ticTacToeReducer(ticTacToeInitState, action)).toEqual({
      ...ticTacToeInitState,
      currentStep: action.payload,
    });
  });

  it('CURRENT_AREA', () => {
    const emptyArea = [...Array(9).keys()].map(() => '');
    const action = {
      type: t.CURRENT_AREA,
      payload: emptyArea,
    };

    expect(ticTacToeReducer(ticTacToeInitState, action)).toEqual({
      ...ticTacToeInitState,
      currentArea: action.payload,
    });
  });

  it('ALL_STEPS', () => {
    const emptyArea = [...Array(9).keys()].map(() => '');
    const action = {
      type: t.ALL_STEPS,
      payload: [emptyArea],
    };

    expect(ticTacToeReducer(ticTacToeInitState, action)).toEqual({
      ...ticTacToeInitState,
      allSteps: action.payload,
    });
  });

  it('SETS', () => {
    const action = {
      type: t.SETS,
      payload: 0,
    };

    expect(ticTacToeReducer(ticTacToeInitState, action)).toEqual({
      ...ticTacToeInitState,
      sets: action.payload,
    });
  });

  it('WINS', () => {
    const action = {
      type: t.WINS,
      payload: {
        player1: 0,
        player2: 0,
      },
    };

    expect(ticTacToeReducer(ticTacToeInitState, action)).toEqual({
      ...ticTacToeInitState,
      wins: action.payload,
    });
  });

  it('NEW_SET', () => {
    const emptyArea = [...Array(9).keys()].map(() => '');
    const action = {
      type: t.NEW_SET,
    };

    expect(ticTacToeReducer(ticTacToeInitState, action)).toEqual({
      ...ticTacToeInitState,
      currentPlayer: 1,
      currentStep: 0,
      currentArea: emptyArea,
      allSteps: [emptyArea],
    });
  });

  it('NEW_GAME', () => {
    const action = {
      type: t.NEW_GAME,
    };

    expect(ticTacToeReducer(ticTacToeInitState, action)).toEqual({
      ...ticTacToeInitState,
    });
  });
});
