import React from "react";
import "../styles/dashboard.css";
import Goals from "../components/DashboardSections/GoalSection";
import InspoCardComponent from "../components/DashboardSections/InspoCardComponent";
export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-header">
        LET'S GET <span className="coding">CODING</span><span>.</span>
      </h1>
      <h3>Get Started. Try Things Out. Explore Something New.</h3>
      <img src="/src/assets/Programify2.svg" alt="Programify Logo" className="logo" />
      <hr className="section-divider" />
      {/* Cards Section */}
      <div className="cards-container">
        <div className="card">
          <h4>Start Learning</h4>
          <p>Take your first step by learning the basics. Check out lots of resources. You’ll get the hang of it before you know it!</p>
        </div>
        <div className="card">
          <h4>Practice by Coding</h4>
          <p>The best way to learn is by doing. Don’t be afraid to make mistakes — they’re part of the journey!</p>
        </div>
        <div className="card">
          <h4>Bring Ideas to Life</h4>
          <p>Create something amazing — watch ideas grow and celebrate every coding victory along the way!</p>
        </div>
      </div>
      <InspoCardComponent />
      <h1 className="goal-header">
        THINK IT. <span className="coding"> INK IT. </span><span> DO IT .</span>
      </h1>
      <Goals />
    </div>
  );
}