import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InspoCard from '../InspoCard';

export default function InspoCardComponent() {
  const [inspoCardData, setInspoCardData] = useState({
    'Career Tips': null,
    'Trivia': null,
    'Motivation': null,
    'Coding Tips': null,
  });
  const fetchInspoCardForCategory = async (category) => {
    try {
      const response = await fetch('http://localhost:3001/api/inspo-cards');
      const data = await response.json();
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
    setInspoCardData((prevData) => ({
      ...prevData,
      [category]: updatedCard,
    }));
  };
  return (
    <div>
      <div className="d-flex flex-wrap">
        {Object.keys(inspoCardData).map((category) => {
          const card = inspoCardData[category];
          // Skip rendering if the card is null or undefined
          if (!card) {
            return (
              <div key={category} className="m-2">
                <p>No card available for {category}</p>
              </div>
            );
          }
          const { id, category: cardCategory, text } = card;
          return (
            <div key={id} className="m-2">
              <InspoCard
                key={id}
                category={cardCategory}
                text={text}
                refreshCard={refreshCard}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

