import React, { useCallback, useEffect, useReducer } from 'react'
import Button from 'src/components/Button/Button'
import { COUNTRY_DETAILS, PACKAGES, WIZARD_FORM_STATE } from '../constants'
import {
  CountryCodes,
  FormAction,
  FormActionTypes,
  FormFields,
  FormState,
  FormValue,
  Packages,
  VerificationForm,
} from '../types'
import { getAdditionalPremiumPhrase, getPremium, validate } from '../helpers'

interface Props {
  onSubmit: (form: VerificationForm) => void
  onBack: () => void
}

const EMPTY_FORM_VALUE: FormValue = {
  value: '',
  error: '',
  isDirty: false,
}

const initialFormState: FormState = {
  [FormFields.Name]: EMPTY_FORM_VALUE,
  [FormFields.Age]: EMPTY_FORM_VALUE,
  [FormFields.Country]: EMPTY_FORM_VALUE,
  [FormFields.Package]: EMPTY_FORM_VALUE,
}

const reducer = (state: FormState, action: FormAction) => {
  switch (action.type) {
    case FormActionTypes.SET_INPUT:
      return {
        ...state,
        ...action.payload,
      }
    default:
      return state
  }
}

const WizardVerificationForm: React.FC<Props> = ({ onBack, onSubmit }) => {
  const defaultFormState = localStorage.getItem(WIZARD_FORM_STATE)
    ? (JSON.parse(
        localStorage.getItem(WIZARD_FORM_STATE) as string
      ) as FormState)
    : initialFormState
  const [state, dispatch] = useReducer(reducer, defaultFormState)
  const premium = getPremium(state)
  const packageSelectionDisabled =
    !!validate(state[FormFields.Country].value, FormFields.Country) ||
    !!validate(state[FormFields.Age].value, FormFields.Age)

  // Update the respective fields on on change
  const handleChange = useCallback(
    (
      e:
        | React.ChangeEvent<HTMLInputElement>
        | React.ChangeEvent<HTMLSelectElement>
    ) => {
      const { name, value } = e.target
      const formField = name as FormFields

      // Dispatch is responsible for updating the right field
      dispatch({
        type: FormActionTypes.SET_INPUT,
        payload: {
          [formField]: {
            name,
            value,
            error: validate(value, formField),
          },
        },
      })
    },
    []
  )

  const handleBlur = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    const formField = name as FormFields

    dispatch({
      type: FormActionTypes.SET_INPUT,
      payload: {
        [formField]: {
          name,
          value,
          error: validate(value, formField),
          isDirty: true,
        },
      },
    })
  }, [])

  // Check if the form has any errors
  const updateAndFindAllErrors = useCallback((finalFormState: FormState) => {
    const errors = {} as Record<FormFields, string>
    const payload = {} as Record<FormFields, FormValue>

    Object.keys(finalFormState).forEach((field) => {
      const formField = field as FormFields
      const value = finalFormState[formField].value
      const error = validate(value, formField)

      if (error) {
        errors[formField] = error

        payload[formField] = {
          name: formField,
          value: value,
          error,
          isDirty: true,
        }
      }
    })

    dispatch({
      type: FormActionTypes.SET_INPUT,
      payload,
    })

    return errors
  }, [])

  // Submit the form
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = useCallback(
    (e) => {
      e.preventDefault()

      const errors = updateAndFindAllErrors(state)

      // Do not submit if there are errors
      if (Object.keys(errors).length) {
        return
      }

      const form: VerificationForm = {
        [FormFields.Name]: state[FormFields.Name].value,
        [FormFields.Age]: state[FormFields.Age].value,
        [FormFields.Country]: state[FormFields.Country].value,
        [FormFields.Package]: state[FormFields.Package].value,
      }

      onSubmit(form)
    },
    [onSubmit, state, updateAndFindAllErrors]
  )

  useEffect(() => {
    // Save the form state to local storage
    localStorage.setItem(WIZARD_FORM_STATE, JSON.stringify(state))
  }, [state])

  return (
    <div>
      <h1>Tell us about yourself</h1>

      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div className="form-group">
          <label htmlFor="wizard-form-name">Name</label>
          <input
            type="text"
            name={FormFields.Name}
            className="form-control"
            id="wizard-form-name"
            data-testid="wizard-form-name"
            value={state[FormFields.Name].value}
            onChange={handleChange}
            placeholder="Enter your name"
            onBlur={handleBlur}
          />
          {state[FormFields.Name].error && state[FormFields.Name].isDirty && (
            <small className="form-text text-danger">
              {state[FormFields.Name].error}
            </small>
          )}
        </div>

        {/* Age */}
        <div className="form-group">
          <label htmlFor="wizard-form-age">Age</label>
          <input
            type="number"
            name={FormFields.Age}
            className="form-control"
            id="wizard-form-age"
            data-testid="wizard-form-age"
            value={state[FormFields.Age].value}
            onChange={handleChange}
            placeholder="Enter your age"
            onBlur={handleBlur}
          />
          {state[FormFields.Age].error && state[FormFields.Age].isDirty && (
            <small className="form-text text-danger">
              {state[FormFields.Age].error}
            </small>
          )}
        </div>

        {/* Country */}
        <div className="form-group">
          <label htmlFor="wizard-form-country">Country</label>
          <select
            className="form-control"
            name={FormFields.Country}
            id="wizard-form-country"
            data-testid="wizard-form-country"
            value={state[FormFields.Country].value}
            onChange={handleChange}
          >
            <option value="" disabled hidden>
              Choose your country
            </option>
            {Object.keys(COUNTRY_DETAILS).map((country) => (
              <option key={country} value={country}>
                {COUNTRY_DETAILS[country as CountryCodes].countryName}
              </option>
            ))}
          </select>

          {state[FormFields.Country].error &&
            state[FormFields.Country].isDirty && (
              <small className="form-text text-danger">
                {state[FormFields.Country].error}
              </small>
            )}
        </div>

        {/* Packages */}
        <div className="form-group">
          {Object.keys(PACKAGES).map((packageName) => (
            <div className="form-package-option" key={packageName}>
              <input
                type="radio"
                id={`wizard-form-package-${packageName}`}
                name={FormFields.Package}
                value={packageName}
                onChange={handleChange}
                checked={state[FormFields.Package].value === packageName}
                disabled={packageSelectionDisabled}
                data-testid={`wizard-form-package-${packageName}`}
              />
              <label htmlFor={`wizard-form-package-${packageName}`}>
                {PACKAGES[packageName as Packages].name}
                {getAdditionalPremiumPhrase(
                  state[FormFields.Age].value,
                  state[FormFields.Country].value as CountryCodes,
                  packageName as Packages
                )}
              </label>
            </div>
          ))}

          {state[FormFields.Package].error &&
            state[FormFields.Package].isDirty && (
              <small className="form-text text-danger">
                {state[FormFields.Package].error}
              </small>
            )}
        </div>

        {!!premium && <p>Your premium is: {premium}</p>}

        <div className="form-group">
          <Button onClick={onBack}>Back</Button>

          <Button type="submit">Next</Button>
        </div>
      </form>
    </div>
  )
}

export default WizardVerificationForm
