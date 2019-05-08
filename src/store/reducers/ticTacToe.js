import { combineReducers } from 'redux';
import {
  CURRENT_PLAYER,
  CURRENT_STEP,
  ARRAY_STEPS,
  SETS,
  WINS,
  NEW_GAME,
} from '../constants/ticTacToe.constants';

// Tic Tac Toe - InitState
const ticTacToeInitState = {
  currentPlayer: 1,
  currentStep: 0,
  arraySteps: ['', '', '', '', '', '', '', '', ''],
  sets: 0,
  wins: {
    player1: 0,
    player2: 0,
  },
};

// Tic Tac Toe - reducer
const ticTacToeReducer = (state = ticTacToeInitState, action) => {
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
    case ARRAY_STEPS:
      return {
        ...state,
        arraySteps: action.payload,
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
    case NEW_GAME:
      return ticTacToeInitState;
    default:
      return state;
  }
};

export default combineReducers({
  ticTacToe: ticTacToeReducer,
});