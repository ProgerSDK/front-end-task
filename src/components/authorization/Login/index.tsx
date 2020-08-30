import React, { useState } from 'react'
import ROUTES from '../../../constants/routes'
import * as Yup from 'yup'
import AuthForm, { FormValues } from '../AuthForm'
import Snackbar from '@material-ui/core/Snackbar'
import { FormikHelpers } from 'formik'
import MuiAlert from '@material-ui/lab/Alert'
import { signIn } from '../../../utils/auth'
import withAuthorization from '../../../hocs/withAuthorization'
import { AuthUser } from '../../../typings'

const SigninSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required')
})

const Login = () => {
  const [open, setOpen] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (
    values: FormValues,
    formikHelpers: FormikHelpers<FormValues>
  ): Promise<void> => {
    let result = await signIn(values.email, values.password)
    if (!result.success) {
      setMessage(result.errorMessage)
      setOpen(true)
    }
    formikHelpers.setSubmitting(false)
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
        title="Sign In"
        handleSubmit={handleSubmit}
        validationSchema={SigninSchema}
        linkTo={ROUTES.SIGN_UP}
        linkMessage="Don't have an account? Sign Up"
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

export default withAuthorization(condition)(Login)
