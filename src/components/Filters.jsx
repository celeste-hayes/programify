import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Form from "react-bootstrap/Form";
import '../styles/learn.css';

const Filters = ({ onFilterChange }) => {
  const categories = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "APIs",
    "AI Tools",
    "Programming Concepts",
    "Other",
  ];

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="filters-container">
      <ButtonGroup className="mb-3">
        {categories.map((category, index) => (
          <Button
            key={category}
            onClick={() => onFilterChange(category)}
          >
            {category}
          </Button>
        ))}
      </ButtonGroup>
      <Form.Control
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="mt-3"
      />
    </div>
  );
};

export default Filters;