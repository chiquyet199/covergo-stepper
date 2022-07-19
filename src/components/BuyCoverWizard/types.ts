export enum FormFields {
  Name = 'name',
  Age = 'age',
  Country = 'country',
  Package = 'package',
}

export interface FormValue {
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

export interface FormAction {
  type: string
  name: FormFields
  value: string
  error?: string
  isDirty?: boolean
}