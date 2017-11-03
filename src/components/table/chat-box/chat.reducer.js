import { SEND_MESSAGE } from './action.types';

export const ChatBoxReducer = (state = { messages: [] }, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          action.payload
        ]
      };
    default:
      return state;
  }
};
;