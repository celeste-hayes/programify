import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { BiSolidBriefcaseAlt, BiCodeAlt, BiSolidQuoteLeft, BiSolidPencil } from "react-icons/bi";
import { RiResetRightLine } from "react-icons/ri";

export default function InspoCard ({ category, text }) {
  const categoryIcons = {
    "Career Tips": <BiSolidBriefcaseAlt style={{ fontSize: '1rem', color: 'white'}} />,
    "Trivia": <BiCodeAlt style={{ fontSize: '1rem', color: 'white'}} />,
    "Motivation": <BiSolidQuoteLeft style={{ fontSize: '1rem', color: 'white'}} />,
    "Coding Tips": <BiSolidPencil style={{ fontSize: '1rem', color: 'white' }} />
  };

  const categoryColors = {
    "Career Tips": "#2575fc",
    "Trivia": "#6A11CB",
    "Motivation": "#7D84B2",
    "Coding Tips": "#F2AF29"
  };

  return (
    <Card style={{ height: '200px' }}>
      <Card.Header 
        className="d-flex align-items-center" 
        style={{ backgroundColor: categoryColors[category], color: "white" }}
      >
        <span className="me-2">{categoryIcons[category]}</span>
        <span>{category}</span>
        <Button 
          variant="link"
          className="ms-auto"
          style={{ padding: 0, color: 'white' }}
        >
          <RiResetRightLine size={18} />
        </Button>
      </Card.Header>
      <Card.Body 
        style={{ 
          height: '180px',
          overflowY: 'auto',
          padding: '10px'
        }}
      >
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
}