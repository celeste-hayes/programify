import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { BiSolidBriefcaseAlt, BiBrain, BiSolidQuoteLeft, BiSolidPencil } from "react-icons/bi";
import { RiResetRightLine } from "react-icons/ri";
import '../styles/dashboard.css';

export default function InspoCard({ category, text, refreshCard }) {
  const categoryIcons = {
    "Career Tips": <BiSolidBriefcaseAlt style={{ fontSize: '1rem', color: 'white' }} />,
    "Trivia": <BiBrain style={{ fontSize: '1rem', color: 'white' }} />,
    "Motivation": <BiSolidQuoteLeft style={{ fontSize: '1rem', color: 'white' }} />,
    "Coding Tips": <BiSolidPencil style={{ fontSize: '1rem', color: 'white' }} />
  };

  const categoryColors = {
    "Career Tips": "#2575fc",
    "Trivia": "#6A11CB",
    "Motivation": "#7D84B2",
    "Coding Tips": "#F2AF29"
  };

  const icon = categoryIcons[category] || <BiBrain style={{ fontSize: '1rem', color: 'white' }} />;
  const bgColor = categoryColors[category] || "#6A11CB";

  return (
    <Card className="inspo-card">
      <Card.Header
        className="d-flex align-items-center"
        style={{ backgroundColor: bgColor, color: "white" }}
      >
        <span className="me-2">{icon}</span>
        <span>{category}</span>
        <Button
          variant="link"
          className="ms-auto"
          style={{ padding: 0, color: 'white' }}
          onClick={refreshCard}
        >
          <RiResetRightLine size={18} />
        </Button>
      </Card.Header>
      <Card.Body>
        <Card.Text className="inspo-card-text">{text}</Card.Text>
      </Card.Body>
    </Card>
  );
}
