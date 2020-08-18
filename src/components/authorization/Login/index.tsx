import React from 'react'
import * as ROUTES from '../../../constants/routes'
import * as Yup from 'yup'
import Auth, { FormValues } from '../Auth'

const SigninSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required')
})

const handleSubmit = (values: FormValues): void => {
  alert(JSON.stringify(values))
}

const Login = () => {
  return (
    <Auth
      title="Sign In"
      handleSubmit={handleSubmit}
      validationSchema={SigninSchema}
      linkTo={ROUTES.SIGN_UP}
      linkMessage="Don't have an account? Sign Up"
    />
  )
}

export default Login
