import { render } from '@testing-library/react'
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
})
