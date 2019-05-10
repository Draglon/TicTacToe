import { combineReducers } from 'redux';
import { POPUP_TOGGLE, MENU_TOGGLE } from '../constants/ui.constants';

const popupInitState = {
  title: '',
  message: '',
  btnClose: true,
  show: false,
};

// Popup
const popupReducer = (state = popupInitState, action) => {
  switch (action.type) {
    case POPUP_TOGGLE:
      return {
        ...state,
        ...action.payload,
        show: !state.show,
      };
    default:
      return state;
  }
};

// Mobile Menu
const menuReducer = (state = false, action) => {
  switch (action.type) {
    case MENU_TOGGLE:
      return !state;
    default:
      return state;
  }
};

export default combineReducers({
  popupToggle: popupReducer,
  menuToggle: menuReducer,
});
