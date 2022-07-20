import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from './Button'

describe('Button suite', () => {
  test('renders without crashing', () => {
    const { container } = render(<Button>Save</Button>)
    expect(container).toBeTruthy()
  })

  test('renders with the correct text', () => {
    render(<Button>Save</Button>)

    expect(screen.getByText('Save')).toBeTruthy()
  })

  test('calls onClick when the button is clicked', () => {
    const onClick = jest.fn()
    render(<Button onClick={onClick}>Save</Button>)

    userEvent.click(screen.getByText('Save'))
    expect(onClick).toHaveBeenCalled()
  })
})
