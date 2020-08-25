import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { Link } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(2)
    }
  })
)

interface Props {
  children?: React.ReactNode
  link?: string
}

const GridItem: React.FC<Props> = ({ children, link }) => {
  const classes = useStyles()

  if (!link) {
    return (
      <>
        <Grid item>
          <Paper className={classes.paper} elevation={3}>
            {children}
          </Paper>
        </Grid>
      </>
    )
  } else {
    return (
      <>
        <Grid item>
          <Link to={link}>
            <Paper className={classes.paper} elevation={3}>
              {children}
            </Paper>
          </Link>
        </Grid>
      </>
    )
  }
}

export default GridItem
