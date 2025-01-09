import React from 'react';
import logo from '../../assets/Programify2.svg';
import '../../styles/dashboard.css';

export default function HeaderSection() {
  return (
    <div className="dashboard-container">
      <div className="logo-section d-flex justify-content-center mb-4">
        <img src={logo} alt="Programify Logo" className="logo" />
      </div>
      <div className="header-section text-center mb-5">
        <h1>Welcome in, [NAME]!</h1>
        <p className="fs-4">Get Started. Try Things Out. Explore Something New.</p>
      </div>
    </div>
  );
}