// Home.jsx
import React from 'react';
import '../css/Home.css';
import cover from '../assets/cover photo.jpg'; 
import {Link} from 'react-router-dom';
import img from '../assets/vision.jpg';
import { useState } from 'react';

const Home = () => {

   const [activeTab, setActiveTab] = useState("tab1");
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
          <h2>Welcome to Pines Montessori School</h2>
          <br />
          Pines Montessori School is duly recognized by the Philippine Government through the Department of Education and is given the recognition to operate Pre-School/Nursery, Kindergarten to Grade 10 Junior High Education Program. It is a non-sectarian institution with principles and values of Montessori and provides K to 12 Curriculum Program prescribed and approved by the Department of Education.
        </p>
      </div>
    </section>
  
  
    
    <div className="mission-statement">
      <center><h2>Mission Statement</h2></center>
      {/* Tab Buttons */}
      <div className="tab-buttons">
        <button 
          className={activeTab === "tab1" ? "active" : ""} 
          onClick={() => setActiveTab("tab1")}
        >
          Vision
        </button>
        <button 
          className={activeTab === "tab2" ? "active" : ""} 
          onClick={() => setActiveTab("tab2")}
        >
          Mission
        </button>
        <button 
          className={activeTab === "tab3" ? "active" : ""} 
          onClick={() => setActiveTab("tab3")}
        >
          Goal and Objectives
        </button>
        <button 
          className={activeTab === "tab4" ? "active" : ""} 
          onClick={() => setActiveTab("tab4")}
        >
          Philosophy
        </button>
      </div>

      {/* Content Area */}
      <div className="tab-content">
        {activeTab === "tab1" && <div >
          An outstanding progressive school dedicated to providing balanced quality education through innovative learning principles and methodology, that all students are prepared and motivated to perform with their highest potential, productive in all areas, molded and primed in the changing of time, and confident to belong in a diverse community and global society.</div>}
        {activeTab === "tab2" && <div>
          A devoted school committed to developing and training every student in their God-given talents and potentials, through values and quality learning, enhancing their knowledge and wisdom, guided and cultivated through the fundamentals of this institution, faith, hope, love, and respect, to scaffold their social growth, that every student is committed, competent, confident, able to communicate, capable for advancement, and inspiring them of their bright and better future. </div>}
        {activeTab === "tab3" && <div>Content for Tab 3</div>}
        {activeTab === "tab4" && <div>Content for Tab 4</div>}

      </div>
    </div>

      <br />
      <br />

      <section className="objectives">
        
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