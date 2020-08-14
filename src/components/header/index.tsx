import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import LoginMenu from './LoginMenu'
import { Link } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    }
  })
)

const Header = () => {
  const classes = useStyles()

  return (
    <div className={classes.root} >
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to={ROUTES.HOMEPAGE}>NY Times</Link>
          </Typography>
          <LoginMenu />
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
