import { connect } from 'react-redux';
import ViewToggler from './view-toggler.component';
import { changeView } from './actions';

const mapStateToProps = (state) => ({
  views: state.views
});

const mapDispatchToProps = (dispatch) => ({
  changeView: (boxName) => dispatch(changeView(boxName))
});

export const ViewTogglerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewToggler);