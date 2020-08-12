import React from 'react'
import './App.css'
import Homepage from './components/homepage'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Switch, Route } from 'react-router-dom'
import Article from './components/article'

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
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route exact path="/article/:id">
          <Article />
        </Route>
      </Switch>
    </div>
  )
}

export default App
