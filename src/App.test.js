import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Sidebar exists in the document', () => {
  render(<App />);
  const header = screen.getByRole('header');
  expect(header).toBeInTheDocument();
});

test('Main UI exists', () => {
  render(<App />);
  const main = screen.getByRole('main');
  expect(main).toBeInTheDocument();
})
