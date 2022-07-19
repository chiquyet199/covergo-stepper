import { render, screen } from '@testing-library/react'
import WizardPitch from './WizardPitch'

describe('WizardPitch suite', () => {
  test('renders without crashing', () => {
    const { container } = render(<WizardPitch onClick={() => null} />)
    expect(container).toBeTruthy()
  })

  test('renders with the correct text', () => {
    render(<WizardPitch onClick={() => null} />)

    expect(screen.getByText('Hello There!')).toBeTruthy()
    expect(
      screen.getByText(
        "Let's buy some insurance. It is going to take only a few steps"
      )
    ).toBeTruthy()
    expect(screen.getByText('Start')).toBeTruthy()
  })

  test('calls onClick when the button is clicked', () => {
    const onClick = jest.fn()
    render(<WizardPitch onClick={onClick} />)

    screen.getByText('Start').click()
    expect(onClick).toHaveBeenCalled()
  })
})
