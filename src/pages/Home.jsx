// Home.jsx
import React from 'react';
import '../css/Home.css';
import cover from '../assets/cover photo.jpg'; 
import {Link} from 'react-router-dom';
import img from '../assets/vision.jpg';

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
      


      <div className="background-content">
        <img src={img} alt="School Building" className="background-image" />
        <p>
          <h2>Vision</h2>
          <br />
          An outstanding progressive school dedicated to providing balanced quality education through innovative learning principles and methodology, that all students are prepared and motivated to perform with their highest potential, productive in all areas, molded and primed in the changing of time, and confident to belong in a diverse community and global society.
        </p>
      </div>
    </section>

      <br />
      <br />

      <section className="objectives">
        <h2>About Pines Montessori School</h2>
        <div className="objectives-grid">
          <div className="objective-card">
            
            <h3>Activities and Services</h3>
            <p>Detailed information about our educational programs and curriculum.</p>
            <Link to="/Activities"><button className="enroll-button">See Activities and Services</button></Link>
          </div>
          
          <div className="objective-card">
            <h3>Enrollment</h3>
            <p>Streamlined enrollment process with the necessary information of the student.</p>
            <Link to="/ApplyNow"><button className="enroll-button">See Enrollment</button></Link>
          </div>

          <div className="objective-card">
            <h3>Job Application</h3>
            <p>Job hirings and streamlined job application procedures with the necessary information of the applicant.</p>
            <Link to="/ApplyNow"><button className="enroll-button">See Application</button></Link>
          </div>

          <div className="objective-card">
            <h3>Contact</h3>
            <p>Conact us directly through the use of the website.</p>
            <Link to="/Contacts"><button className="enroll-button">See Contact Page</button></Link>
          </div>
        </div>
      </section>
    </body>
      
    </div>
  );
};

export default Home;