import React, { useState } from 'react';
import '../css/Contacts.css';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [result, setResult] = useState(''); // Define result state

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...."); // Update the result message
    const formDataToSubmit = new FormData(event.target);
    
    formDataToSubmit.append("access_key", "8003edb3-6526-4019-8e6f-c192f966592f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formDataToSubmit
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message || "Something went wrong.");
    }
  };

  return (
    <div className="contacts">
      <h1>Contact Us</h1>
      {/*<p>We'd love to hear from you! Whether you have questions, feedback, or need more information about our services and programs, our team is here to assist you.</p>*/}

      <div className="contacts-container">
        

        <section className="contact-form">
          <h2>Send us a Message</h2>
          <form onSubmit={onSubmit}>
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
                <option value="" disabled>Select Subject</option>
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
          {result && <p className="result-message">{result}</p>} {/* Display result message */}
        </section>

        <section className="map">
          <h2>Location Map</h2>
          <div className="map-container">
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
