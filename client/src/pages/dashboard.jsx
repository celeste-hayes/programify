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

  return (
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
    </div>
  );
}