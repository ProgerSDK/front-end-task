import React from 'react'
import * as ROUTES from '../../../constants/routes'
import * as Yup from 'yup'
import Auth, { FormValues } from '../Auth'

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required')
})

const handleSubmit = (values: FormValues): void => {
  alert(JSON.stringify(values))
}

const Register = () => {
  return (
    <Auth
      title="Sign Up"
      handleSubmit={handleSubmit}
      validationSchema={SignupSchema}
      linkTo={ROUTES.SIGN_IN}
      linkMessage="Already have an account? Sign in"
    />
  )
}

export default Register
