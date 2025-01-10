import React, { useState } from "react";
import LearnCard from '../components/LearnCard';
import Filters from "../components/Filters";
import { Container, Row, Button } from "react-bootstrap"; 
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/learn.css";

export default function Learn() {
  const [resources, setResources] = useState([
    {
      href: "https://example.com/html-guide",
      thumbnail: "https://via.placeholder.com/150",
      tag: "HTML",
      title: "Learn the Basics of HTML",
    },
    // update based on API / fetch call protocols - just a placeholder for now
  ]);

  const [filteredResources, setFilteredResources] = useState(resources);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter resources by category
  const handleFilterChange = (category) => {
    setSelectedCategory(category);
    filterResources(category, searchQuery);
  };

  // Search through resources
  const handleSearchChange = (query) => {
    setSearchQuery(query);
    filterResources(selectedCategory, query);
  };

  // Filter resources by category and search query
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

  return (
    <div>
      <div className="header-container"> {/* Add header container for alignment */}
        <h1>Learn</h1>
        <Button variant="primary">My Saved Resources</Button> {/* Add button here */}
      </div>
      <Container className="mt-4">
        <Filters
          onFilterChange={handleFilterChange}
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
        />
        <Row className="mt-3">
          {filteredResources.length > 0 ? (
            filteredResources.map((resource) => (
              <LearnCard
                key={resource.href} // Use link / href 
                href={resource.href}
                thumbnail={resource.thumbnail}
                tag={resource.tag}
                title={resource.title}
                likeCallback={() => console.log(`Liked ${resource.title}`)}
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
