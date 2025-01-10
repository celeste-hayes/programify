import React from 'react';
import { Button } from 'react-bootstrap';
import '../../styles/dashboard.css';

export default function CategoryFilter({ activeCategory, setActiveCategory }) {
  return (
    <div className="filter-section text-center mt-5">
        <Button 
          className={`filter-btn ${activeCategory === 'all' ? 'active' : ''} all-btn`}
          onClick={() => setActiveCategory('all')}
        >
          Explore All
        </Button>
        <Button 
          className={`filter-btn ${activeCategory === 'category1' ? 'active' : ''} insights-btn`}
          onClick={() => setActiveCategory('category1')}
        >
          Insights
        </Button>
        <Button 
          className={`filter-btn ${activeCategory === 'category2' ? 'active' : ''} goals-btn`}
          onClick={() => setActiveCategory('category2')}
        >
          Goals
        </Button>
        <Button 
          className={`filter-btn ${activeCategory === 'category3' ? 'active' : ''} spotlight-btn`}
          onClick={() => setActiveCategory('category3')}
        >
          Spotlight
        </Button>
        <Button 
          className={`filter-btn ${activeCategory === 'category4' ? 'active' : ''} vault-btn`}
          onClick={() => setActiveCategory('category4')}
        >
          Study
        </Button>
      </div>
  );
}