import React, { useState } from 'react';

const CourseOfferingManagement = ({ courses, courseTypes, offerings, setOfferings }) => {
  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedCourseType, setSelectedCourseType] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleAddOffering = () => {
    if (!selectedCourse || !selectedCourseType) {
      setErrorMessage('Both Course and Course Type are required');
      return;
    }

    const newOffering = {
      id: Date.now(),
      course: selectedCourse,
      courseType: selectedCourseType
    };

    setOfferings([...offerings, newOffering]);
    setErrorMessage('');
  };

  return (
    <div className="form-container">
      <h2>Course Offerings</h2>

      <select onChange={(e) => setSelectedCourse(e.target.value)} value={selectedCourse}>
        <option value="">Select Course</option>
        {courses.map(course => (
          <option key={course.id} value={course.name}>{course.name}</option>
        ))}
      </select>

      <select onChange={(e) => setSelectedCourseType(e.target.value)} value={selectedCourseType}>
        <option value="">Select Course Type</option>
        {courseTypes.map(type => (
          <option key={type.id} value={type.name}>{type.name}</option>
        ))}
      </select>

      <button onClick={handleAddOffering}>Add Course Offering</button>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <ul>
        {offerings.map((offering) => (
          <li key={offering.id}>{offering.course} - {offering.courseType}</li>
        ))}
      </ul>
    </div>
  );
};

export default CourseOfferingManagement;
