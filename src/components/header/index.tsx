import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import LoginMenu from './LoginMenu'
import { Link } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'
import { RootState } from '../../redux/store'
import { connect, ConnectedProps } from 'react-redux'
import LogoutMenu from './LogoutMenu'
import { signOut } from '../../redux/auth-reducer'

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

interface Props extends PropsFromRedux {}

const Header: React.FC<Props> = ({ isAuth, username, signOut, ...props }) => {
  const classes = useStyles()

  const doSignOut = () => {
    let response = signOut()
    console.log(response)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to={ROUTES.HOMEPAGE}>NY Times</Link>
          </Typography>
          {!isAuth && <LoginMenu />}
          {isAuth && <LogoutMenu username={username} doSignOut={doSignOut} />}
        </Toolbar>
      </AppBar>
    </div>
  )
}

let mapState = (state: RootState) => {
  return {
    isAuth: state.auth.isAuth,
    username: state.auth.username
  }
}

const connector = connect(mapState, { signOut })

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(Header)
