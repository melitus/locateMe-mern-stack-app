import { connect } from 'react-redux';

import Students from './Students';
// import fetchStudents from '../../client/redux/features/students/students';

const mapStateToProps = state => ({
  students: state,
});

const mapDispatchToProps =  dispatch => ({
  // fetchStudents
});

export default connect(mapStateToProps, mapDispatchToProps)(Students);
