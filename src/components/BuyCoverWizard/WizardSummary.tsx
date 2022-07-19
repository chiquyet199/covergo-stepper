import { useEffect } from 'react'
import Button from 'src/components/Button/Button'
import { VerificationForm } from './types'

interface Props {
  onBack: () => void
  onBuy: () => void
  verificationForm: VerificationForm | null
}

const WizardSummary: React.FC<Props> = ({
  onBack,
  onBuy,
  verificationForm,
}) => {
  // User should be on this page if form details are not available
  useEffect(() => {
    if (!verificationForm) {
      onBack()
    }
  }, [onBack, verificationForm])

  // Do not render anything if the user's form details are not available
  if (!verificationForm) {
    return null
  }

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
