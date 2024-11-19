// Home.jsx
import React from 'react';
import "./css/Home.css";

const Home = () => {
  return (

    <div className="home">
      <section className="hero">
        <h1>Welcome to Pines Montessori School</h1>
        <p className="location">#32 Gibraltar, Baguio City</p>
      </section>

      <div className="cover-container">
        <img src={cover} alt="Cover" className="cover-photo" />
        <div className="overlay-text">
          <h1>Pines Montessori School</h1>
          <p></p>
          <Link to="/Application"><button className="enroll-button">Enroll Now!</button></Link>
        </div>
      </div>

      <section className="background">
        <h2>Background Information</h2>
        <p>
          Pines Montessori School is dedicated to providing quality education 
          through our comprehensive educational programs. Our institution 
          values transparency and accessibility, ensuring that all information
          about our school is readily available to our community.
        </p>
      </section>

      <section className="objectives">
        <h2>Our Objectives</h2>
        <div className="objectives-grid">
          <div className="objective-card">
            <h3>Informative & User-Friendly</h3>
            <p>Comprehensive information about our history, mission, educational philosophy, and values.</p>
          </div>
          
          <div className="objective-card">
            <h3>Clear Program Details</h3>
            <p>Detailed information about our educational programs and curriculum.</p>
          </div>

          <div className="objective-card">
            <h3>Easy Application Process</h3>
            <p>Streamlined enrollment and job application procedures.</p>
          </div>

          <div className="objective-card">
            <h3>Accessible Information</h3>
            <p>Ensuring all visitors, including those with disabilities, can access our content.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;