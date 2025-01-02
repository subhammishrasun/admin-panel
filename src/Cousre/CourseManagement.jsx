import React, { useState } from 'react';

const CourseManagement = ({ courses, setCourses }) => {
  const [courseName, setCourseName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleAddCourse = () => {
    if (!courseName) {
      setErrorMessage('Course name is required');
      return;
    }

    if (courses.some(course => course.name === courseName)) {
      setErrorMessage('Course already exists');
      return;
    }

    setCourses([...courses, { id: Date.now(), name: courseName }]);
    setCourseName('');
    setErrorMessage('');
  };

  return (
    <div className="form-container">
      <h2>Courses</h2>
      <input
        type="text"
        value={courseName}
        onChange={(e) => setCourseName(e.target.value)}
        placeholder="New Course"
      />
      <button onClick={handleAddCourse}>Add Course</button>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <ul>
        {courses.map((course) => (
          <li key={course.id}>{course.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CourseManagement;
