import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaUser, FaCode, FaProjectDiagram, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import '../styles/navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => setMenuOpen((prev) => !prev);
  const handleClose = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <button className="navbar-toggle" onClick={handleToggle} aria-label="Toggle navigation">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''} onClick={handleClose}>
              <FaHome className="nav-icon" />
              <span className="nav-text">Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''} onClick={handleClose}>
              <FaUser className="nav-icon" />
              <span className="nav-text">About</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/skills" className={({ isActive }) => isActive ? 'active' : ''} onClick={handleClose}>
              <FaCode className="nav-icon" />
              <span className="nav-text">Skills</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''} onClick={handleClose}>
              <FaProjectDiagram className="nav-icon" />
              <span className="nav-text">Projects</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''} onClick={handleClose}>
              <FaEnvelope className="nav-icon" />
              <span className="nav-text">Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;