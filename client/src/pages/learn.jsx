import React, { useState, useEffect } from "react";
import LearnCard from "../components/LearnCard";
import Filters from "../components/Filters";
import { Container, Row, Button } from "react-bootstrap";
import { fetchYouTubeResources } from "../api/LearnAPI"; // Ensure correct path
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/learn.css";

export default function Learn() {
  const [resources, setResources] = useState([]); // Resources after filtering
  const [selectedCategory, setSelectedCategory] = useState(""); // Currently selected category
  const [searchQuery, setSearchQuery] = useState(""); // Current search query

  // Fetch resources for the selected category
  const fetchCategoryResources = async (category) => {
    try {
      const categoryResources = await fetchYouTubeResources(category); // Fetch YouTube resources based on category
      console.log("Fetched Category Resources:", categoryResources); // Log category resources
      setResources(categoryResources); // Initialize filtered resources with category-specific results
    } catch (error) {
      console.error("Error fetching category resources:", error);
    }
  };

  // Handle category change from Filters component
  const handleFilterChange = (category) => {
    console.log(`Selected Category: ${category}`);
    setSelectedCategory(category); // Update selected category state
    fetchCategoryResources(category); // Fetch resources for other categories
  };

  // Handle search query change from Filters component
  const handleSearchChange = (query) => {
    console.log(`Search Query: ${query}`);
    setSearchQuery(query); // Update search query state
    fetchCategoryResources(selectedCategory); // Fetch resources for other categories with the search query
  };

  return (
    <div>
      <div className="header-container">
        <h1 className="learn-header">Learn</h1>
        <Button variant="primary">My Saved Resources</Button>
      </div>
      <Container className="mt-4">
        {/* Filters Component */}
        <Filters
          onFilterChange={handleFilterChange} // Handles category filtering
          searchQuery={searchQuery} // Pass current search query to Filters
          onSearchChange={handleSearchChange} // Handles search input changes
        />
        <Row className="mt-3">
          {/* Render LearnCards */}
          {resources.length > 0 ? (
            resources.map((resource) => (
              <LearnCard
                key={resource.href}
                href={resource.href}
                thumbnail={resource.thumbnail}
                tag={resource.tag}
                title={resource.title}
                likeCallback={() => console.log(`Liked ${resource.title}`)} // Placeholder for Save functionality
              />
            ))
          ) : (
            <p>No resources found.</p>
          )}
        </Row>
      </Container>
    </div>
  );
}
