import React from "react";


function About() {
  return (
    <div className="about-me">
      <div className="text"> 
        <div className="greeting">Hi !</div>
        <h2 className="introduce-myself">I'm Supakorn Imjai. a Front-End Developer</h2>
        <p className="details">
          Front-End developer based in Bangkok, Thailand I’am coding with a clean and beautiful
          problem solving in mind.
        </p>
      </div>

      <div className="my-image">
        <img className="my-image-profile" src="https://i.redd.it/ymuuass5t7a71.png" alt="my-profile-image" />
      </div>
    </div>
  );
}

export default About;
