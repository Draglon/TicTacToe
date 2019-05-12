import { popupReducer, popupInitState } from './ui';
import * as t from '../constants/ui.constants';

describe('UI reducer tests', () => {
  it('POPUP_TOGGLE', () => {
    const action = {
      type: t.POPUP_TOGGLE,
    };

    expect(popupReducer(popupInitState, action)).toEqual({
      ...popupInitState,
      show: !popupInitState.show,
    });
  });
});
