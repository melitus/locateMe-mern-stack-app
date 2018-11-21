import * as React from 'react';
import PropTypes from 'prop-types';

import Student from './Student/Student';

class Students extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      students: props.students
    };
  }

  render() {
    const { students } = this.props;

    return <ul>
      {students.map(({ firstName, lastName, title, summary }) => (
        <Student
          key={firstName + lastName}
          firstName={firstName}
          lastName={lastName}
          jobTitle={title}
          summary={summary}
        />
    ))}</ul> || null;
  }
}

Students.propTypes = {
  students: PropTypes.arrayOf(
    PropTypes.object
  ).isRequired,
};

Students.defaultProps = {
  students: [],
};

export default Students;
