// Contacts.jsx
import React, { useState } from 'react';
import '../css/Contacts.css';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission - email functionality
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contacts">
      <h1>Contact Us</h1>

      <div className="contacts-container">
        <section className="contact-info">
          <h2>Get in Touch</h2>
          
          <div className="info-item">
            <h3>Address</h3>
            <p>#32 Gibraltar, Baguio City</p>
          </div>

          <div className="info-item">
            <h3>Contact Numbers</h3>
            {/* Add actual phone numbers */}
            <p>Tel: (074) XXX-XXXX</p>
            <p>Mobile: +63 XXX XXX XXXX</p>
          </div>

          <div className="info-item">
            <h3>Email</h3>
            {/* Add actual email */}
            <p>info@pinesmontessori.edu.ph</p>
          </div>

          <div className="info-item">
            <h3>Social Media</h3>
            <div className="social-links">
              {/* Add actual social media links */}
              <a href="#" className="social-link">Facebook</a>
              <a href="#" className="social-link">Instagram</a>
              <a href="#" className="social-link">Twitter</a>
            </div>
          </div>
        </section>

        <section className="contact-form">
          <h2>Send us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </section>

        <section className="map">
          <h2>Location Map</h2>
          <div className="map-container">
            {/* You can add Google Maps or other map service here */}
            <p>Map will be embedded here</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contacts;