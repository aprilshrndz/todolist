import { render, screen, fireEvent } from '@testing-library/react';
import Form from './form';

describe('Common/Form', () => {
  test('Button onSubmit function is called', () => {
    const mockOnSubmit = jest.fn();
    render(<Form onSubmit={mockOnSubmit} >Form Content</Form>);

    const formElement = screen.getByText('Form Content')

    fireEvent.submit(formElement)
    expect(mockOnSubmit).toHaveBeenCalledTimes(1)
  })
})