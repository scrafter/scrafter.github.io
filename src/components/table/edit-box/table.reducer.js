import { NEW_ITEM } from './action.types';

export const TableReducer = (state = { items: [] }, action) => {
  switch (action.type) {
    case NEW_ITEM:
      return {
        ...state,
        items: [
          ...state.items,
          action.payload
        ]
      };
    default:
      return state;
  }
};