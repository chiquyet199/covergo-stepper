import { COUNTRY_DETAILS, PACKAGES } from './constants'
import { CountryCodes, FormFields, FormState, Packages } from './types'

// Validate the form fields
export const validate = (value: string, fieldname: FormFields) => {
  switch (fieldname) {
    case FormFields.Name:
      if (value.length < 3) {
        return 'Name must be at least 3 characters long'
      }

      if (value.length > 100) {
        return 'Name must be at most 100 characters long'
      }

      if (!/^[a-zA-Z ]*$/.test(value)) {
        return 'Name must contain only letters'
      }

      return ''
    case FormFields.Age:
      if (!value.length) {
        return 'Age is required'
      }

      if (isNaN(Number(value)) || Number(value) < 1) {
        return 'Enter a valid age'
      }

      if (value.length > 3) {
        return 'Age must be at most 3 digits long'
      }

      if (!/^[0-9]*$/.test(value)) {
        return 'Age must contain only digits'
      }

      return ''
    case FormFields.Country:
      if (!value.length) {
        return 'Country is required'
      }

      if (!/^[a-zA-Z ]*$/.test(value)) {
        return 'Country must contain only letters'
      }

      return ''

    case FormFields.Package:
      if (!value.length) {
        return 'Package is required and remains disabled if you do not select a country and a valid age'
      }

      return ''
    default:
      return ''
  }
}

export const getPremium = (state: FormState) => {
  const country = state[FormFields.Country].value
  const packageType = state[FormFields.Package].value
  const age = state[FormFields.Age].value

  if (
    validate(country, FormFields.Country) ||
    validate(packageType, FormFields.Package) ||
    validate(age, FormFields.Age)
  ) {
    return ''
  }

  const ageInNumber = parseInt(age, 10)
  const countryRate = COUNTRY_DETAILS[country as CountryCodes].rate

  const basePremium = ageInNumber * 10 * countryRate

  // final premium is base premium + package comparative hikes in percentage
  return `${
    basePremium +
    basePremium * PACKAGES[packageType as Packages].comparativeHike.inDecimals
  }${COUNTRY_DETAILS[country as CountryCodes].currencyCode}`
}

export const getAdditionalPremiumPhrase = (
  age: string,
  countryCode: CountryCodes,
  packageName: Packages
) => {
  if (
    validate(countryCode, FormFields.Country) ||
    validate(packageName, FormFields.Package) ||
    validate(age, FormFields.Age) ||
    !PACKAGES[packageName].comparativeHike.inDecimals
  ) {
    return ''
  }

  const ageInNumber = parseInt(age, 10)
  const countryRate = COUNTRY_DETAILS[countryCode].rate

  const basePremium = ageInNumber * 10 * countryRate

  // final premium is base premium + package comparative hikes in percentage
  return `(+${basePremium * PACKAGES[packageName].comparativeHike.inDecimals}${
    COUNTRY_DETAILS[countryCode].currencyCode
  }, ${PACKAGES[packageName].comparativeHike.inPercentage}%)`
}
