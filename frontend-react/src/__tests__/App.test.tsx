import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom';

test('renders login view by default', () => {
  render(<App />);
  
  // Check for elements specific to the login view
  const loginButton = screen.getByRole('button', { name: /login/i });
  const registerLink = screen.getByText(/register/i);

  expect(loginButton).toBeInTheDocument();
  expect(registerLink).toBeInTheDocument();
});

test('renders input fields', () => {
  render(<App />);

  const inputs = screen.getAllByRole('textbox');
  expect(inputs.length).toBeGreaterThan(0);
});

test('handles login button click', () => {
  render(<App />);

  const loginButton = screen.getByRole('button', { name: /login/i });
  fireEvent.click(loginButton);

  expect(loginButton).toBeInTheDocument();
});

test('switches to register view when register link is clicked', () => {
  render(<App />);

  const registerLink = screen.getByText(/register/i);
  fireEvent.click(registerLink);

  const registerButton = screen.getByRole('button', { name: /register/i });
  expect(registerButton).toBeInTheDocument();
});
