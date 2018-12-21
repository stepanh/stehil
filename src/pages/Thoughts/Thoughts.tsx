import React from 'react';
import './Thoughts.scss';

const Thoughts: React.FunctionComponent = () => {
  return (
    <div className="default-section thoughts">
      <p>I'm a bit crazy - <i>you already noticed, don't say</i> - about optimizing things.</p>
      <p>Idea #1</p>
      <h2>Your Daily Commute</h2>
      <p>
        Conventional public transport is too slow,
        inefficient and expensive. Yet, there are few
        plans for something radically better.
        The only exciting stuff is coming out of
        The Boring Company and Hyperloop. The established
        public transport dinosaurs are not innovating. But
        there is a lot more that could be done <b>right now</b>,
        with <b>proven technologies</b> - before we go nuts and dig
        10 levels of underground tunnels. <a
          href="https://www.linkedin.com/pulse/sydney-transport-more-metros-please-stepan-hilbert/"
        >
        Read about Pods.
        </a>
      </p>
    </div>
  );
};

export default Thoughts;
