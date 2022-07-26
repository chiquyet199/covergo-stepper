import { useCallback, useEffect, useMemo, useState } from 'react'
import {
  WIZARD_FORM_DETAILS,
  WIZARD_FORM_STATE,
  WIZARD_STEPPER_ID,
} from 'src/components/BuyCoverWizard/constants'
import { VerificationForm } from 'src/components/BuyCoverWizard/types'
import {
  WizardError,
  WizardPitch,
  WizardSummary,
  WizardVerificationForm,
} from 'src/components/BuyCoverWizard'
import Container from './components/Container/Container'
import { Spinner } from './components'

enum StepperId {
  Pitch = 'pitch',
  Error = 'error',
  VerificationForm = 'verification-form',
  Summary = 'summary',
}

const loaderStyle = {
  justifyContent: 'center',
  display: 'flex',
  alignItems: 'center',
}

const App = () => {
  const [stepperId, setStepperId] = useState<StepperId>(
    (localStorage.getItem(WIZARD_STEPPER_ID) as StepperId) || StepperId.Pitch
  )
  const [loading, setLoading] = useState(true)

  // This data will be viewable on the summary page
  const [verificationForm, setVerificationForm] =
    useState<VerificationForm | null>(
      localStorage.getItem(WIZARD_FORM_DETAILS)
        ? JSON.parse(localStorage.getItem(WIZARD_FORM_DETAILS) as string)
        : null
    )

  // Step naviagational methods
  const gotoPitch = () => setStepperId(StepperId.Pitch)
  const gotoVerificationForm = () => setStepperId(StepperId.VerificationForm)

  // Handler for the verification form available on step 2/verification form
  const onSubmit = (data: VerificationForm) => {
    if (Number(data.age) > 100) {
      // Clear all data if the age is greater than 100
      setVerificationForm(null)
      localStorage.removeItem(WIZARD_FORM_STATE)
      setStepperId(StepperId.Error)
    } else {
      // Save the form details in localStorage to be viewed later on summary page
      localStorage.setItem(WIZARD_FORM_DETAILS, JSON.stringify(data))
      setVerificationForm(data)
      setStepperId(StepperId.Summary)
    }
  }

  // Handler for the buy button on Summary page
  const onBuy = useCallback(() => {
    setVerificationForm(null)
    localStorage.removeItem(WIZARD_FORM_STATE)
    gotoPitch()
  }, [])

  // Wizard steps
  const WIZARDS = useMemo(
    () => ({
      [StepperId.Pitch]: {
        component: <WizardPitch onClick={gotoVerificationForm} />,
        id: StepperId.Pitch,
      },
      [StepperId.Error]: {
        component: <WizardError onClick={gotoPitch} />,
        id: StepperId.Error,
      },
      [StepperId.VerificationForm]: {
        component: (
          <WizardVerificationForm onBack={gotoPitch} onSubmit={onSubmit} />
        ),
        id: StepperId.VerificationForm,
      },
      [StepperId.Summary]: {
        component: (
          <WizardSummary
            onBack={gotoVerificationForm}
            onBuy={onBuy}
            verificationForm={verificationForm}
          />
        ),
        id: StepperId.Summary,
      },
    }),
    [onBuy, verificationForm]
  )

  // Update the stepperId in localStorage so that we can remember the last step
  useEffect(() => {
    if (stepperId !== StepperId.Error) {
      localStorage.setItem(WIZARD_STEPPER_ID, stepperId)
    } else {
      localStorage.removeItem(WIZARD_STEPPER_ID)
    }
  }, [stepperId])

  // App ready state
  useEffect(() => {
    setLoading(false)
  }, [])

  if (loading) {
    return (
      <Container style={loaderStyle}>
        <Spinner />
      </Container>
    )
  }

  return <Container>{WIZARDS[stepperId].component}</Container>
}

export default App
