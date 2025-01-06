//Main page once users logged in
import React from 'react';
import '../styles/dashboard.css';
import InspoCard from '../components/InspoCard';
import Header from '../components/Header';
import { Row, Col } from 'react-bootstrap';

export default function Dashboard() {
    // Temp data for the Inspiration Cards will be fetched from an API in the future
    const inspoCardData = [
      { category: "Career Tips", text: "Always be open to new opportunities." },
      { category: "Trivia", text: "Symbolics.com was the first domain registered in 1985!"},
      { category: "Motivation", text: "Keep pushing forward, no matter the odds."},
      { category: "Coding Tips", text: "Write clean and reusable code."}
    ];

  return (
    <>
     <Header />
      <section className="section-divider">
        <div className="container-fluid">
          <div className="row g-3 p-0">
            {/* Left Side */}
            <div className="col-12 col-lg-4">
              <h3>A better way to start learning.</h3>
              <p>Inserting some text here is optional</p>
            </div>

            {/* Right Side (Inspiration Cards) */}
            <div className="col-12 col-lg-8">
              <Row>
                {inspoCardData.map((card, index) => (
                  <Col xs={12} sm={6} md={6} lg={6} key={index}>
                    {/* Add a wrapper for each card to control spacing */}
                    <div className="inspo-card-wrapper">
                      <InspoCard
                        text={card.text}
                        category={card.category} 
                      />
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}