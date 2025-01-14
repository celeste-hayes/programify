
import React, { useState, useEffect } from 'react';
import InspoCard from '../InspoCard';
import axios from 'axios';
export default function InspoCardComponent() {
  const [inspoCardData, setInspoCardData] = useState({
    'Career Tips': null,
    'Trivia': null,
    'Motivation': null,
    'Coding Tips': null,
  });
  // Fetch a random card for a given category
  const fetchInspoCardForCategory = async (category) => {
    try {
      const response = await axios.get('/api/inspo-cards');
      const data = response.data;
      console.log(`Data fetched for ${category}:`, data);  // Log the data fetched from API
      // Filter cards by category
      const categoryCards = data.filter((card) => card.category === category);
      console.log(`Cards for ${category}:`, categoryCards);  // Log the filtered category cards
      if (categoryCards.length > 0) {
        const randomCard = categoryCards[Math.floor(Math.random() * categoryCards.length)];
        return randomCard;  // Return a single random card
      }
      return null;  // No cards available for this category
    } catch (error) {
      console.error('Error fetching inspo card:', error);
      return null;
    }
  };
  // Fetch cards for all categories
  const fetchInspoCards = async () => {
    const categories = ['Career Tips', 'Trivia', 'Motivation', 'Coding Tips'];
    const newInspoCardData = {};
    // Fetch a random card for each category
    for (const category of categories) {
      const card = await fetchInspoCardForCategory(category);
      console.log(`Fetched card for ${category}:`, card);  // Log the fetched card
      newInspoCardData[category] = card;
    }
    console.log('Updated InspoCardData:', newInspoCardData);  // Log the final state data
    setInspoCardData(newInspoCardData);  // Update the state with fetched cards
  };
  // Refresh the card for a specific category
  const refreshCard = async (category) => {
    const updatedCard = await fetchInspoCardForCategory(category);
    setInspoCardData(prevData => ({
      ...prevData,
      [category]: updatedCard,
    }));
  };
  // Fetch cards on component mount
  useEffect(() => {
    fetchInspoCards();
  }, []);  // Empty dependency array ensures this runs only once after initial render
  return (
    <div>
      <div className="d-flex flex-wrap">
        {Object.keys(inspoCardData).map((category) => {
          const card = inspoCardData[category];  // A single card per category
          // If no card is available for the category
          if (!card) {
            console.log(`No card available for ${category}`);  // Log if no card is available
            return (
              <div key={category} className="m-2">
                <p>No cards available for {category}</p>
              </div>
            );
          }
          // Log the card before rendering
          console.log('Rendering card for category:', category, card);
          // Render the card for this category
          return (
            <div key={category} className="m-2">
              <h3>{category}</h3>
              <InspoCard
                key={card.id}
                category={card.category}
                description={card.description}
                refreshCard={() => refreshCard(category)}  // Pass the refresh function for the card
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}