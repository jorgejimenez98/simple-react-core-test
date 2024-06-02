import { render, fireEvent } from '@testing-library/react';
import UseMemoPage from '../components/UseMemoPage';

test('calculates result correctly when numbers change', () => {
  const { getByText, getByLabelText } = render(<UseMemoPage />);
  const inputA = getByLabelText('A input');
  const inputB = getByLabelText('B input');

  fireEvent.change(inputA, { target: { value: '2' } });
  fireEvent.change(inputB, { target: { value: '3' } });

  const resultElement = getByText('The result for 2 * 3 = 6');
  expect(resultElement).toBeInTheDocument();
});
