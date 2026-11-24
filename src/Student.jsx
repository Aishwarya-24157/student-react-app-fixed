import React from 'react';

// Props are values passed from a parent component to a child component.
function Student(props) {
  return (
    <div className="details">
      <div className="detail-row">
        <span className="detail-label">Student Name</span>
        <strong>{props.studentName}</strong>
      </div>
      <div className="detail-row">
        <span className="detail-label">Student Course</span>
        <strong>{props.studentCourse}</strong>
      </div>
      <div className="detail-row">
        <span className="detail-label">Faculty Name</span>
        <strong>{props.facultyName}</strong>
      </div>
    </div>
  );
}

export default Student;
