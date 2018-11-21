import React from 'react';

const Student = ({ firstName, lastName, jobTitle, profileImage, summary }) => (
  <li>
    <img src={profileImage} alt="insert profile" />
    <p>FirstName: {firstName} LastName: {lastName}</p>
    <p>JobTitle: {jobTitle}</p>
    <p>Summary: {summary}</p>
  </li>
);

export default Student;
