import { render } from '@testing-library/react'
import WizardPitch from './WizardPitch'

describe('WizardPitch suite', () => {
  test('renders without crashing', () => {
    const { container } = render(<WizardPitch onClick={() => null} />)
    expect(container).toBeTruthy()
  })
})
