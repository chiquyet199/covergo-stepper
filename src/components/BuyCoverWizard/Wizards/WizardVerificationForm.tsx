import React, { useReducer } from 'react'
import Button from 'src/components/Button/Button'
import { COUNTRY_DETAILS, PACKAGES } from '../constants'
import {
  CountryCodes,
  FormAction,
  FormFields,
  FormState,
  FormValue,
  Packages,
  VerificationForm,
} from '../types'
import { getPremium, validate } from '../helpers'

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
    case 'GET_INPUT':
      return {
        ...state,
        [action.name]: {
          ...state[action.name],
          value: action.value,
          error: action.error || '',
          isDirty: action.isDirty || false,
        },
      }
    default:
      return state
  }
}

const WizardVerificationForm: React.FC<Props> = ({ onBack, onSubmit }) => {
  const [state, dispatch] = useReducer(reducer, initialFormState)
  const premium = getPremium(state)

  // Update the respective fields on on change
  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target

    // Dispatch is responsible for updating the right field
    dispatch({
      type: 'GET_INPUT',
      name: name as FormFields,
      value,
      error: validate(value, name as FormFields),
    })
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    dispatch({
      type: 'GET_INPUT',
      name: name as FormFields,
      value,
      error: validate(value, name as FormFields),
      isDirty: true,
    })
  }

  // Check if the form has any errors
  const updateAndFindAllErrors = () => {
    const errors: Record<FormFields, string> = {} as Record<FormFields, string>

    Object.keys(state).forEach((field) => {
      const formField = field as FormFields
      const value = state[formField].value
      const error = validate(value, formField)

      if (error) {
        errors[formField] = error

        dispatch({
          type: 'GET_INPUT',
          name: formField,
          value: value,
          error: validate(value, formField),
          isDirty: true,
        })
      }
    })

    return errors
  }

  // Submit the form
  const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()

    const errors = updateAndFindAllErrors()

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
  }

  return (
    <div>
      <h1>Tell us about yourself</h1>

      <form>
        {/* Name */}
        <div className="form-group">
          <label htmlFor="wizard-form-name">Name</label>
          <input
            type="text"
            name={FormFields.Name}
            className="form-control"
            id="wizard-form-name"
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
              />
              <label htmlFor={`wizard-form-package-${packageName}`}>
                {PACKAGES[packageName as Packages].name}
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

        <p>
          Your premium is: {premium}
          {state[FormFields.Country].value}
        </p>

        <div className="form-group">
          <Button onClick={onBack}>Back</Button>

          <Button onClick={handleSubmit}>Next</Button>
        </div>
      </form>
    </div>
  )
}

export default WizardVerificationForm
