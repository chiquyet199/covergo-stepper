import { render } from '@testing-library/react'
import Card from './Card'

describe('Card suite', () => {
  test('renders without crashing', () => {
    const { container } = render(<Card>Save</Card>)
    expect(container).toBeTruthy()
  })
})
