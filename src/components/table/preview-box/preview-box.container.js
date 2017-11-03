import {connect} from 'react-redux';
import PreviewBox from './preview-box.component';

const mapStateToProps = (state) => ({
  items: state.table.items
});

export const PreviewBoxContainer = connect(
  mapStateToProps
)(PreviewBox);