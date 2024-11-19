// Home.jsx
import React from 'react';
import '../css/Home.css';
import cover from '../assets/cover photo.jpg'; 
import {Link} from 'react-router-dom';
import img from '../assets/cover image.jpg';

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
          <h2>Background Information</h2>
          <br />
          Pines Montessori School, located at #32 Gibraltar Road, Baguio City, is an English-oriented institution focusing on inclusivity and union of students. It encourages a Montessori approach that teaches students independence and self-learning with the assistance of the instructors of the institution.
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