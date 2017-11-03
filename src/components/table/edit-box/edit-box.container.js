import { connect } from 'react-redux';
import EditBox from './edit-box.component';
import { addNewItem } from './actions';

const mapDispatchToProps = (dispatch) => ({
  addNewItem: (item) => dispatch(addNewItem(item))
});

export const EditBoxContainer = connect(
  null,
  mapDispatchToProps
)(EditBox);