// ApplyNow.jsx
import React from 'react';
import '../css/ApplyNow.css';

const ApplyNow = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="apply">
      <h1>Apply Now!</h1>

      <div className="application-types">
        <section className="student-enrollment">
          <h2>Student Enrollment</h2>
          <form onSubmit={handleSubmit} className="enrollment-form">
            <div className="form-group">
              <label htmlFor="studentName">Full Name</label>
              <input type="text" id="studentName" required />
            </div>

            <div className="form-group">
              <label htmlFor="studentAge">Age</label>
              <input type="number" id="studentAge" required />
            </div>

            <div className="form-group">
              <label htmlFor="parentEmail">Parent's Email</label>
              <input type="email" id="parentEmail" required />
            </div>

            <div className="form-group">
              <label htmlFor="phoneNumber">Contact Number</label>
              <input type="tel" id="phoneNumber" required />
            </div>

            <button type="submit" className="submit-btn">Submit Application</button>
          </form>
        </section>

        <section className="job-application">
          <h2>Job Application</h2>
          <form onSubmit={handleSubmit} className="job-form">
            <div className="form-group">
              <label htmlFor="applicantName">Full Name</label>
              <input type="text" id="applicantName" required />
            </div>

            <div className="form-group">
              <label htmlFor="applicantEmail">Email</label>
              <input type="email" id="applicantEmail" required />
            </div>

            <div className="form-group">
              <label htmlFor="position">Position</label>
              <input type="text" id="position" required />
            </div>

            <div className="form-group">
              <label htmlFor="resume">Resume/CV</label>
              <input type="file" id="resume" accept=".pdf,.doc,.docx" required />
            </div>

            <button type="submit" className="submit-btn">Submit Application</button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default ApplyNow;