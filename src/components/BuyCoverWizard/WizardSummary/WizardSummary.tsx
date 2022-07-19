import { useEffect } from 'react'
import Button from 'src/components/Button/Button'
import Container from 'src/components/Container/Container'
import PageHeader from 'src/components/PageHeader/PageHeader'
import { COUNTRY_DETAILS } from '../constants'
import { CountryCodes, VerificationForm } from '../types'
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

  const countryFlag = (verificationForm.country as CountryCodes)
    ? COUNTRY_DETAILS[verificationForm.country as CountryCodes].countryFlag
    : ''

  return (
    <Container align="center" className={styles.container}>
      <PageHeader title="Summary 😎" />

      <span className={styles.title}>
        {countryFlag} {verificationForm.name}, {verificationForm.age}
      </span>

      <div
        className={`${
          styles[verificationForm.package.replace(' ', '').toLowerCase()]
        } ${styles.package}`}
      >
        <span>{verificationForm.package}</span>
        <span>{verificationForm.premium}</span>
      </div>

      <div className={styles.formActionGroup}>
        <Button onClick={onBack} appearance="ghost">
          Back
        </Button>
        <Button onClick={onBuy} appearance="contained">
          Buy
        </Button>
      </div>
    </Container>
  )
}

export default WizardSummary
