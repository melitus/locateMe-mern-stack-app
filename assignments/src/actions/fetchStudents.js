import studentsList from '../assignments/fixtures/studentsList';

export default () => ({
  type: 'FETCH_STUDENTS',
  payload: studentsList
});
