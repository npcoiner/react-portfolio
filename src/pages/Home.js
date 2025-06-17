import React from 'react';
import selfie from '../assets/images/2.jpg';

export default function Home() {
  return (
    <div className="text-center">
      <h2>Hi, I'm Nick</h2>
      <img src={selfie} alt="Selfie" className="img-thumbnail my-3" width="250" />
      <p className="mx-auto" style={{ maxWidth: '600px' }}>
        I'm a motivated UC Davis computer science student with experience in customer
        service and a strong desire to learn. I'm proficient in Python, C++, and C# with
        coursework in discrete mathematics, physics, and probability & statistical modeling.
        I enrolled in a full stack development course at UC Davis to further develop
        front end and back end skills. Hopefully you will enjoy my website!
      </p>
    </div>
  );
}
