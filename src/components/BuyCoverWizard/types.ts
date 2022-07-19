export enum FormFields {
  Name = 'name',
  Age = 'age',
  Country = 'country',
  Package = 'package',
}

export enum CountryCodes {
  HK = 'HK',
  US = 'US',
  AU = 'AU',
}

export enum Packages {
  Standard = 'Standard',
  Safe = 'Safe',
  SuperSafe = 'Super Safe',
}

export enum FormActionTypes {
  SET_INPUT = 'SET_INPUT',
}

export interface FormValue {
  name?: FormFields
  value: string
  error: string
  isDirty: boolean
}

export interface FormState {
  [FormFields.Name]: FormValue
  [FormFields.Age]: FormValue
  [FormFields.Country]: FormValue
  [FormFields.Package]: FormValue
}

export interface VerificationForm {
  [FormFields.Name]: string
  [FormFields.Age]: string
  [FormFields.Country]: string
  [FormFields.Package]: string
}

export interface FormFieldState {
  type: string
  name: FormFields
  value: string
  error?: string
  isDirty?: boolean
}

export interface FormAction {
  type: `${FormActionTypes}`
  payload: Partial<FormState>
}
