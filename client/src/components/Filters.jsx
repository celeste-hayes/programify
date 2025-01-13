import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Form from "react-bootstrap/Form";
import '../styles/learn.css';

const Filters = ({ onFilterChange, searchQuery, onSearchChange }) => {
  const categories = [
    "GitHub",
    "YouTube",
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "APIs",
    "AI Tools",
    "Programming Concepts",
    "Node",
    "React",
    "Python",
    "Other",
  ];

  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    onFilterChange(category);
  };

  return (
    <div className="filters-container">
      <ButtonGroup className="mb-3">
        {categories.map((category) => (
          <Button
            key={category}
            className={selectedCategory === category ? "active" : ""}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </Button>
        ))}
      </ButtonGroup>
      <Form.Control
        type="text"
        placeholder="Search for more coding resources..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        className="mt-3"
      />
    </div>
  );
};

export default Filters;
