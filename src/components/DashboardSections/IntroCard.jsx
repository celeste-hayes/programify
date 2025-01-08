import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaList, FaBook, FaCode } from 'react-icons/fa';
import DashboardCard from '../DashboardCard'; // Assuming this is correctly located
import '../../styles/dashboard.css';

export default function IntroCardSection() {
  return (
    <div>
      <Container>
        <Row className="g-4 justify-content-center">
          <Col sm={12} md={4}>
            <DashboardCard 
              icon={<FaList />}
              title="Start a Goal" 
              description="Set yourself up for success! Dream big, create goals and crush them."
            />
          </Col>
          <Col sm={12} md={4}>
            <DashboardCard 
              icon={<FaBook />}
              title="Checkout Resources" 
              description="Excelerate your learning. Use our resources to guide you along the way."
            />
          </Col>
          <Col sm={12} md={4}>
            <DashboardCard 
              icon={<FaCode />}
              title="Practice Coding" 
              description="Practice makes perfect. Start coding and watch your skills grow."
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}