import Container from 'src/components/Container/Container'
import Card from '../../Card/Card'
import InfoBox from '../../InfoBox/InfoBox'

interface WizardPitchProps {
  onClick: () => void
}

const WizardPitch: React.FC<WizardPitchProps> = ({ onClick }) => {
  return (
    <Container align="center">
      <Card>
        <InfoBox
          title="Hello There! 😁"
          description="Let's buy some insurance. It is going to take only a few steps"
          actionLabel="Start"
          onClick={onClick}
        />
      </Card>
    </Container>
  )
}

export default WizardPitch
