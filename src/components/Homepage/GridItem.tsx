import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import Button from '@material-ui/core/Button'
import DialogContentText from '@material-ui/core/DialogContentText'
import * as ROUTES from '../../constants/routes'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(2)
    },
    link: {
      '&:hover': {
        cursor: 'pointer'
      }
    }
  })
)

interface Props extends RouteComponentProps {
  children?: React.ReactNode
  link?: string
  isAuth?: boolean
}

const GridItem: React.FC<Props> = ({
  children,
  link,
  history,
  isAuth,
  ...props
}) => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const handleClick = () => {
    if (link) {
      if (isAuth) {
        history.push(link)
      } else {
        setOpen(true)
      }
    }
  }

  const handleCloseDialog = () => {
    setOpen(false)
  }

  const handleAgree = () => {
    setOpen(false)
    if (link) {
      history.push(ROUTES.SIGN_IN)
    }
  }

  return (
    <>
      <Grid item>
        <Paper
          className={`${classes.paper} ${link ? classes.link : null}`}
          onClick={handleClick}
          elevation={3}
        >
          {children}
        </Paper>
      </Grid>
      <Dialog
        open={open}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {'Do you want to sign in?'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            To view information about the article, you need to log in.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAgree} color="primary" autoFocus>
            Sign in
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default withRouter(GridItem)
