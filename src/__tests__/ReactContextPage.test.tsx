import { render, fireEvent } from '@testing-library/react';
import ReactContextPage from '../components/ReactContextPage';
import { CounterProvider } from '../context/ContextProvider';

test('increments counter when "+" button is clicked', () => {
  const { getByText } = render(
    <CounterProvider>
      <ReactContextPage />
    </CounterProvider>
  );
  const incrementButton = getByText('+');
  fireEvent.click(incrementButton);
  const counterElement = getByText('Counter is 1 with Provider');
  expect(counterElement).toBeInTheDocument();
});

test('decrements counter when "-" button is clicked', () => {
  const { getByText } = render(
    <CounterProvider>
      <ReactContextPage />
    </CounterProvider>
  );
  const decrementButton = getByText('-');
  fireEvent.click(decrementButton);
  const counterElement = getByText('Counter is -1 with Provider');
  expect(counterElement).toBeInTheDocument();
});
