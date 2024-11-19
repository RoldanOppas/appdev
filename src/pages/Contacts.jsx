import React, { useState } from 'react';

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
    // Handle form submission (e.g., send an email, log data, etc.)
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contacts">
      <h1>Contact Us</h1>
      <p>We'd love to hear from you! Whether you have questions, feedback, or need more information about our services and programs, our team is here to assist you.</p>

      <div className="contacts-container">
        <section className="contact-info">
          <h2>Get in Touch</h2>
          <p>If you have any questions, concerns, or inquiries, please don't hesitate to contact us. Fill out the form below and our team will get back to you as soon as possible.</p>
          
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
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              >
                <option value="" disabled selected>Select Subject</option>
                <option value="Enrollment">Enrollment</option>
                <option value="Job Application">Job Application</option>
                <option value="General Inquiry">General Inquiry</option>
                <option value="Events">Events</option>
                <option value="Other">Other</option>
              </select>
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
            {/* Google Map Embed */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.171365816038!2d120.61721287579704!3d16.416120930056664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391a154cd66671d%3A0xb203876f75062d46!2sPines%20Montessori%20School!5e0!3m2!1sen!2sph!4v1731982120610!5m2!1sen!2sph"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="Pines Montessori Location"
            ></iframe>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contacts;
