import React from 'react'
import Layout from '../Layout'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(2),
      '&>:first-child': {
        marginBottom: theme.spacing(3)
      }
    }
  })
)

const Page404 = () => {
  const classes = useStyles()

  return (
    <Layout>
      <Paper className={classes.paper}>
        <Typography variant="h3">Page Not Found</Typography>
        <Typography variant="subtitle1">
          We couldn't find what you were looking for.
        </Typography>
      </Paper>
    </Layout>
  )
}

export default Page404
