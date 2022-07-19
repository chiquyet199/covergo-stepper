import { CountryCodes, Packages } from './types'

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
