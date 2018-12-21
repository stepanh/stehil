import React from 'react';
import './About.scss';

const About: React.FunctionComponent = () => {
  return (
    <div className="default-section about">
      <h3>This is...</h3>
      <p>a personal website and playground of Stepan Hilbert.</p>
      <p>This site is intentionally quirky. 🤡</p>
      <p>I've been building way too many serious websites for others - and it gets boring!</p>
      <p>
        Get in touch - <a href="https://www.linkedin.com/in/stepanhilbert/">LinkedIn</a>.
      </p>
      <p>View source - <a href="https://github.com/stepanh/stehil">Github</a>.</p>
    </div>
  );
};

export default About;
