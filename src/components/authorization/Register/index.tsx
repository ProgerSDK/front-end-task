import React, { useState } from 'react'
import * as ROUTES from '../../../constants/routes'
import * as Yup from 'yup'
import AuthForm, { FormValues } from '../AuthForm'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
import { FormikHelpers } from 'formik'
import { signUp } from '../../../utils/auth'
import withAuthorization from '../../../hocs/withAuthorization'
import { AuthUser } from '../../../typings'

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Required')
})

const Register = () => {
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (
    values: FormValues,
    formikHelpers: FormikHelpers<FormValues>
  ): Promise<void> => {
    let result = await signUp(values.email, values.password)
    if (!result.success) {
      setMessage(result.errorMessage)
      setOpen(true)
    }
    formikHelpers.setSubmitting(false)
    formikHelpers.resetForm()
  }

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }

    setOpen(false)
  }

  return (
    <>
      <AuthForm
        title="Sign Up"
        handleSubmit={handleSubmit}
        validationSchema={SignupSchema}
        linkTo={ROUTES.SIGN_IN}
        linkMessage="Already have an account? Sign in"
      />
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          severity={'error'}
          onClose={handleClose}
        >
          {message}
        </MuiAlert>
      </Snackbar>
    </>
  )
}

const condition = (authUser: AuthUser) => !!authUser

export default withAuthorization(condition)(Register)
