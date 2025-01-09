import React, { useState } from 'react';
import { Container, Row, Col} from 'react-bootstrap'; 
import DashboardHeader from '../components/DashboardSections/Header';
import IntroCardSection from '../components/DashboardSections/IntroCard';
import DashboardFilter from '../components/DashboardSections/Filter';
import InspoCard from '../components/DashboardSections/InspoCard'; 
import GoalSection from '../components/DashboardSections/GoalSection';
import CardSlider from '../components/CardSlider';
import '../styles/dashboard.css';

export default function Dashboard() {
  const [activeCategory, setActiveCategory] = useState('all');
  
  // InspoCard data
  const inspoCardData = [
    { category: "Career Tips", text: "Always be open to new opportunities." },
    { category: "Trivia", text: "Symbolics.com was the first domain registered in 1985!" },
    { category: "Motivation", text: "Keep pushing forward, no matter the odds." },
    { category: "Coding Tips", text: "Write clean and reusable code." }
  ];

  // Category Section & Helper Function
  const renderCategory = (category, headerText, description, component) => {
    return (
      (activeCategory === 'all' || activeCategory === category) && (
        <Col sm={12} key={category}>
          <div className="category-section text-center">
            <h1 className="section-header">{headerText}</h1>
            <p className="fs-5 mb-5">{description}</p>
            {component}
          </div>
        </Col>
      )
    );
  };

  return (
    <div>
      <DashboardHeader />
      <IntroCardSection />
      <DashboardFilter activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      <Container>
        <Row className="g-4 justify-content-center mt-4">
          
          {/* Category 1 - Programify Insights */}
          {renderCategory(
            'category1', 
            'Programify Insights', 
            'Daily dose of inspiration, tips and knowledge.',
            <div className="inspo-cards-container">
              {inspoCardData.map((card, index) => (
                <InspoCard key={index} category={card.category} text={card.text} />
              ))}
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