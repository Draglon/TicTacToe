import { combineReducers } from 'redux';
import {
  CURRENT_PLAYER,
  CURRENT_STEP,
  CURRENT_AREA,
  ALL_STEPS,
  SETS,
  WINS,
  NEW_SET,
  NEW_GAME,
} from '../constants/ticTacToe.constants';

// Tic Tac Toe - InitState
const emptyArea = [...Array(9).keys()].map(() => '');
export const ticTacToeInitState = {
  currentPlayer: 1,
  currentStep: 0,
  currentArea: emptyArea,
  allSteps: [emptyArea],
  sets: 0,
  wins: {
    player1: 0,
    player2: 0,
  },
};

// Tic Tac Toe - reducer
export const ticTacToeReducer = (state = ticTacToeInitState, action) => {
  switch (action.type) {
    case CURRENT_PLAYER:
      return {
        ...state,
        currentPlayer: action.payload,
      };
    case CURRENT_STEP:
      return {
        ...state,
        currentStep: action.payload,
      };
    case CURRENT_AREA:
      return {
        ...state,
        currentArea: action.payload,
      };
    case ALL_STEPS:
      return {
        ...state,
        allSteps: action.payload,
      };
    case SETS:
      return {
        ...state,
        sets: action.payload,
      };
    case WINS:
      return {
        ...state,
        wins: action.payload,
      };
    case NEW_SET:
      return {
        ...state,
        currentPlayer: 1,
        currentStep: 0,
        currentArea: emptyArea,
        allSteps: [emptyArea],
      };
    case NEW_GAME:
      return ticTacToeInitState;
    default:
      return state;
  }
};

export default combineReducers({
  ticTacToe: ticTacToeReducer,
});
