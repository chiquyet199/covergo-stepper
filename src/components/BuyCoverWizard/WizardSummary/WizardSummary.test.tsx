import { render } from '@testing-library/react'
import WizardSummary from './WizardSummary'

describe('WizardSummary suite', () => {
  test('renders without crashing', () => {
    const { container } = render(
      <WizardSummary
        onBack={() => null}
        onBuy={() => null}
        verificationForm={{
          name: '',
          age: '',
          country: '',
          package: '',
        }}
      />
    )
    expect(container).toBeTruthy()
  })
})
