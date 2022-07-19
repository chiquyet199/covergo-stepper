import { useMemo, useState } from 'react'
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
  const [stepperId, setStepperId] = useState<StepperId>(StepperId.Pitch)
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

  return <div>{WIZARDS[stepperId].component}</div>
}

export default BuyCoverWizard
