import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the download csv button', () => {
  render(<App />);
  const linkElement = screen.getByText(/Export CSV/i);
  expect(linkElement).toBeInTheDocument();
});
