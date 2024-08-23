import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';  // Import the CSS file

const Home = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <div className="home-container">
      <header className="home-header">
        <nav className="home-nav">
          <h1 className="home-title">My App</h1>
          <div className="nav-links">
            <Link to="/about" className="nav-link">
              About
            </Link>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
            <div className="dropdown">
              <button 
                className="dropdown-button"
                onClick={toggleDropdown}
              >
                Menu
              </button>
              {dropdownOpen && (
                <div className="dropdown-content">
                  <Link to="/login" className="dropdown-link">User Login</Link>
                  <Link to="/adminlogin" className="dropdown-link">Admin Login</Link>
                </div>
              )}
            </div>
          </div>
        </nav>
      </header>

      <main className="home-main">
        {/* Additional content can go here */}
      </main>

      <footer className="home-footer">
        <p>&copy; 2024 My App. All rights reserved.</p>
      </footer> 
    </div>
  );
};

export default Home;
