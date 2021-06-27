import { render, screen } from '@testing-library/react';
import Settings from './Settings';

test('Renders settings page', () => {
  render(<Settings />);
  const linkElement = screen.getByText(/Settings/i);
  expect(linkElement).toBeInTheDocument();
});
