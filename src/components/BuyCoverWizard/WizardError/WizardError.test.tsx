import { render } from '@testing-library/react'
import WizardError from './WizardError'

describe('WizardError suite', () => {
  test('renders without crashing', () => {
    const { container } = render(<WizardError onClick={() => null} />)
    expect(container).toBeTruthy()
  })
})
