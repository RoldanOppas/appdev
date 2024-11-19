// Home.jsx
import React from 'react';
import '../css/Home.css';
import cover from '../assets/cover photo.jpg'; // Make sure the path is correct
import {Link} from 'react-router-dom';

const Home = () => {
  return (

    <div className="home">
      {/*<section className="hero">
        <h1>Welcome to Pines Montessori School</h1>
        <p className="location">#32 Gibraltar, Baguio City</p>
  </section>*/}

      <div className="cover-container">
        <img src={cover} alt="Cover" className="cover-photo" />
        <div className="overlay-text">
          <h1>Pines Montessori School</h1>
          <p>"Where school is truly where the heart is"</p>
          <Link to="/ApplyNow"><button className="enroll-button">Enroll Now!</button></Link>
        </div>
      </div>

    <body>
      <section className="background">
        <h2>Background Information</h2>
        <p>
          Pines Montessori School located on #32 Gibraltar Road, Baguio City, an English oriented institution focusing on inclusivity and union of students. Encouraging a montessorial approach that teaches students independence and self-learning with the assistance of the instructors of the institution.
        </p>
      </section>
      <br />
      <br />
      
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
    </body>
      
    </div>
  );
};

export default Home;