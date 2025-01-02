import React, { useState } from 'react';

const CourseTypeManagement = ({ courseTypes, setCourseTypes }) => {
  const [courseTypeName, setCourseTypeName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleAddCourseType = () => {
    if (!courseTypeName) {
      setErrorMessage('Course Type name is required');
      return;
    }

    if (courseTypes.some(courseType => courseType.name === courseTypeName)) {
      setErrorMessage('Course Type already exists');
      return;
    }

    setCourseTypes([...courseTypes, { id: Date.now(), name: courseTypeName }]);
    setCourseTypeName('');
    setErrorMessage('');
  };

  return (
    <div className="form-container">
      <h2>Course Types</h2>
      <input
        type="text"
        value={courseTypeName}
        onChange={(e) => setCourseTypeName(e.target.value)}
        placeholder="New Course Type"
      />
      <button onClick={handleAddCourseType}>Add Course Type</button>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <ul>
        {courseTypes.map((courseType) => (
          <li key={courseType.id}>{courseType.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CourseTypeManagement;
