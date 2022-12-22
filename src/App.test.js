import { render, screen,getByRole,getByText ,fireEvent ,waitFor,getAllByText,findAllByText} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import LoginForm from './Component/LoginForm';

test('renders the Login form', () => {
  render(<LoginForm />)
  const usernameInput = screen.getByText('Username')
  const emailInput = screen.getByText('Email')
  const mobileInput = screen.getByText('Mobile')
  const DobInput = screen.getByText('Dob')
  const maleInput = screen.getByText('Male')
  const femaleInput = screen.getByText('Female')
  const passwordInput = screen.getByText('Password')
  const passwordConfirmationInput = screen.getByText('Confirm Password')
  const checkboxInput = screen.getByText('Accept terms conditions')
  expect(usernameInput).toBeInTheDocument()
  expect(emailInput).toBeInTheDocument()
  expect(mobileInput).toBeInTheDocument()
  expect(DobInput).toBeInTheDocument()
  expect(maleInput).toBeInTheDocument()
  expect(femaleInput).toBeInTheDocument()
  expect(passwordInput).toBeInTheDocument()
  expect(passwordConfirmationInput).toBeInTheDocument()
  expect(checkboxInput).toBeInTheDocument()
})

test('validates the form inputs', async () => {
  const { getByText } = render(<LoginForm />)
  const submitButton = getByText('Register')
  fireEvent.click(submitButton)
  await waitFor(() => {
    expect(getByText('Username field is required')).toBeInTheDocument()
    expect(getByText('Email field is required')).toBeInTheDocument()
    expect(getByText('Mobile field is required')).toBeInTheDocument()
    expect(getByText('Date field is required')).toBeInTheDocument()
    expect(getByText('Gender field is required')).toBeInTheDocument()
    expect(getByText('Password field is required')).toBeInTheDocument()
    expect(getByText('Confirm Password field is required')).toBeInTheDocument()
    expect(getByText('Checkbox field is required')).toBeInTheDocument()
  })
})

  test('submits the form', async () => {
    const mockOnSubmit = jest.fn()
    const { getByText, getByLabelText } = render(<LoginForm onSubmit={mockOnSubmit} />)
    const user = userEvent.setup()

    await user.type(getByText(/Username/i), 'John')
    await user.type(getByText(/Email/i), 'Dee@gmail.com')
    await user.type(getByText(/Mobile/i), '7686547654')
    await user.type(getByText(/Dob/i), '2022-12-16')
    await user.type(getByText(/Gender/i), 'Male')
    await user.type(getByText("Password"), 'qwerty1234')
    await user.type(getByText(/Confirm Password/i), 'qwerty1234')
    await user.type(getByText(/Accept terms conditions/i), 'true')

    await user.click(screen.getByRole('button', {name: /Register/i}))

    // await waitFor(() =>expect(mockOnSubmit).toHaveFormValues())
  })

