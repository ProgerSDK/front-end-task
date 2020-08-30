import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import LoginMenu from './LoginMenu'
import { Link } from 'react-router-dom'
import ROUTES from '../../constants/routes'
import { RootState } from '../../typings'
import { connect, ConnectedProps } from 'react-redux'
import LogoutMenu from './LogoutMenu'
import { signOut } from '../../utils/auth'
import Tooltip from '@material-ui/core/Tooltip'
import IconButton from '@material-ui/core/IconButton'
import Brightness4Icon from '@material-ui/icons/Brightness4'
import Brightness7Icon from '@material-ui/icons/Brightness7'
import { toggleTheme } from '../../redux/app-reducer'

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

const Header: React.FC<Props> = ({
  isAuth,
  username,
  theme,
  toggleTheme,
  ...props
}) => {
  const classes = useStyles()

  const doSignOut = () => {
    let response = signOut()
    console.log(response)
  }

  const doToggleTheme = () => {
    toggleTheme()
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to={ROUTES.HOMEPAGE}>NY Times</Link>
          </Typography>
          <Tooltip
            title="Toggle light/dark theme"
            aria-label="toggle light/dark theme"
          >
            <IconButton
              aria-label="toggle light/dark theme"
              onClick={doToggleTheme}
              color="inherit"
            >
              {theme === 'light' && <Brightness4Icon />}
              {theme === 'dark' && <Brightness7Icon />}
            </IconButton>
          </Tooltip>

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
    username: state.auth.username,
    theme: state.app.theme
  }
}

const connector = connect(mapState, { toggleTheme })

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(Header)
