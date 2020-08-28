import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextField from '@material-ui/core/TextField'

interface Props {
  name: string
  label?: string
  variant?: string
  fullWidth?: boolean
  required?: boolean
  margin?: string
  type?: string
  autoComplete?: string
  error?: boolean
}

const FormikField: React.FC<Props> = ({ name, ...props }) => {
  return (
    <>
      <Field
        name={name}
        as={TextField}
        helperText={<ErrorMessage name={name} />}
        {...props}
      ></Field>
    </>
  )
}

export default FormikField
