import { render, screen } from '@testing-library/react'
import WizardError from './WizardError'

describe('WizardError suite', () => {
  test('renders without crashing', () => {
    const { container } = render(<WizardError onClick={() => null} />)
    expect(container).toBeTruthy()
  })

  test('renders with the correct text', () => {
    render(<WizardError onClick={() => null} />)

    expect(screen.getByText('Ooops! 😢')).toBeTruthy()
    expect(
      screen.getByText(
        'Your age is over our accepted limit. We are sorry but we cannot insure you now.'
      )
    ).toBeTruthy()
    expect(screen.getByText('Ok')).toBeTruthy()
  })

  test('calls onClick when the button is clicked', () => {
    const onClick = jest.fn()
    render(<WizardError onClick={onClick} />)

    screen.getByText('Ok').click()
    expect(onClick).toHaveBeenCalled()
  })
})
