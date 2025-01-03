import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const icons = {
    Dashboard: 'bi bi-house-door',
    Learn: 'bi bi-book',
    Code: 'bi bi-code',
    Connect: 'bi bi-person-lines-fill',
  };

  const navItems = ['Dashboard', 'Learn', 'Code', 'Connect'];

  return (
    <div
      className={`sidebar bg-dark min-vh-100 d-flex flex-column ${isCollapsed ? 'collapsed' : ''}`}
      style={{ width: isCollapsed ? '110px' : '300px', transition: 'width 0.3s', height: '100vh' }}
    >

      <div
        className="d-flex p-3"
        style={{ alignItems: 'center', minHeight: '60px' }}
      >
        <a className="text-decoration-none text-white d-flex">
          {!isCollapsed && <span className="fs-4">Programify</span>}
        </a>
        <button
          className="btn btn-dark text-white ms-1"
          onClick={() => setIsCollapsed(!isCollapsed)}
          aria-label="Toggle Sidebar"
        >
          <i className={`bi ${isCollapsed ? 'bi-arrow-right-square' : 'bi-arrow-left-square'}`}></i>
        </button>
      </div>
      <hr className="text-white" />

      <ul className="nav flex-column">
        {navItems.map((item, index) => (
          <li className="nav-item text-white fs-4 my-1" key={index}>
            <Link
              to={`/${item.toLowerCase()}`}
              className="nav-link d-flex"
            >
              <i className={`${icons[item]} ms-1`}></i>
              <span className={`ms-3 ${isCollapsed ? 'd-none' : 'd-inline'}`}>{item}</span>
            </Link>
          </li>
        ))}
      </ul>

      {!isCollapsed && (
        <div className="mt-auto">
          <hr className="text-white" />
          <a className="text-decoration-none text-white d-flex ms-3 mt-2">
            <span className="fs-5">Sidebar Footer</span>
          </a>
        </div>
      )}
    </div>
  );
}