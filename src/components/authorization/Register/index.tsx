import React, { useState } from 'react'
import * as ROUTES from '../../../constants/routes'
import * as Yup from 'yup'
import Auth, { FormValues } from '../Auth'
import { connect, ConnectedProps } from 'react-redux'
import { RootState } from '../../../redux/store'
import { signUp } from '../../../redux/auth-reducer'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Required')
})

interface Props extends PropsFromRedux {}

const Register: React.FC<Props> = ({ signUp, ...props }) => {
  const [open, setOpen] = useState(false)
  const [severity, setSeverity] = useState('' as 'success' | 'error')
  const [message, setMessage] = useState('')

  const handleSubmit = async (
    values: FormValues,
    actions: any
  ): Promise<void> => {
    let result = await signUp(values.email, values.password)
    if (result.success) {
      setMessage('User account created successfully')
      setSeverity('success')
    } else {
      setMessage(result.errorMessage)
      setSeverity('error')
    }
    setOpen(true)
    actions.setSubmitting(false)
    actions.resetForm()
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

const connector = connect(mapState, { signUp })

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(Register)
