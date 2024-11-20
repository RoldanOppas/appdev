import React from 'react';
import '../css/Activities.css';
import { Carousel } from 'react-bootstrap';
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

const Activities = () => {
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
              <Carousel.Caption>
                <a href="#preschool">
                  <p>Preschool Program</p>
                </a>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={3000} className="carousel-item">
              <img
                className="d-block w-100"
                src={kinder}
                alt="Kindergarten Program"
              />
              <Carousel.Caption>
                <a href="#kinder">
                  <p>Kindergarten Program</p>
                </a>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={3000} className="carousel-item">
              <img
                className="d-block w-100"
                src={primary}
                alt="Elementary Program"
              />
              <Carousel.Caption>
                <a href="#primary">
                  <p>Elementary Program</p>
                </a>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={3000} className="carousel-item">
              <img
                className="d-block w-100"
                src={jhs}
                alt="Junior High School Program"
              />
              <Carousel.Caption>
                <a href="#jhs">
                  <p>Junior High School Program</p>
                </a>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={3000} className="carousel-item">
              <img
                className="d-block w-100"
                src={homeschool}
                alt="Homeschooling Program"
              />
              <Carousel.Caption>
                <a href="#homeschool">
                  <p>Homeschooling Program</p>
                </a>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={3000} className="carousel-item">
              <img
                className="d-block w-100"
                src={esl}
                alt="English Proficiency Program"
              />
              <Carousel.Caption>
                <a href="#esl">
                  <p>English Proficiency Program</p>
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
          </div>
        </div>
        <hr />
      </section>

      <section className="calendar">
        <h2>School Calendar</h2>
        <div className="calendar-container">
          <p>Stay updated with our school events, activities, holidays, and important dates.</p>
          <div className="calendar-grid">
            <table className="calendar-table">
              <thead>
                <th><h2>November 2024</h2></th>
                <tr>
                  <th>Mon</th>
                  <th>Tue</th>
                  <th>Wed</th>
                  <th>Thu</th>
                  <th>Fri</th>
                  <th>Sat</th>
                  <th>Sun</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                  <td>4</td>
                  <td>5</td>
                  <td>6</td>
                  <td>7</td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>9</td>
                  <td>10</td>
                  <td>11 <span className="event">Holiday</span></td>
                  <td>12</td>
                  <td>13</td>
                  <td>14</td>
                </tr>
                <tr>
                  <td>15</td>
                  <td>16</td>
                  <td>17</td>
                  <td>18</td>
                  <td>19</td>
                  <td>20</td>
                  <td>21</td>
                </tr>
                <tr>
                  <td>22</td>
                  <td>23</td>
                  <td>24</td>
                  <td>25 <span className="event">Field Trip</span></td>
                  <td>26</td>
                  <td>27</td>
                  <td>28</td>
                </tr>
                <tr>
                  <td>29 <span className="event">Parent Meeting</span></td>
                  <td>30</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="services">
      <h2>Available Services</h2>
        <div className="services-grid">
          {/* Service Card 1: Tutoring */}
          <div className="service-card">
            <img src={tutor} alt="Tutoring" className="service-img" />
            <div className="service-content">
              <h3>Tutoring Services</h3>
              <p>One-on-one tutoring sessions to help students improve their academic performance in any subject.</p>
            </div>
          </div>

          {/* Service Card 2: Counseling */}
          <div className="service-card">
            <img src={counsel} alt="Counseling" className="service-img" />
            <div className="service-content">
              <h3>Student Counseling</h3>
              <p>Our counseling team provides emotional support and guidance for students to thrive in their academic and personal lives.</p>
            </div>
          </div>

          {/* Service Card 3: After-School Care */}
          <div className="service-card">
            <img src={afterschool} alt="After-School Care" className="service-img" />
            <div className="service-content">
              <h3>After-School Care</h3>
              <p>Safe and enriching after-school care for children, including homework help, activities, and snacks.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Activities;
