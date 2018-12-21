import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import './Home.scss';
import { getLifeFraction } from 'utils/timeTracker';
import useRefreshEverySecond from 'effects/useRefreshEverySecond';

const emojis = ['🙀', '😱', '🤔', '🙃', '🦄'];
interface Props extends RouteComponentProps<any, any> {
  rand?: number;
  // error?: Error;
}

const Home: React.FunctionComponent<Props> = (props) => {

  useRefreshEverySecond();

  const lifeFraction = getLifeFraction();
  const {rand = 0} = props;
  const emoji = emojis[Math.floor(emojis.length * rand)];

  return (
    <div className="default-section home">
      <h1>Yello!</h1>
      <p>
        Did you come for amazing photos?<sup><a href="#ref1">[1]</a></sup>
      </p>
      <p>
        Or, for even more amazing thoughts?
      </p>
      <p>
        Either way, you are in great luck!
      </p>
      <p>
        <i>Or, are you?</i>
      </p>
      <p className="home-lifetime">
        You've spent here<br />
        {lifeFraction}% <br />
        of your life expectancy.
      </p>
      <p className="home-emoji">{emoji}</p>
      <div className="home-references"/>
      <p id="ref1">1. There are no photos here</p>
    </div>
  );
};

export default Home;
