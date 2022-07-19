import { render } from '@testing-library/react'
import WizardVerificationForm from './WizardVerificationForm'

describe('Wizard VerificationForm suite', () => {
  test('renders without crashing', () => {
    const { container } = render(
      <WizardVerificationForm onBack={() => null} onSubmit={() => null} />
    )
    expect(container).toBeTruthy()
  })
})
