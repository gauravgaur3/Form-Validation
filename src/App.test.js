import { render, screen,fireEvent ,waitFor,getAllByText,findAllByText} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import LoginField from './Component/LoginField';
import LoginForm from './Component/LoginForm';

test('renders the Login form', () => {
  const { getByText } = render(<LoginForm />)
  const usernameInput = getByText('Username')
  const emailInput = getByText('Email')
  const mobileInput = getByText('Mobile')
  const DobInput = getByText('Dob')
  const maleInput = getByText('Male')
  const femaleInput = getByText('Female')
  const passwordInput = getByText('Password')
  const passwordConfirmationInput = getByText('Confirm Password')
  const checkboxInput = getByText('Accept terms conditions')
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
    const { getByText} = render(<LoginForm onSubmit={mockOnSubmit} />)
    const user = userEvent.setup()

    await user.type(getByText(/Username/i), 'John')
    await user.type(getByText(/Email/i), 'Dee@gmail.com')
    await user.type(getByText(/Mobile/i), '7686547654')
    await user.type(getByText(/Dob/i), '2022-12-16')
    await user.click(getByText(/Gender/i), 'Male')
    await user.type(getByText("Password"), 'qwerty1234')
    await user.type(getByText(/Confirm Password/i), 'qwerty1234')
    await user.click(getByText(/Accept terms conditions/i), 'true')

    await user.click(getByText('Register'))

    await waitFor(() =>expect(mockOnSubmit))
  })
