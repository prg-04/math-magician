import React from 'react';
import { createRoot } from 'react-dom/client';
import Home from './Home';

describe('Home component', () => {
  test('renders without crashing', () => {
    const root = document.createElement('div');
    createRoot(root).render(<Home />);
  });
});