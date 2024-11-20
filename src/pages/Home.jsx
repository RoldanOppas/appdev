// Home.jsx
import React from 'react';
import '../css/Home.css';
import cover from '../assets/cover photo.jpg'; 
import {Link} from 'react-router-dom';
import img from '../assets/vision.jpg';
import { useState } from 'react';
import pic1 from '../assets/teaching.jpg';
import pic2 from '../assets/works.jpg';
import pic3 from '../assets/drawings.jpg';
import pic4 from '../assets/programs.jpg';
import 'bootstrap-icons/font/bootstrap-icons.css';



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
          <p>"We belong together in this school"</p>
          <Link to="/apply"><button className="enroll-button">Enroll Now!</button></Link>
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
  
  
    <hr />
    <div className="mission-statement">
      <center><h2>Mission Statement</h2></center>
      {/* Tab Buttons */}
      <div className="tab-buttons">
        <button 
          className={activeTab === "tab1" ? "active" : ""} 
          onClick={() => setActiveTab("tab1")}
        >
          <i className="bi bi-eye-fill custom-icon"></i>
          <br />
          Vision
        </button>
        <button 
          className={activeTab === "tab2" ? "active" : ""} 
          onClick={() => setActiveTab("tab2")}
        >
          <i class="bi bi-crosshair"></i>
          <br />
          Mission
        </button>
        <button 
          className={activeTab === "tab3" ? "active" : ""} 
          onClick={() => setActiveTab("tab3")}
        >
          <i class="bi bi-card-checklist"></i>
          <br />
          Goal and Objectives
        </button>
        <button 
          className={activeTab === "tab4" ? "active" : ""} 
          onClick={() => setActiveTab("tab4")}
        >
          <i class="bi bi-feather"></i>
          <br />
          Philosophy
        </button>
      </div>

      {/* Content Area */}
      <div className="tab-content">
        {activeTab === "tab1" && <div >
          <section className="background">
            <div className="background-content">
              <img src={pic1} alt="School Building" className="tab-image" />
              <p>
                An outstanding progressive school dedicated to providing balanced quality education through innovative learning principles and methodology, that all students are prepared and motivated to perform with their highest potential, productive in all areas, molded and primed in the changing of time, and confident to belong in a diverse community and global society.
              </p>
            </div>
          </section>
         </div>}
        {activeTab === "tab2" && <div>
          <section className="background">
            <div className="background-content">
              <img src={pic2} alt="School Building" className="tab-image" />
              <p>
              A devoted school committed to developing and training every student in their God-given talents and potentials, through values and quality learning, enhancing their knowledge and wisdom, guided and cultivated through the fundamentals of this institution, faith, hope, love, and respect, to scaffold their social growth, that every student is committed, competent, confident, able to communicate, capable for advancement, and inspiring them of their bright and better future.
              </p>
            </div>
          </section>
        </div>}
        {activeTab === "tab3" && <div>
          <section className="background">
            <div className="background-content">
              <img src={pic3} alt="School Building" className="tab-image" />
              <p>
              That all students may have a positive and memorable learning experience, achieved academic excellence, be equipped, and be able to demonstrate their talents and skills, display exemplary performance in all areas of improvement, with good values, good manners, and right conduct, prepared, and are commendable for their next level of education.
              </p>
            </div>
          </section>
          </div>}
        {activeTab === "tab4" && <div>
          <section className="background">
            <div className="background-content">
              <img src={pic4} alt="School Building" className="tab-image" />
              <p>
              Pines Montessori School aims to ensure that the vision, mission, and core values are the cornerstones of all the school programs, activities, and practices. Its principles are reflected in all the teaching and learning processes, that is applied both internally and externally. Regular evaluation is an important part that motivates and develops all performances toward our goal and every progress, that meets the standards and high expectations of all, where learning is a continuous process in life.
              </p>
            </div>
          </section>
        </div>}

      </div>
    </div>
          <hr />
      <br />
      <br />
      <section className="objectives">
        <center><h2>What Pines Montessori School Offers</h2></center>
        <div className="objectives-grid">
          <div className="objective-card">
            
            <h3>Activities and Services</h3>
            <p>Detailed information about our educational programs and curriculum.</p>
            <Link to="/Activities"><button className="enroll-button">See Activities and Services</button></Link>
          </div>
          
          <div className="objective-card">
            <h3>Enrollment</h3>
            <p>Streamlined enrollment process with the necessary information of the student.</p>
            <Link to="/apply"><button className="enroll-button">See Enrollment</button></Link>
          </div>

          <div className="objective-card">
            <h3>Job Application</h3>
            <p>Job hirings and streamlined job application procedures with the necessary information of the applicant.</p>
            <Link to="/apply"><button className="enroll-button">See Application</button></Link>
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