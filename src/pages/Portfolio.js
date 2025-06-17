import React from 'react';
import ProjectCard from '../components/ProjectCard';
import project1 from '../assets/images/horiseon code refactor.png';
import project2 from '../assets/images/Screenshot 2023-05-05 084335.png';
import project3 from '../assets/images/You are what you EAT.png';
import project4 from '../assets/images/image.png';

export default function Portfolio() {
  const projects = [
    {
      name: 'Horiseon Code Refactoring',
      source: 'https://npcoiner.github.io/Week1ChallengeHoriseonRefactoring/',
      image: project1,
    },
    {
      name: 'You Are What You Eat',
      source: 'https://patrickwlowe.github.io/Super-Team-Project/',
      image: project2,
    },
    {
      name: 'You Are What You Eat v2',
      source: 'https://thawing-eyrie-67221-bd008bd79efe.herokuapp.com/',
      image: project3,
    },
    {
      name: 'Sudoku Shuffle',
      source: 'https://mighty-ridge-19238-3e456d2c37f3.herokuapp.com/',
      image: project4,
    },
  ];

  return (
    <div className="d-flex flex-wrap justify-content-center">
      {projects.map((p) => (
        <ProjectCard key={p.name} {...p} />
      ))}
    </div>
  );
}
