import React, { useState } from 'react';

const StudentRegistration = ({ offerings, students, setStudents }) => {
  const [studentName, setStudentName] = useState('');
  const [selectedOffering, setSelectedOffering] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegisterStudent = () => {
    if (!studentName || !selectedOffering) {
      setErrorMessage('Student Name and Course Offering are required');
      return;
    }

    const newStudent = {
      id: Date.now(),
      name: studentName,
      offering: selectedOffering
    };
    setStudents([...students, newStudent]);
    setStudentName('');
    setSelectedOffering('');
    setErrorMessage('');
  };

  return (
    <div className="form-container">
      <h2>Student Registration</h2>
      <input
        type="text"
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
        placeholder="Student Name"
      />

      <select onChange={(e) => setSelectedOffering(e.target.value)} value={selectedOffering}>
        <option value="">Select Course Offering</option>
        {offerings.map((offering) => (
          <option key={offering.id} value={offering.id}>
            {offering.course} - {offering.courseType}
          </option>
        ))}
      </select>

      <button onClick={handleRegisterStudent}>Register</button>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <h3>Registered Students</h3>
      <ul>
        {students.map((student) => (
          <li key={student.id}>{student.name} - {student.offering}</li>
        ))}
      </ul>
    </div>
  );
};

export default StudentRegistration;
