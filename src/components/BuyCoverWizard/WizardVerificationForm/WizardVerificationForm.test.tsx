import { fireEvent, render, screen } from '@testing-library/react'
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

    screen.getByText('Back').click()
    expect(onBack).toHaveBeenCalled()
  })

  test('calls onSubmit when the submit button is clicked', () => {
    const onSubmit = jest.fn()

    render(<WizardVerificationForm onBack={() => null} onSubmit={onSubmit} />)

    // Type the name
    fireEvent.change(screen.getByTestId('wizard-form-name'), {
      target: { value: 'John' },
    })

    // Type the age
    fireEvent.change(screen.getByTestId('wizard-form-age'), {
      target: { value: '30' },
    })

    // Select the country
    fireEvent.change(screen.getByTestId('wizard-form-country'), {
      target: { value: 'US' },
    })

    // Click the package
    fireEvent.click(screen.getByTestId('wizard-form-package-Standard'), {
      target: { value: 'Standard' },
    })

    fireEvent.click(screen.getByText('Next'))

    expect(onSubmit).toHaveBeenCalled()
  })
})
