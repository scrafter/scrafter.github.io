import { combineReducers } from 'redux';
import { viewTogglerReducer } from '../table/control-bar/view-toggler/view-toggler.reducer';
import { ChatBoxReducer } from '../table/chat-box/chat.reducer';
import { TableReducer } from '../table/edit-box/table.reducer';

const appReducer = combineReducers({
  views: viewTogglerReducer,
  chat: ChatBoxReducer,
  table: TableReducer
});

export default (state, action) => appReducer(state, action);