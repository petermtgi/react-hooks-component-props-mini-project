import { render, screen } from '@testing-library/react';
import App from './App';

test('renders blog title', () => {
  render(<App />);
  const headerElement = screen.getByText(/my personal blog/i);
  expect(headerElement).toBeInTheDocument();
});
