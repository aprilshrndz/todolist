import { render, screen, fireEvent } from '@testing-library/react';
import Button from './button';

describe('Common/Button', () => {
  test('renders correctly', () => {
    render(<Button label="Click Me" />);
    const buttonElement = screen.getByText('Click Me');
    expect(buttonElement).toBeInTheDocument();
  });

  test('Button onClick function is called', () => {
    const onClickMock = jest.fn();
    render(<Button label="Click Me" onClick={onClickMock} type='secondary' />);

    const buttonElement = screen.getByRole('button', { name: 'Click Me'})

    fireEvent.click(buttonElement)
    expect(onClickMock).toHaveBeenCalledTimes(1)
  })
})