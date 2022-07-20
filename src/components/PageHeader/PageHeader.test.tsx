import { render, screen } from '@testing-library/react'
import PageHeader from './PageHeader'

describe('Page Header suite', () => {
  test('renders without crashing', () => {
    const { container } = render(
      <PageHeader title="Tell us about yourself 🙏" />
    )
    expect(container).toBeTruthy()
  })

  test('renders title correctly', () => {
    render(<PageHeader title="Tell us about yourself 🙏" />)

    expect(screen.getByText('Tell us about yourself 🙏')).toBeTruthy()
  })
})
