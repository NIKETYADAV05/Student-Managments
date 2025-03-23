
import React from 'react';
import './Home.css';  

const Home = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1>Manage Students with Ease</h1>
          <p>Organize and track student data efficiently, streamline admin tasks, and more!</p>
          <a href="#features" className="btn">Explore Features</a>
        </div>
      </section>

      <section className="features" id="features">
        <h2>Our Key Features</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <h3>Student Profiles</h3>
            <p>Manage student profiles with all essential details in one place.</p>
          </div>
          <div className="feature-card">
            <h3>Attendance Tracking</h3>
            <p>Keep track of student attendance automatically.</p>
          </div>
          <div className="feature-card">
            <h3>Grades Management</h3>
            <p>Efficiently manage and calculate student grades.</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2025 Student Management. All rights reserved.</p>
        <p>Contact us: support@studentmanagement.com</p>
      </footer>
    </>
  );
};

export default Home;

