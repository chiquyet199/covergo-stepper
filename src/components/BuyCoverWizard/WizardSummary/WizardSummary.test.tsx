import { render, screen } from '@testing-library/react'
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
          country: 'US',
          package: '',
          premium: '',
        }}
      />
    )
    expect(container).toBeTruthy()
  })

  test('renders the correct title', () => {
    render(
      <WizardSummary
        onBack={() => null}
        onBuy={() => null}
        verificationForm={{
          name: '',
          age: '',
          country: '',
          package: '',
          premium: '',
        }}
      />
    )
    expect(screen.getByText('Summary 😎')).toBeTruthy()
  })

  test('renders the correct fields', () => {
    render(
      <WizardSummary
        onBack={() => null}
        onBuy={() => null}
        verificationForm={{
          name: 'John Doe',
          age: '30',
          country: 'US',
          package: 'Safe',
          premium: '900USD',
        }}
      />
    )
    expect(screen.getByText('🇺🇸 John Doe, 30')).toBeTruthy()
    expect(screen.getByText('Safe')).toBeTruthy()
    expect(screen.getByText('900USD')).toBeTruthy()
  })
})
