import React from "react";
import "./style.css";

import Fade from 'react-reveal/Fade';

// AngleJumbo component with a triangular shape for use on landing page
const AngleJumbo = () => (
  <div className="angled"> 
    <header>
      <Fade cascade delay={435} duration={3750}>
        <h1>Welcome to your Dream Job!</h1>
      </Fade>

      <p className="subTitle font-weight-bold">DreamJob is here to turn your dream into a reality... <br/> <span className="font-italic">Get started now!</span></p>

    </header>

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
      <path d="M0 0 L50 100 L100 0 Z" />
    </svg>
  </div> 
);

export default AngleJumbo;