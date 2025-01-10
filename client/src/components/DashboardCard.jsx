import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FaArrowRightLong } from "react-icons/fa6";

export default function DashboardCard({ icon, title, description }) {
  return (
    <Card className="dashboard-card">
      <Card.Body>
        <div className="d-flex align-items-center">
          <div className="card-icon me-2 mb-2">{icon}</div>
          <Card.Title className="m-0 mb-2 card-title">{title}</Card.Title>
        </div>
        <Card.Text className="card-text">{description}</Card.Text>
        <Button variant="link" className="arrow-btn position-absolute top-0 end-0 white-link-button">
            <FaArrowRightLong className="card-icon"/>
        </Button>
      </Card.Body>
    </Card>
  );
}