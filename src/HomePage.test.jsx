import React from 'react';

import { MemoryRouter } from 'react-router-dom';

import { render } from '@testing-library/react';

import HomePage from './HomePage';

test('HomePage', () => {

  const { queryByText } = render((
    <MemoryROuter>
      <HomePage />
    </MemoryROuter>
  ));

  expect(queryByText('About')).not.toBeNull();
  expect(queryByText('Restaurants')).not.toBeNull();
});
