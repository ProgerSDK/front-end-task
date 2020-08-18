import React, { useState } from 'react'
import * as ROUTES from '../../../constants/routes'
import * as Yup from 'yup'
import Auth, { FormValues } from '../Auth'
import { signIn } from '../../../redux/auth-reducer'
import { RootState } from '../../../redux/store'
import { connect, ConnectedProps } from 'react-redux'
import Snackbar from '@material-ui/core/Snackbar'
import { FormikHelpers } from 'formik'
import MuiAlert from '@material-ui/lab/Alert'

const SigninSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required')
})

interface Props extends PropsFromRedux {}

const Login: React.FC<Props> = ({ signIn, ...props }) => {
  const [open, setOpen] = useState(false)
  const [severity, setSeverity] = useState('' as 'success' | 'error')
  const [message, setMessage] = useState('')

  const handleSubmit = async (
    values: FormValues,
    formikHelpers: FormikHelpers<FormValues>
  ): Promise<void> => {
    let result = await signIn(values.email, values.password)
    if (result.success) {
      setMessage('Logged in success.')
      setSeverity('success')
      formikHelpers.resetForm()
    } else {
      setMessage(result.errorMessage)
      setSeverity('error')
    }
    setOpen(true)
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
      <Auth
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
          severity={severity}
          onClose={handleClose}
        >
          {message}
        </MuiAlert>
      </Snackbar>
    </>
  )
}

let mapState = (state: RootState) => {
  return {
    isAuth: state.auth.isAuth
  }
}

const connector = connect(mapState, { signIn })

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(Login)
