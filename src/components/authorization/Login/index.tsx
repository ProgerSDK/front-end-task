import React, { useState } from 'react'
import * as ROUTES from '../../../constants/routes'
import * as Yup from 'yup'
import AuthForm, { FormValues } from '../AuthForm'
import { RootState } from '../../../redux/store'
import { connect, ConnectedProps } from 'react-redux'
import Snackbar from '@material-ui/core/Snackbar'
import { FormikHelpers } from 'formik'
import MuiAlert from '@material-ui/lab/Alert'
import { signIn } from '../../../utils/auth'
import { withRouter, RouteComponentProps } from 'react-router-dom'

const SigninSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required')
})

interface Props extends PropsFromRedux, RouteComponentProps {}

const Login: React.FC<Props> = ({ history, isAuth, ...props }) => {
  const [open, setOpen] = useState(false)
  const [severity, setSeverity] = useState('' as 'success' | 'error')
  const [message, setMessage] = useState('')

  const handleSubmit = async (
    values: FormValues,
    formikHelpers: FormikHelpers<FormValues>
  ): Promise<void> => {
    let result = await signIn(values.email, values.password)
    if (result.success) {
      setMessage('Logged in success. You will be redirected to the main page.')
      setSeverity('success')
      formikHelpers.resetForm()
      setTimeout(() => history.push(ROUTES.HOMEPAGE), 3000)
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

const connector = connect(mapState, {})

type PropsFromRedux = ConnectedProps<typeof connector>

export default withRouter(connector(Login))
