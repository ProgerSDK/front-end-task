import React from 'react'
import Layout from '../layout'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { Formik, Form } from 'formik'
import FormikField from '../common/FormikField'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import * as ROUTES from '../../constants/routes'
import * as Yup from 'yup'

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

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required')
})

const Register = () => {
  const classes = useStyles()

  const handleSubmit = (values: FormValues): void => {
    alert(JSON.stringify(values))
  }

  return (
    <Layout maxWidth="xs">
      <Paper elevation={3} className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={SignupSchema}
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
                  Sign up
                </Button>
                <Link to={ROUTES.SIGN_IN}>
                  Already have an account? Sign in
                </Link>
              </Form>
            )
          }}
        </Formik>
      </Paper>
    </Layout>
  )
}

export default Register
