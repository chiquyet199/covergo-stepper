import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import InfoBox from './InfoBox'

describe('InfoBox suite', () => {
  test('renders without crashing', () => {
    const { container } = render(
      <InfoBox
        title="Hello"
        description="World"
        actionLabel="Back"
        onClick={() => null}
      />
    )
    expect(container).toBeTruthy()
  })

  test('renders with the correct text', () => {
    render(
      <InfoBox
        title="Hello"
        description="World"
        actionLabel="Back"
        onClick={() => null}
      />
    )

    expect(screen.getByText('Hello')).toBeTruthy()
    expect(screen.getByText('World')).toBeTruthy()
    expect(screen.getByText('Back')).toBeTruthy()
  })

  test('calls onClick when the button is clicked', () => {
    const onClick = jest.fn()
    render(
      <InfoBox
        title="Hello"
        description="World"
        actionLabel="Back"
        onClick={onClick}
      />
    )

    userEvent.click(screen.getByText('Back'))
    expect(onClick).toHaveBeenCalled()
  })
})
