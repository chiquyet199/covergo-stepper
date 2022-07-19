import { render } from '@testing-library/react'
import App from './App'

test('App renders correctly', () => {
  const { container } = render(<App />)
  expect(container).toBeTruthy()
})
