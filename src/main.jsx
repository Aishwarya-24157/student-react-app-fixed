import React from 'react';
import { createRoot } from 'react-dom/client';
import Student from './Student.jsx';
import './style.css';

function App() {
  return (
    <main className="page">
      <section className="student-card">
        <p className="eyebrow">STUDENT PROFILE</p>
        <h1>Student Information</h1>
        <p className="intro">A simple React example demonstrating how to pass data using props.</p>

        <Student
          studentName="Ananya Sharma"
          studentCourse="B.Sc. Computer Science"
          facultyName="Dr. R. Kumar"
        />
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
