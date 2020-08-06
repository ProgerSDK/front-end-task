import React from 'react'
import Layout from '../layout'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(2)
      // color: theme.palette.text.secondary
    },
    grid: {
      paddingTop: theme.spacing(3)
    }
  })
)

export default function Homepage() {
  const classes = useStyles()

  return (
    <Layout>
      <div className={classes.root}>
        <Container maxWidth="md">
          <Grid
            container
            spacing={3}
            direction="column"
            alignItems="stretch"
            className={classes.grid}
          >
            <ArticleLink />
            <ArticleLink />
            <ArticleLink />
            <ArticleLink />
            <ArticleLink />
          </Grid>
        </Container>
      </div>
    </Layout>
  )
}

const ArticleLink = () => {
  const classes = useStyles()

  return (
    <>
      <Grid item>
        <Paper className={classes.paper} elevation={3}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          illum beatae quis illo fugiat ratione!
        </Paper>
      </Grid>
    </>
  )
}
