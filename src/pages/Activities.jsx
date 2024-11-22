import React, { useState, useEffect } from 'react';
import '../css/Activities.css';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import preschool from '../assets/preschool.jpg';
import kinder from '../assets/kinder.jpg';
import primary from '../assets/primary.jpg';
import jhs from '../assets/jhs.jpg';
import esl from '../assets/esl.jpg';
import homeschool from '../assets/homeschool.jpg';
import tutor from '../assets/tutor.jpg';
import counsel from '../assets/counseling.jpg';
import afterschool from '../assets/afterschool.jpg';
import Calendar from '../pages/Calendar';

const Activities = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="activities">
      <h1>Activities and Services</h1>

      <section className="programs">
        <h2>Educational Programs</h2>
        <div className="programs-content">
          <Carousel>
            <Carousel.Item interval={3000} className="carousel-item">
              <img
                className="d-block w-100"
                src={preschool}
                alt="Preschool Program"
              />
              <Carousel.Caption className="carousel-caption">
                <a href="#preschool">
                  <button className="caption-button">Preschool Program</button>
                </a>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={3000} className="carousel-item">
              <img
                className="d-block w-100"
                src={kinder}
                alt="Kindergarten Program"
              />
              <Carousel.Caption className="carousel-caption">
                <a href="#kinder">
                  <button className="caption-button">Kindergarten Program</button>
                </a>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={3000} className="carousel-item">
              <img
                className="d-block w-100"
                src={primary}
                alt="Elementary Program"
              />
              <Carousel.Caption className="carousel-caption">
                <a href="#primary">
                  <button className="caption-button">Elementary Program</button>
                </a>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={3000} className="carousel-item">
              <img
                className="d-block w-100"
                src={jhs}
                alt="Junior High School Program"
              />
              <Carousel.Caption className="carousel-caption">
                <a href="#jhs">
                  <button className="caption-button">Junior High School Program</button>
                </a>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={3000} className="carousel-item">
              <img
                className="d-block w-100"
                src={homeschool}
                alt="Homeschooling Program"
              />
              <Carousel.Caption className="carousel-caption">
                <a href="#homeschool">
                  <button className="caption-button">Home Schooling Program</button>
                </a>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={3000} className="carousel-item">
              <img
                className="d-block w-100"
                src={esl}
                alt="English Proficiency Program"
              />
              <Carousel.Caption className="carousel-caption">
                <a href="#esl">
                  <button className="caption-button">English Language Proficiency Program</button>
                </a>
              </Carousel.Caption>

            </Carousel.Item>
          </Carousel>
        </div>
        <hr />
        <div id="preschool" className="program-details">
          <div className="program-image">
            <img src={preschool} alt="Preschool Program" />
          </div>
          <div className="program-info">
            <h2>Preschool Program</h2>
            <h3>Requirements</h3>
            <p>&bull; Must be 4 years old as of August 31 of the current school year.</p>
            <p>&bull; Must meet academic readiness and other skills with interview.</p>
            <p>&bull; Must be toilet-trained.</p>
            <Link to="/apply/preschool"><button className="enroll-button">Enroll Now!</button></Link>
          </div>
        </div>
        <hr />
        <div id="kinder" className="program-details alternate">
          <div className="program-image">
            <img src={kinder} alt="Kinder Program" />
          </div>
          <div className="program-info-alternate">
            <h2>Kindergarten Program</h2>
            <h3>Requirements</h3>
            <p>&bull; Must be 5 years old before August 31 of the current school year.</p>
            <p>&bull; Must meet academic readiness and other skills with interview.</p>
            <p>&bull; Must be toilet-trained.</p>
            <Link to="/apply/kindergarten"><button className="enroll-button">Enroll Now!</button></Link>

          </div>
        </div>
        <hr />
        <div id="primary" className="program-details">
          <div className="program-image">
            <img src={primary} alt="Elementary Program" />
          </div>
          <div className="program-info">
            <h2>Elementary Program</h2>
            <h3>Requirements</h3>
            <p>&bull; Photocopy of Birth Certificate.</p>
            <p>&bull; Two copies of 2x2 latest colored photos with name tag.</p>
            <p>&bull; Photocopy of medical records (if needed).</p>
            <p>&bull; Reservation or Registration fee.</p>
            <p>&bull; Enrollment fee (Miscellaneous fee and Down payment).</p>
            <p>&bull; Must undergo the Intake interview.</p>
            <p>&bull; Must attend with his or her parent/s legal guardian the orientation scheduled by the school upon enrollment.</p>
            <Link to="/apply/elementary"><button className="enroll-button">Enroll Now!</button></Link>

          </div>
        </div>
        <hr />
        <div id="jhs" className="program-details alternate">
          <div className="program-image">
            <img src={jhs} alt="Junior High School Program" />
          </div>
          <div className="program-info-alternate">
            <h2>Junior High School Program</h2>
            <h3>Requirements</h3>
            <p>&bull; Photocopy of Birth Certificate.</p>
            <p>&bull; Two copies of 2x2 latest colored photos with name tag.</p>
            <p>&bull; Photocopy of medical records (if needed).</p>
            <p>&bull; Reservation or Registration fee.</p>
            <p>&bull; Enrollment fee (Miscellaneous fee and Down payment).</p>
            <p>&bull; Must undergo the Intake interview.</p>
            <p>&bull; Must attend with his or her parent/s legal guardian the orientation scheduled by the school upon enrollment.</p>
            <Link to="/apply/highschool"><button className="enroll-button">Enroll Now!</button></Link>

          </div>
        </div>
        <hr />
        <div id="esl" className="program-details">
          <div className="program-image">
            <img src={esl} alt="English Proficiency Program" />
          </div>
          <div className="program-info">
            <h2>English Proficiency Program (Foreigners)</h2>
            <h3>Requirements</h3>
            <p>&bull; Photocopy of Birth Certificate.</p>
            <p>&bull; Two copies of 2x2 latest colored photos with name tag.</p>
            <p>&bull; School records translated in English from the last school attended with a Red ribbon or Seal from its Consul or Embassy of its country.</p>
            <p>&bull; Photocopy of medical records (if needed).</p>
            <p>&bull; Reservation or Registration fee.</p>
            <p>&bull; Payment of full tuition fees</p>
            <p>&bull; Student Passport</p>
            <p>&bull; Photocopy of Parent's/Guardian's passport</p>
            <p>&bull; Special Study Permission (SSP) or photocopy of Alien Certificate of Registration (ACR), and I-Card from the Bureau of Immigration.</p>
            <Link to="/apply"><button className="enroll-button">Enroll Now!</button></Link>

          </div>
        </div>
        <hr />
        <div id="homeschool" className="program-details alternate">
          <div className="program-image">
            <img src={homeschool} alt="Homeschooling Program" />
          </div>
          <div className="program-info-alternate">
            <h2>Homeschooling Program</h2>
            <h3>Requirements</h3>
            <p>&bull; Photocopy of Birth Certificate.</p>
            <p>&bull; Two copies of 2x2 latest colored photos with name tag.</p>
            <p>&bull; Photocopy of medical records (if needed).</p>
            <p>&bull; Reservation or Registration fee.</p>
            <p>&bull; Enrollment fee (Miscellaneous fee and Down payment).</p>
            <p>&bull; Must undergo the Intake interview.</p>
            <p>&bull; Must attend with his or her parent/s legal guardian the orientation scheduled by the school upon enrollment.</p>
            <Link to="/apply"><button className="enroll-button">Enroll Now!</button></Link>

          </div>
        </div>
        <hr />
      </section>

      <section className="calendar">
        <Calendar />
      </section>

      <section className="services">
        <h2>Available Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <img src={tutor} alt="Tutoring" className="service-img" />
            <div className="service-content">
              <h3>Tutoring Services</h3>
              <p>One-on-one tutoring sessions to help students improve their academic performance in any subject.</p>
            </div>
          </div>

          <div className="service-card">
            <img src={counsel} alt="Counseling" className="service-img" />
            <div className="service-content">
              <h3>Student Counseling</h3>
              <p>Our counseling team provides emotional support and guidance for students to thrive in their academic and personal lives.</p>
            </div>
          </div>

          <div className="service-card">
            <img src={afterschool} alt="After-School Care" className="service-img" />
            <div className="service-content">
              <h3>After-School Care</h3>
              <p>Safe and enriching after-school care for children, including homework help, activities, and snacks.</p>
            </div>
          </div>
        </div>
      </section>

      {showButton && (
        <div className="back-to-top-wrapper">
          <button onClick={scrollToTop} className="back-to-top">
            ↑ {/* Arrow symbol */}
          </button>
          <span className="back-to-top-tooltip">Back to Top</span>
        </div>
      )}


    </div>
  );
};

export default Activities;
