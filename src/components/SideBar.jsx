import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation(); 

  const icons = {
    Dashboard: 'bi bi-house-door',
    Learn: 'bi bi-book',
    Code: 'bi bi-code',
    Connect: 'bi bi-person-lines-fill',
  };

  const navItems = ['Dashboard', 'Learn', 'Code', 'Connect'];
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (windowWidth < 768) {
      setIsCollapsed(true);
    }
  }, [windowWidth]);

  const handleLogout = () => {
    console.log("User logged out");
  };

  const isActive = (item) => {
    return location.pathname === `/${item.toLowerCase()}`;
  };

  return (
    <div
      className={`sidebar min-vh-100 d-flex flex-column ${isCollapsed ? 'collapsed' : ''}`}
      style={{
        width: isCollapsed ? '80px' : '250px',
        transition: 'width 0.3s',
        height: '100vh',
        backgroundColor: '#F5F5F5', // Sidebar background color (light gray)
      }}
    >
      <div className="d-flex p-3 align-items-center" style={{ minHeight: '70px' }}>
        {windowWidth >= 768 && (
          <button
            className="text-dark d-flex align-items-center p-0 border-0 bg-transparent" // Changed to text-dark
            onClick={() => setIsCollapsed(!isCollapsed)}
            aria-label="Toggle Sidebar"
          >
            <i className={`bi ${isCollapsed ? 'bi-arrow-right-square' : 'bi-arrow-left-square'} fs-5`}></i>
          </button>
        )}
        <a className="text-decoration-none text-dark d-flex"> {/* Changed to text-dark */}
          {!isCollapsed && (
            <span className="fs-5 text-dark" style={{ marginLeft: '14px' }}> {/* Changed to text-dark */}
              Programify
            </span>
          )}
        </a>
      </div>

      <hr className="text-dark" /> {/* Changed to text-dark */}

      <ul className="nav flex-column">
        {navItems.map((item, index) => (
          <li className="nav-item my-1" key={index}>
            <Link
              to={`/${item.toLowerCase()}`}
              className="nav-link d-flex align-items-center"
              style={{
                color: isActive(item) ? '#F2AF29' : 'black', // Changed to black
                fontSize: '1.25rem',
              }}
            >
              <i
                className={`${icons[item]} me-1`}
                style={{
                  fontSize: '1.5rem',
                  color: isActive(item) ? '#F2AF29' : 'black', // Changed to black
                }}
              ></i>
              <span className={`ms-1 ${isCollapsed ? 'd-none' : 'd-inline'}`}>
                {item}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-auto mb-3">
        <hr className="text-dark" /> {/* Changed to text-dark */}
        <button
          className="nav-link d-flex align-items-center text-dark ms-3 mt-3 border-0 bg-transparent" // Changed to text-dark
          onClick={handleLogout}
          aria-label="Logout"
          style={{ color: 'black' }} // Changed to black
        >
          <i className="bi bi-box-arrow-right fs-5"></i>
          <span className={`ms-2 ${isCollapsed ? 'd-none' : 'd-inline'}`}>Logout</span>
        </button>
      </div>
    </div>
  );
}