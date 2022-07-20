import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import WizardVerificationForm from './WizardVerificationForm'

describe('Wizard VerificationForm suite', () => {
  test('renders without crashing', () => {
    const { container } = render(
      <WizardVerificationForm onBack={() => null} onSubmit={() => null} />
    )
    expect(container).toBeTruthy()
  })

  test('renders with the correct text', () => {
    render(<WizardVerificationForm onBack={() => null} onSubmit={() => null} />)

    expect(screen.getByText('Tell us about yourself 🙏')).toBeTruthy()
    expect(screen.getByText('Name')).toBeTruthy()
    expect(screen.getByText('Age')).toBeTruthy()
    expect(screen.getByText('Country')).toBeTruthy()
    expect(screen.getByText('Standard')).toBeTruthy()
    expect(screen.getByText('Safe')).toBeTruthy()
    expect(screen.getByText('Super Safe')).toBeTruthy()
    expect(screen.getByText('Back')).toBeTruthy()
    expect(screen.getByText('Next')).toBeTruthy()
  })

  test('calls onBack when the back button is clicked', () => {
    const onBack = jest.fn()
    render(<WizardVerificationForm onBack={onBack} onSubmit={() => null} />)

    userEvent.click(screen.getByText('Back'))
    expect(onBack).toHaveBeenCalled()
  })

  test('calls onSubmit when the submit button is clicked', async () => {
    const onSubmit = jest.fn()

    await render(
      <WizardVerificationForm onBack={() => null} onSubmit={onSubmit} />
    )

    const nameInput = screen.getByTestId('wizard-form-name')
    const ageInput = screen.getByTestId('wizard-form-age')
    const countryInput = screen.getByTestId('wizard-form-country')
    const standardOption = screen.getByTestId('wizard-form-package-Standard')

    // Type the name
    userEvent.type(nameInput, 'John Doe')

    // Type the age
    userEvent.type(ageInput, '30')

    // Select the country
    userEvent.selectOptions(countryInput, '🇦🇺 Australia')

    // Click the package
    userEvent.click(standardOption)

    userEvent.click(screen.getByText('Next'))

    expect(onSubmit).toHaveBeenCalled()
  })
})
