import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import profile from './data/profile';

test('renders the profile name and headline role', () => {
  const { getAllByText, getByText } = render(<App />);
  expect(getAllByText(new RegExp(profile.name, 'i')).length).toBeGreaterThan(0);
  expect(getByText(profile.role)).toBeInTheDocument();
});

test('links out to the résumé download', () => {
  const { getAllByText } = render(<App />);
  const resumeLinks = getAllByText(/résumé/i);
  expect(resumeLinks.length).toBeGreaterThan(0);
});
