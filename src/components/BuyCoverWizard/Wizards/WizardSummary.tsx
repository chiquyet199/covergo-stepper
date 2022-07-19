import Button from 'src/components/Button/Button'

interface Props {
  onBack: () => void
  onBuy: () => void
}

const WizardSummary: React.FC<Props> = ({ onBack, onBuy }) => {
  return (
    <div>
      <h2>Summary</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod,
        nisl eget consectetur sagittis, nisl nunc egestas nisi, euismod aliquam
        nisl nisl eget nisi.
      </p>

      <Button onClick={onBack}>Back</Button>
      <Button onClick={onBuy}>Buy</Button>
    </div>
  )
}

export default WizardSummary
