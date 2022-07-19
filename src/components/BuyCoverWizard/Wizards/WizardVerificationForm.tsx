import React, { useReducer } from 'react'
import Button from 'src/components/Button/Button'

enum FormFields {
  Name = 'name',
  Age = 'age',
  Country = 'country',
  Package = 'package',
}

interface FormValue {
  value: string
  error: string
}

interface FormState {
  [FormFields.Name]: FormValue
  [FormFields.Age]: FormValue
  [FormFields.Country]: FormValue
  [FormFields.Package]: FormValue
}
interface VerificationForm {
  [FormFields.Name]: string
  [FormFields.Age]: string
  [FormFields.Country]: string
  [FormFields.Package]: string
}

interface FormAction {
  type: string
  name: FormFields
  value: string
  error?: string
}

interface Props {
  onSubmit: (form: VerificationForm) => void
  onBack: () => void
}

const EMPTY_FORM_VALUE: FormValue = {
  value: '',
  error: '',
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
        },
      }
    default:
      return state
  }
}

const WizardVerificationForm: React.FC<Props> = ({ onBack, onSubmit }) => {
  const [state, dispatch] = useReducer(reducer, initialFormState)

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
    })
  }

  // Submit the form
  const handleSubmit = () => {
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
          />
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
          />
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
            <option value="HK">Hong kong</option>
            <option value="US">USA</option>
            <option value="AU">Australia</option>
          </select>
        </div>

        {/* Packages */}
        <div className="form-group">
          <div className="form-package-option">
            <input
              type="radio"
              id="wizard-form-package-standard"
              name={FormFields.Package}
              value="1"
              onChange={handleChange}
              checked={state[FormFields.Package].value === '1'}
            />
            <label htmlFor="wizard-form-package-standard">Standard</label>
          </div>

          <div className="form-package-option">
            <input
              type="radio"
              id="wizard-form-package-safe"
              name={FormFields.Package}
              value="2"
              onChange={handleChange}
              checked={state[FormFields.Package].value === '2'}
            />
            <label htmlFor="wizard-form-package-safe">Safe</label>
          </div>

          <div className="form-package-option">
            <input
              type="radio"
              id="wizard-form-package-super-safe"
              name={FormFields.Package}
              value="3"
              onChange={handleChange}
              checked={state[FormFields.Package].value === '3'}
            />
            <label htmlFor="wizard-form-package-super-safe">Super Safe</label>
          </div>
        </div>

        <p>Your premium is: 500HKD</p>

        <div className="form-group">
          <Button onClick={onBack}>Back</Button>

          <Button onClick={handleSubmit}>Next</Button>
        </div>
      </form>
    </div>
  )
}

export default WizardVerificationForm
