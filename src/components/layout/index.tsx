import React from 'react'
import Header from '../header'
import Container from '@material-ui/core/Container'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paddings: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3)
    }
  })
)

interface Props {
  children?: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  const classes = useStyles()

  return (
    <div>
      <Header />
      <Container maxWidth="md" className={classes.paddings}>
        <>{children}</>
      </Container>
    </div>
  )
}

export default Layout
