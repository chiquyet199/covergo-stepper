import { useEffect } from 'react'
import Button from 'src/components/Button/Button'
import Container from 'src/components/Container/Container'
import PageHeader from 'src/components/PageHeader/PageHeader'
import { VerificationForm } from '../types'
import styles from './WizardSummary.module.css'

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
    <Container align="center" className={styles.container}>
      <PageHeader title="Summary 😎" />

      <div className={styles.summary}>
        <div>
          <span>
            {verificationForm.name}, {verificationForm.age}
          </span>
          <span>{verificationForm.country}</span>
        </div>

        <div>
          <span>{verificationForm.package}</span>

          <span>{verificationForm.premium}</span>
        </div>
      </div>

      <Button onClick={onBack}>Back</Button>
      <Button onClick={onBuy}>Buy</Button>
    </Container>
  )
}

export default WizardSummary
