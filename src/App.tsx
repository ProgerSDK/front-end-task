import React from 'react'
import './App.css'
import Homepage from './components/homepage/HomepageContainer'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

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
      <Homepage />
    </div>
  )
}

export default App
