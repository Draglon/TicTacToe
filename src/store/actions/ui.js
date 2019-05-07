import { POPUP_TOGGLE, MENU_TOGGLE } from '../constants/ui.constants';

export const popupToggle = payload => ({
  type: POPUP_TOGGLE,
  payload,
});

export const menuToggle = () => ({
  type: MENU_TOGGLE,
});
