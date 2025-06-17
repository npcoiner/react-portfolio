import React from 'react';
import Card from 'react-bootstrap/Card';

export default function ProjectCard({ name, image, source }) {
  return (
    <Card className="m-3" style={{ width: '18rem' }}>
      <a href={source}>
        <Card.Img variant="top" src={image} alt="project" />
      </a>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
      </Card.Body>
    </Card>
  );
}
