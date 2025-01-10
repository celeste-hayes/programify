import React from 'react';
import '../styles/dashboard.css';

export default function Header() {
  return (
    <div className="container-fluid p-0 header-container">
      <div className="row g-0" style={{ height: '100%' }}>
        <div 
          className="col-12 col-md-6 d-flex flex-column justify-content-center text-left p-3"
        >
          <h3 className="text-black greeting">Hi [Name]</h3>
          <h2 className="text-black">Let's Learn, Code and Create Together</h2>
          <p className="text-black lead fs-6 mb-4">
            We're excited to welcome you to Programify! Our platform is designed by developers, for developers, offering a dynamic learning experience that empowers you to enhance your skills, build cool projects, and take your coding journey to the next level!
          </p>
          <div className="d-flex justify-content-center gap-3">
            <a href="#get-started" className="btn btn-get-started btn-sm">Get Started</a>
            <a href="#learn-more" className="btn btn-learn-more btn-sm">Learn More</a>
          </div>
        </div>
        <div className="col-12 col-md-6 d-none d-md-flex justify-content-center align-items-center">
          <img
            src="/src/assets/Programify.svg"
            alt="Programify Logo"
            className="img-fluid"
            style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
          />
        </div>
      </div>
    </div>
  );
}