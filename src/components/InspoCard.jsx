import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { BiSolidBriefcaseAlt, BiCodeAlt, BiSolidQuoteLeft, BiSolidPencil } from "react-icons/bi";
import { RiResetRightLine } from "react-icons/ri";

export default function InspoCard({ title, description, category }) { 

  const getCategoryColor = () => {
    if (category.includes('Growth')) return '#F2AF29';
    if (category.includes('Trivia')) return '#2575FC';
    if (category.includes('Motivation')) return '#6A11CB';
    if (category.includes('Tip')) return '#462255';
    return '#000';
  };

  const categoryColor = getCategoryColor();

  return (
    <Card style={{ width: '14rem', height: '12rem', marginBottom: '8px', position: 'relative' }}>
      <Card.Body>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Card.Title style={{ marginBottom: 0, color: categoryColor }}>{title}</Card.Title>
          <div>
            {category.includes('Growth') && <BiSolidBriefcaseAlt style={{ fontSize: '1.2rem', color: categoryColor }} />}
            {category.includes('Trivia') && <BiCodeAlt style={{ fontSize: '1.2rem', color: categoryColor }} />}
            {category.includes('Motivation') && <BiSolidQuoteLeft style={{ fontSize: '1.2rem', color: categoryColor }} />}
            {category.includes('Tip') && <BiSolidPencil style={{ fontSize: '1.2rem', color: categoryColor }} />}
          </div>
        </div>
        <Card.Text style={{ marginTop: '1rem', marginBottom: '1rem' }}>{description}</Card.Text>
        <div style={{ position: 'absolute', bottom: '10px', left: '10px', display: 'flex', alignItems: 'center', gap: '5px' }}>
          <Button variant="link" style={{ padding: 0 }}>
            <RiResetRightLine style={{ fontSize: '1rem', color: '#6c757d' }} />
          </Button>
          <span style={{ fontSize: '0.9rem', color: '#6c757d', fontWeight: 'bold' }}>Refresh</span>
        </div>
      </Card.Body>
    </Card>     
  );
}