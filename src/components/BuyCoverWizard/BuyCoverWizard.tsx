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
  const WIZARDS = useMemo(
    () => ({
      [StepperId.Pitch]: {
        component: (
          <WizardPitch
            onClick={() => setStepperId(StepperId.VerificationForm)}
          />
        ),
        id: StepperId.Pitch,
      },
      [StepperId.Error]: {
        component: (
          <WizardError onClick={() => setStepperId(StepperId.Pitch)} />
        ),
        id: StepperId.Error,
      },
      [StepperId.VerificationForm]: {
        component: <WizardVerificationForm />,
        id: StepperId.VerificationForm,
      },
      [StepperId.Summary]: {
        component: <WizardSummary />,
        id: StepperId.Summary,
      },
    }),
    []
  )

  return <div>{WIZARDS[stepperId].component}</div>
}

export default BuyCoverWizard
