import React from 'react'
import './App.css'
import Homepage from './components/homepage'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Switch, Route } from 'react-router-dom'
import Article from './components/article'
import Register from './components/authorization/Register'
import Login from './components/authorization/Login'
import * as ROUTES from './constants/routes'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    background: {
      backgroundColor: theme.palette.background.default
    }
  })
)

function App() {
  const classes = useStyles()

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

export default App
