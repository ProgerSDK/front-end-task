import React from 'react'
import './App.css'
import Homepage from './components/Homepage'
import { Theme, withStyles } from '@material-ui/core/styles'
import { Switch, Route } from 'react-router-dom'
import Article from './components/Article'
import Register from './components/authorization/Register'
import Login from './components/authorization/Login'
import * as ROUTES from './constants/routes'
import { firebaseAPI } from './api'
import { RootState } from './redux/store'
import { connect, ConnectedProps } from 'react-redux'
import { verifyAuth } from './redux/auth-reducer'

const styles = (theme: Theme) => ({
  background: {
    backgroundColor: theme.palette.background.default
  }
})

interface Props extends PropsFromRedux {
  classes: {
    background: string
  }
}

class App extends React.Component<Props> {
  private listener: any

  componentDidMount() {
    this.listener = firebaseAPI.onAuthStateChanged((authUser) => {
      this.props.verifyAuth(authUser)
    })
  }

  componentWillUnmount() {
    this.listener()
  }

  render() {
    const { classes } = this.props

    return (
      <div className={`app ${classes.background}`}>
        <Switch>
          <Route exact path={ROUTES.HOMEPAGE}>
            <Homepage />
          </Route>
          <Route exact path={ROUTES.ARTICLE}>
            <Article />
          </Route>
          <Route exact path={ROUTES.SIGN_UP}>
            <Register />
          </Route>
          <Route exact path={ROUTES.SIGN_IN}>
            <Login />
          </Route>
        </Switch>
      </div>
    )
  }
}

let mapState = (state: RootState) => ({})

const connector = connect(mapState, { verifyAuth })

type PropsFromRedux = ConnectedProps<typeof connector>

export default withStyles(styles)(connector(App))
