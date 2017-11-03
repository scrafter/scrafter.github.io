import { CHANGE_VIEW } from './action.types';

const defaultValues = {
  edit: true,
  preview: true,
  chat: true
};

export const viewTogglerReducer = (state = defaultValues, action) => {
  switch (action.type) {
    case CHANGE_VIEW:
      return {
        ...state,
        [action.payload]: !state[action.payload]
      };
    default:
      return state;
  }
};