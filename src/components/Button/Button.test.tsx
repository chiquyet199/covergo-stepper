import { render } from '@testing-library/react'
import Button from './Button'

describe('Button suite', () => {
  test('renders without crashing', () => {
    const { container } = render(<Button>Save</Button>)
    expect(container).toBeTruthy()
  })
})
