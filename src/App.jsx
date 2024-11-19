import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import logo from './assets/logo.png';
import Home from './pages/Home.jsx'; 
import Activities from './pages/Activities';  // Corrected import
import Apply from './pages/ApplyNow.jsx';
import Contacts from './pages/Contacts';  // Corrected import

const App = () => {
  return (
    <Router>
      <div className="app">
        <header className="header">
          <div className="logo-container">
            <img src={logo} alt="Pines Montessori School Logo" className="logo" />
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
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
