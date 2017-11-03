
import { NEW_ITEM } from './action.types';

export const addNewItem = (item) => ({
  type: NEW_ITEM,
  payload: item
});