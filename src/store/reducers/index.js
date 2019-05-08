import { combineReducers } from 'redux';

import ui from './ui';
import ticTacToe from './ticTacToe';

export default combineReducers({
  ui,
  ticTacToe,
});
