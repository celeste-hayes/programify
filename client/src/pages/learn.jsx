import React, { useState, useEffect } from "react";
import LearnCard from "../components/LearnCard";
import Filters from "../components/Filters";
import { Container, Row, Button } from "react-bootstrap";
import { fetchAllResources } from "../api/LearnAPI"; // Corrected path
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/learn.css";

export default function Learn() {
  const [resources, setResources] = useState([]); // All resources fetched from APIs
  const [filteredResources, setFilteredResources] = useState([]); // Resources after filtering
  const [selectedCategory, setSelectedCategory] = useState(null); // Currently selected category
  const [searchQuery, setSearchQuery] = useState(""); // Current search query

  // Fetch all resources from APIs
  const fetchResources = async () => {
    try {
      const allResources = await fetchAllResources(); // Fetch from GitHub, YouTube, and Contentful
      setResources(allResources); // Store full set of resources
      setFilteredResources(allResources); // Initialize filtered resources
    } catch (error) {
      console.error("Error fetching resources:", error);
    }
  };

  // Filter resources based on category and search query
  const filterResources = (category, query) => {
    const filtered = resources.filter((resource) => {
      const matchesCategory = category ? resource.tag === category : true;
      const matchesQuery = query
        ? resource.title.toLowerCase().includes(query.toLowerCase())
        : true;
      return matchesCategory && matchesQuery;
    });
    setFilteredResources(filtered);
  };

  // Handle category change from Filters component
  const handleFilterChange = (category) => {
    setSelectedCategory(category); // Update selected category state
    filterResources(category, searchQuery); // Re-filter resources
  };

  // Handle search query change from Filters component
  const handleSearchChange = (query) => {
    setSearchQuery(query); // Update search query state
    filterResources(selectedCategory, query); // Re-filter resources
  };

  // Fetch resources on initial load or when the refresh button is clicked
  useEffect(() => {
    fetchResources();
  }, []);

  return (
    <div>
      <div className="header-container">
        <h1>Learn</h1>
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
          {filteredResources.length > 0 ? (
            filteredResources.map((resource) => (
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
        {/* Refresh Button */}
        <div className="text-center mt-4">
          <Button variant="secondary" onClick={fetchResources}>
            Refresh Resources
          </Button>
        </div>
      </Container>
    </div>
  );
}
