import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

test('Header component renders successfully', () => {
  render(<Header />);

  // Check if the text "Emoji Search" is present in the rendered component
  const headerText = screen.getByText(/Emoji Search/i);
  expect(headerText).toBeDefined();


});

