import React, { useState } from 'react';
import CourseTypeManagement from './Cousre/CourseTypeManagement';
import CourseManagement from './Cousre/CourseManagement';
import CourseOfferingManagement from './Cousre/CourseOfferingManagement';
import StudentRegistration from './Cousre/StudentRegistration';


import './App.css';  // Import custom styles for responsiveness

const App = () => {
  const [courseTypes, setCourseTypes] = useState([]);
  const [courses, setCourses] = useState([]);
  const [offerings, setOfferings] = useState([]);
  const [students, setStudents] = useState([]);

  return (
    <div className="app-container">
      <h1>Course Management System</h1>

      {/* Course Type Management */}
      <CourseTypeManagement 
        courseTypes={courseTypes} 
        setCourseTypes={setCourseTypes} 
      />

      {/* Course Management */}
      <CourseManagement 
        courses={courses} 
        setCourses={setCourses} 
      />

      {/* Course Offering Management */}
      <CourseOfferingManagement 
        courses={courses} 
        courseTypes={courseTypes} 
        offerings={offerings} 
        setOfferings={setOfferings} 
      />

      {/* Student Registration */}
      <StudentRegistration 
        offerings={offerings} 
        students={students} 
        setStudents={setStudents} 
      />
    </div>
  );
};

export default App;
