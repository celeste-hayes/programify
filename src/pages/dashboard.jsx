//Main page once users logged in
import React from 'react';
import '../styles/dashboard.css';
import InspoCard from '../components/InspoCard';
import { Container, Row, Col } from 'react-bootstrap';

export default function Dashboard() {
    // Temp data for the Inspiration Cards will be fetched from an API in the future
  const inspoCardsData = [
    { title: "Career Tips", description: "Always be open to new opportunities.", category: "Growth" },
    { title: "Trivia", description: "Symbolics.com was the first domain registered in 1985!", category: "Trivia" },
    { title: "Motivation", description: "Keep pushing forward, no matter the odds.", category: "Motivation" },
    { title: "Coding Tips", description: "Write clean and reusable code.", category: "Tip" },
  ];

  return (
    <>
      <h1 className="greeting">
        <span className="greeting-text">Hi there,</span>
        <span className="name"> NAME!</span>
      </h1>
      <h2 className="subtitle">What would you like to learn?</h2>
      <Container>
        <Row className="mt-5 justify-content-center">
          {inspoCardsData.map((card, index) => (
            <Col key={index} xs={12} sm={6} md={3} className="d-flex justify-content-center">
              <InspoCard 
                title={card.title} 
                description={card.description} 
                category={card.category} 
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}