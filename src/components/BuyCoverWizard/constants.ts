import { CountryCodes, Packages } from './types'

/* Keys to be used for saving data to localstorage */
// Saved Stepper ID can helps us start from the last saved step
export const WIZARD_STEPPER_ID = 'buy-cover-wizard-stepper-id'
// Saved form state can be used to populate the form data
export const WIZARD_FORM_STATE = 'buy-cover-wizard-form-state'
// Saved form details can be used to view the summary
export const WIZARD_FORM_DETAILS = 'buy-cover-wizard-form-details'

/* Essential data related to the country and package */
export const COUNTRY_DETAILS = {
  [CountryCodes.HK]: {
    currencyCode: 'HKD',
    countryCode: CountryCodes.HK,
    countryName: 'Hong Kong',
    rate: 1,
  },
  [CountryCodes.US]: {
    currencyCode: 'USD',
    countryCode: CountryCodes.US,
    countryName: 'United States',
    rate: 2,
  },
  [CountryCodes.AU]: {
    currencyCode: 'AUD',
    countryCode: CountryCodes.AU,
    countryName: 'Australia',
    rate: 3,
  },
}

export const PACKAGES = {
  [Packages.Standard]: {
    name: Packages.Standard,
    comparativeHike: {
      inDecimals: 0,
      inPercentage: 0,
    },
  },
  [Packages.Safe]: {
    name: Packages.Safe,
    comparativeHike: {
      inDecimals: 0.5,
      inPercentage: 50,
    },
  },
  [Packages.SuperSafe]: {
    name: Packages.SuperSafe,
    comparativeHike: {
      inDecimals: 0.75,
      inPercentage: 75,
    },
  },
}
