import { CHANGE_VIEW } from './action.types';

export const changeView = (boxName) => ({
  type: CHANGE_VIEW,
  payload: boxName
});