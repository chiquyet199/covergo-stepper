import Card from '../../Card/Card'
import InfoBox from '../../InfoBox/InfoBox'

interface WizardErrorProps {
  onClick: () => void
}

const WizardError: React.FC<WizardErrorProps> = ({ onClick }) => {
  return (
    <Card>
      <InfoBox
        title="Ooops!"
        description="Your age is over our accepted limit. We are sorry but we cannot insure you now."
        actionLabel="Ok :("
        onClick={onClick}
      />
    </Card>
  )
}

export default WizardError
