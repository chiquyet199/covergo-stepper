import Card from '../../Card/Card'
import InfoBox from '../../InfoBox/InfoBox'

interface WizardPitchProps {
  onClick: () => void
}

const WizardPitch: React.FC<WizardPitchProps> = ({ onClick }) => {
  return (
    <Card>
      <InfoBox
        title="Hello There!"
        description="Let's buy some insurance. It is going to take only a few steps"
        actionLabel="Start"
        onClick={onClick}
      />
    </Card>
  )
}

export default WizardPitch
