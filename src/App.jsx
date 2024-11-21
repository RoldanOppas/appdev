import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import logo from './assets/logo.png';
import Home from './pages/Home.jsx'; 
import Activities from './pages/Activities';
import Apply from './pages/ApplyNow.jsx';
import Contacts from './pages/Contacts';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css'

const App = () => {
  const [showApplySubmenu, setShowApplySubmenu] = useState(false);

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Noto+Serif+KR:wght@200..900&family=Pirata+One&display=swap');        `}
        </style>
    <Router>
      <div className="app">
        <header className="header">
          <div className="logo-container">
            <img src={logo} alt="Pines Montessori School Logo" className="logo" />
            <h1 style={{ fontFamily: 'Noto Serif KR, serif ' }}>
              Pines Montessori School
            </h1>
          </div>
          <nav className="nav-links">
            <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
              Home
            </NavLink>
            <NavLink to="/activities" className={({ isActive }) => isActive ? 'active' : ''}>
              Activities and Services
            </NavLink>
            <NavLink to="/apply" className={({ isActive }) => isActive ? 'active' : ''}>
              Apply Now!
            </NavLink>
            <NavLink to="/contacts" className={({ isActive }) => isActive ? 'active' : ''}>
              Contacts
            </NavLink>
          </nav>
        </header>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/apply/:level" element={<Apply />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </div>
      </Router>
      <footer className="footer">
  <div className="container">
    <div className="row">
      <div className="col">
        <h2>Get in Touch</h2>
        <p>
          If you have any questions, concerns, or inquiries, please don't hesitate to contact us. 
        </p>
      </div>
      <div className="col">
        <h3>Address</h3>
        <p>#32 Gibraltar, Baguio City</p>
        <h3>Contact Numbers</h3>
        <p>
          <i className="bi bi-telephone-fill"></i> Tel: (074) 246 0403 <br />
          <i className="bi bi-phone"></i> Mobile: +63 XXX XXX
        </p>
      </div>
      <div className="col">
        <h3>Email</h3>
        <p>
          <i className="bi bi-envelope"></i>{" "}
          <a href="mailto:pines.montessori@gmail.com">pines.montessori@gmail.com</a>
        </p>
        <h3>Social Media</h3>
        <div className="social-links">
          <a
            href="https://www.facebook.com/pinesmontessorischoolinc"
            className="social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-facebook"></i> Facebook
          </a>
          <br />
        </div>
      </div>
    </div>
  </div>
</footer>
    </>
  );
};

export default App;