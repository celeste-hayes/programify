<<<<<<< HEAD
import React from "react";
import "../styles/dashboard.css";
=======
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import DashboardFilter from '../components/DashboardSections/Filter';
import GoalSection from '../components/DashboardSections/GoalSection';
import CardSlider from '../components/CardSlider';
import '../styles/dashboard.css';
import InspoCardComponent from '../components/DashboardSections/InspoCardComponent';

export default function Dashboard() {
  const [activeCategory, setActiveCategory] = useState('all');
  const renderCategory = (category, headerText, description, component) => {
    return (
      (activeCategory === 'all' || activeCategory === category) && (
        <Col sm={12} key={category}>
          <div className="category-section text-center">
            <h1 className="section-header">{headerText}</h1>
            <div className="fs-5 mb-5">{description}</div>
            {component}
          </div>
        </Col>
      )
    );
  };
>>>>>>> 43e4679118479217a87589324bd3fb2324af8be8

const DashboardPage = () => {
  return (
<<<<<<< HEAD
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
      <h1 className="goal-header">
        THINK IT. <span className="coding"> INK IT. </span><span> DO IT .</span>
      </h1>
=======
    <div>

      <DashboardFilter activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      <Container>
        <Row className="g-4 justify-content-center mt-4">
          {renderCategory(
            'category1',
            'Programify Insights',
            'Daily dose of inspiration, tips and knowledge.',
            <div className="inspo-cards-container">
              <InspoCardComponent />
            </div>
          )}

          {/* Category 2 - Goals */}
          {renderCategory(
            'category2',
            'Think It. Ink It. Do It.',
            <GoalSection />
          )}

          {/* Category 3 - Spotlight */}
          {renderCategory(
            'category3',
            'Spotlight',
            'Discover insights and motivation from other coders, to help fuel your coding journey!',
            <CardSlider />
          )}

          {/* Category 4 - Study */}
          {renderCategory(
            'category4',
            'Study Vault',
            'Access all your favorite resources to revisit and continue your learning.',
            <p>No content yet!</p>
          )}
        </Row>
      </Container>
>>>>>>> 43e4679118479217a87589324bd3fb2324af8be8
    </div>
  );
};

export default DashboardPage;