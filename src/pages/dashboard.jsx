//Main page once users logged in
import React from 'react';
import '../styles/dashboard.css';

export default function Dashboard() {

  return (
    <>
      <h1 className="greeting">
        <span className="greeting-text">Hi there,</span>
        <span className="name"> NAME!</span>
      </h1>
      <h2 className="subtitle">What would you like to learn?</h2>
    </>
  );
}