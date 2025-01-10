import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import "bootstrap/dist/css/bootstrap.min.css";

const LearnCard = ({ href, thumbnail, tag, title, likeCallback }) => {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
    likeCallback(href, !liked);
  };

  return (
    <Card className="learn-card" style={{ width: "18rem", margin: "1rem" }}>
      <Card.Img variant="top" src={thumbnail} alt={`${title} thumbnail`} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Badge bg="primary">{tag}</Badge>
        <Card.Text>
          <a href={href} target="_blank" rel="noopener noreferrer">
            Visit Resource
          </a>
        </Card.Text>
        <Button
          variant={liked ? "danger" : "outline-danger"}
          onClick={handleLike}
        >
          {liked ? "♥ Saved" : "♡ Save"}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default LearnCard;