import { render, screen } from '@testing-library/react';
import { expect, it } from 'vitest';

import App from './App';

it('test if App renders correctly', async () => {
  render(<App />);
  const title = await screen.findByText(/Blog/i);
  expect(title).toBeInTheDocument();
});
