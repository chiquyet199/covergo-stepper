import { useEffect, useMemo, useState } from 'react'
import { WIZARD_STEPPER_ID } from './constants'
import {
  WizardError,
  WizardPitch,
  WizardSummary,
  WizardVerificationForm,
} from './Wizards'

enum StepperId {
  Pitch = 'pitch',
  Error = 'error',
  VerificationForm = 'verification-form',
  Summary = 'summary',
}

const BuyCoverWizard = () => {
  // We can check if browser supports localStorage or not but for now we'll just use localStorage
  const savedStepperId = localStorage.getItem(WIZARD_STEPPER_ID) as StepperId
  const [stepperId, setStepperId] = useState<StepperId>(
    savedStepperId || StepperId.Pitch
  )
  const gotoPitch = () => setStepperId(StepperId.Pitch)
  const gotoVerificationForm = () => setStepperId(StepperId.VerificationForm)
  const onSubmit = () => {
    setStepperId(StepperId.Summary)
  }

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
          <WizardSummary onBack={gotoVerificationForm} onBuy={gotoPitch} />
        ),
        id: StepperId.Summary,
      },
    }),
    []
  )

  // Update the stepperId in localStorage so that we can remember the last step
  useEffect(() => {
    if (stepperId !== StepperId.Error) {
      localStorage.setItem(WIZARD_STEPPER_ID, stepperId)
    } else {
      localStorage.removeItem(WIZARD_STEPPER_ID)
    }
  }, [stepperId])

  return <div>{WIZARDS[stepperId].component}</div>
}

export default BuyCoverWizard
