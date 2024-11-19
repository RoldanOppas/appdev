// Activities.jsx
import React from 'react';

const Activities = () => {
  return (
    <div className="activities">
      <h1>Activities and Services</h1>
      
      <section className="programs">
        <h2>Educational Programs</h2>
        <div className="programs-content">
          <p>Our educational programs are designed following the Montessori philosophy,
             ensuring comprehensive development of each student.</p>
        </div>
      </section>

      <section className="calendar">
        <h2>School Calendar</h2>
        <div className="calendar-container">
          <p>Stay updated with our school events, activities, holidays, and important dates.</p>
        </div>
      </section>

      <section className="services">
        <h2>Available Services</h2>
        <div className="services-grid">
          {/* Add specific services */}
        </div>
      </section>
    </div>
  );
};

export default Activities;