import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import DashboardHeader from '../components/DashboardSections/Header';
import IntroCardSection from '../components/DashboardSections/IntroCard';
import DashboardFilter from '../components/DashboardSections/Filter';
import InspoCard from '../components/DashboardSections/InspoCard';
import GoalSection from '../components/DashboardSections/GoalSection';
import CardSlider from '../components/CardSlider';
import axios from 'axios';
import '../styles/dashboard.css';

export default function Dashboard() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [inspoCardData, setInspoCardData] = useState({
    'Career Tips': null,
    'Trivia': null,
    'Motivation': null,
    'Coding Tips': null,
  });

  const fetchInspoCardForCategory = async (category) => {
    try {
      const response = await axios.get('http://localhost:3001/api/inspo-cards');
      const data = response.data;

      const categoryCards = data.filter((card) => card.category === category);
      if (categoryCards.length > 0) {
        const randomCard = categoryCards[Math.floor(Math.random() * categoryCards.length)];
        return randomCard;
      }
      return null;
    } catch (error) {
      console.error('Error fetching inspo card:', error);
      return null;
    }
  };

  const fetchInspoCards = async () => {
    const categories = ['Career Tips', 'Trivia', 'Motivation', 'Coding Tips'];
    const newInspoCardData = {};

    for (const category of categories) {
      const card = await fetchInspoCardForCategory(category);
      newInspoCardData[category] = card;
    }

    setInspoCardData(newInspoCardData);
  };

  useEffect(() => {
    fetchInspoCards();
  }, []);

  const refreshCard = async (category) => {
    const updatedCard = await fetchInspoCardForCategory(category);
    setInspoCardData(prevData => ({
      ...prevData,
      [category]: updatedCard,
    }));
  };

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
      <DashboardHeader />
      <IntroCardSection />
      <DashboardFilter activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
      <Container>
        <Row className="g-4 justify-content-center mt-4">
          {renderCategory(
            'category1',
            'Programify Insights',
            'Daily dose of inspiration, tips and knowledge.',
            <div className="inspo-cards-container">
              {Object.keys(inspoCardData).map(category => (
                inspoCardData[category] && (
                  <InspoCard
                    key={inspoCardData[category].id}
                    category={inspoCardData[category].category}
                    text={inspoCardData[category].text}
                    refreshCard={refreshCard}
                  />
                )
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