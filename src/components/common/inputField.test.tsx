import { render, screen, fireEvent } from '@testing-library/react';
import InputField from './inputField';

describe('Common/InputField', () => {
  test('renders without toggle and message', () => {
    render(<InputField name='name' type='text' value='test' />)
    const inputElement = screen.getByDisplayValue('test')
    expect(inputElement).toBeInTheDocument()
    const toggle = screen.queryByRole('link')
    expect(toggle).toBeNull()
    const message = screen.queryByText('errorMessage')
    expect(message).toBeNull()
    const label = screen.queryByRole('label')
    expect(label).toBeNull()
  });

  test('renders with label', () => {
    render(<InputField name='name' type='text' value='test' toggleBtn='btn' label='label'/>)
    const inputElement = screen.getByDisplayValue('test')
    expect(inputElement).toBeInTheDocument()
    const label = screen.getByText('label')
    expect(label).toBeInTheDocument()
  });

  test('renders with toggle', () => {
    render(<InputField name='name' type='text' value='test' toggleBtn='btn' />)
    const inputElement = screen.getByDisplayValue('test')
    expect(inputElement).toBeInTheDocument()
    const toggle = screen.getByRole('link')
    expect(toggle).toBeInTheDocument()
  });

  test('renders with message', () => {
    render(<InputField name='name' type='text' value='test' message='errorMessage' />)
    const inputElement = screen.getByDisplayValue('test')
    expect(inputElement).toBeInTheDocument()
    const aElement = screen.getByText('errorMessage')
    expect(aElement).toBeInTheDocument()
  });

  test('toggle onClick function is called', () => {
    const onClickMock = jest.fn();
    render(<InputField name='name' type='text' value='test' toggleBtn='btn' toggleOnClick={onClickMock} />)

    const toggle = screen.getByRole('link', { name: 'btn'})

    fireEvent.click(toggle)
    expect(onClickMock).toHaveBeenCalledTimes(1)
  })

  test('input onChange function is called', () => {
    const mockOnChange = jest.fn();
    render(<InputField name='name' type='text' value='test' onChange={mockOnChange} />)

    const inputElement = screen.getByDisplayValue('test')
    fireEvent.change(inputElement, { target: { value: 'new value' } });
    expect(mockOnChange).toHaveBeenCalledTimes(1)
  })
})