import { render, screen } from '@testing-library/react';
import Board from './Board';

test('Renders board page', () => {
  render(<Board />);
  const linkElement = screen.getByText(/Board/i);
  expect(linkElement).toBeInTheDocument();
});
