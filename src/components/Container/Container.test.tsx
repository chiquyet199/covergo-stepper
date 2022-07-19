import { render } from '@testing-library/react'
import Container from './Container'

describe('Container suite', () => {
  test('renders without crashing', () => {
    const { container } = render(<Container>Save</Container>)
    expect(container).toBeTruthy()
  })
})
