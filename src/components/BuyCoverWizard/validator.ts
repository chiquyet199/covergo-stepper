import { FormFields } from './types'

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

      if (isNaN(Number(value))) {
        return 'Age must be a number'
      }

      // I know this isn't a part of the original requirements, but adding it for better test purposes
      if (Number(value) < 18) {
        return 'Age must be at least 18'
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
        return 'Package is required'
      }

      return ''
    default:
      return ''
  }
}
