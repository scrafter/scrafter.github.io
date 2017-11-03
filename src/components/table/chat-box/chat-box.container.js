import { connect } from 'react-redux';
import ChatBox from './chat-box.component';
import { sendMessage } from './actions';

const mapStateToProps = (state) => ({
  messages: state.chat.messages
});

const mapDispatchToProps = (dispatch) => ({
  sendMessage: (message) => dispatch(sendMessage(message))
});

export const ChatBoxContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatBox);