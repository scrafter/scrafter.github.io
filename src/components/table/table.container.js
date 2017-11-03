import { connect } from 'react-redux';
import Table from './table.component';

const mapStateToProps = (state) => ({
  views: state.views
});


export const TableContainer = connect(
  mapStateToProps
)(Table);