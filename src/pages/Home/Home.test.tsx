import React from 'react';
import { render } from 'react-dom';
import { MemoryRouter, withRouter } from 'react-router-dom';
import Home from './Home';

// quick workaround for TS not knowing that Home will have
// router props injected
const HomeWithRouter = withRouter(Home);

describe('<Home />', () => {
  test('renders without exploding', () => {
    const div = document.createElement('div');
    render(
      <MemoryRouter>
        <HomeWithRouter/>
      </MemoryRouter>,
      div
    );
  });
});