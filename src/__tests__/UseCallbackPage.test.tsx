import { render, fireEvent } from '@testing-library/react';
import UseCallbackPage from '../components/UseCallbackPage';

test('increments counter when "+" button is clicked', () => {
  const { getByText } = render(<UseCallbackPage />);
  const incrementButton = getByText('+');
  fireEvent.click(incrementButton);
  const counterElement = getByText('Counter is 1');
  expect(counterElement).toBeInTheDocument();
});

test('decrements counter when "-" button is clicked', () => {
  const { getByText } = render(<UseCallbackPage />);
  const decrementButton = getByText('-');
  fireEvent.click(decrementButton);
  const counterElement = getByText('Counter is -1');
  expect(counterElement).toBeInTheDocument();
});
