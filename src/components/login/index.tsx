import React from 'react'
import Layout from '../layout'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikField from '../common/FormikField'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(5, 3, 3),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center'
    },
    form: {
      width: '100%',
      marginTop: theme.spacing(1)
    },
    submit: {
      margin: theme.spacing(3, 0, 2)
    }
  })
)

interface FormValues {
  email: string
  password: string
}

const initialValues: FormValues = {
  email: '',
  password: ''
}

const SigninSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required')
})

const Login = () => {
  const classes = useStyles()

  const handleSubmit = (values: FormValues): void => {
    alert(JSON.stringify(values))
  }

  return (
    <Layout maxWidth="xs">
      <Paper elevation={3} className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={SigninSchema}
        >
          {({ errors, touched }) => {
            return (
              <Form className={classes.form}>
                <FormikField
                  name="email"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  required
                  margin="normal"
                  autoComplete="email"
                  error={!!(errors.email && touched.email)}
                />
                <FormikField
                  name="password"
                  label="Password"
                  variant="outlined"
                  fullWidth
                  required
                  margin="normal"
                  type="password"
                  autoComplete="current-password"
                  error={!!(errors.password && touched.password)}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Sign in
                </Button>
                <Link to={ROUTES.SIGN_UP}>Don't have an account? Sign Up</Link>
              </Form>
            )
          }}
        </Formik>
      </Paper>
    </Layout>
  )
}

export default Login
