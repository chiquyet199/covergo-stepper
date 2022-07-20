import { validate, getPremium, getAdditionalPremiumPhrase } from './helpers'
import { CountryCodes, FormFields, FormState, Packages } from './types'

const state: FormState = {
  [FormFields.Name]: {
    value: '',
    error: '',
    isDirty: false,
  },
  [FormFields.Age]: {
    value: '',
    error: '',
    isDirty: false,
  },
  [FormFields.Country]: {
    value: '',
    error: '',
    isDirty: false,
  },
  [FormFields.Package]: {
    value: '',
    error: '',
    isDirty: false,
  },
}

describe('BuyCoverWizard helpers', () => {
  test('validate', () => {
    /* Validate the form fields */
    expect(validate('', FormFields.Name)).toBe('Name is required')
    expect(validate('a', FormFields.Name)).toBe(
      'Name must be at least 3 characters long'
    )
    expect(validate('a'.repeat(101), FormFields.Name)).toBe(
      'Name must be at most 100 characters long'
    )
    expect(validate('a+b', FormFields.Name)).toBe(
      'Name must contain only letters'
    )

    expect(validate('', FormFields.Age)).toBe('Age is required')
    expect(validate('a', FormFields.Age)).toBe('Enter a valid age')
    expect(validate('1111', FormFields.Age)).toBe(
      'Age must be at most 3 digits long'
    )
    expect(validate('a+b', FormFields.Age)).toBe('Enter a valid age')

    expect(validate('', FormFields.Country)).toBe('Country is required')
    expect(validate('++', FormFields.Country)).toBe(
      'Country must contain only letters'
    )

    expect(validate('', FormFields.Package)).toBe(
      'Package is required and remains disabled if you do not select a country and a valid age'
    )
  })

  test('getPremium', () => {
    /* Get the premium */
    expect(getPremium(state)).toBe('')

    state[FormFields.Country].value = 'HK'
    state[FormFields.Package].value = 'Standard'
    state[FormFields.Age].value = '20'

    expect(getPremium(state)).toBe('200HKD')
  })

  test('getAdditionalPremiumPhrase', () => {
    /* Get the additional premium phrase */
    expect(
      getAdditionalPremiumPhrase('', CountryCodes.AU, Packages.Standard)
    ).toBe('')

    // For standard package, the additional premium phrase is ''
    expect(
      getAdditionalPremiumPhrase('20', CountryCodes.AU, Packages.Standard)
    ).toBe('')

    // For safe package, the additional premium phrase is '(+300AUD, 50%)'
    expect(
      getAdditionalPremiumPhrase('20', CountryCodes.AU, Packages.Safe)
    ).toBe('(+300AUD, 50%)')
  })
})
