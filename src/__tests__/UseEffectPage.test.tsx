import { render, fireEvent } from '@testing-library/react';
import UseEffectPage from '../components/UseEffectPage';

test('increments counter when button is clicked', () => {
  const { getByText } = render(<UseEffectPage />);
  const button = getByText('+');
  fireEvent.click(button);
  const textElement = getByText('The value of counter is: 1');
  expect(textElement).toBeInTheDocument();
});
