import React from 'react'
import Layout from '../Layout'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { Article } from '../../typings'
import Preloader from '../common/Preloader'
import GridItem from './GridItem'
import Tooltip from '@material-ui/core/Tooltip'
import Fab from '@material-ui/core/Fab'
import RefreshIcon from '@material-ui/icons/Refresh'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fixed: {
      position: 'fixed',
      bottom: theme.spacing(4),
      right: theme.spacing(4)
    }
  })
)

interface Props {
  articles: Array<Article> | null
  isLoaded: boolean
  error: null | string
  isAuth: boolean
  onRefreshArticles: () => void
}

const Homepage: React.FC<Props> = ({
  isLoaded,
  articles,
  error,
  isAuth,
  onRefreshArticles
}) => {
  const classes = useStyles()

  return (
    <Layout>
      <Grid container spacing={3} direction="column" alignItems="stretch">
        {error && <GridItem>{error}</GridItem>}

        {!isLoaded && <Preloader />}

        {articles &&
          articles.map((item: Article, index: number) => (
            <GridItem
              key={item.title}
              link={`/article/${index}`}
              isAuth={isAuth}
            >
              {item.title}
            </GridItem>
          ))}
      </Grid>
      <Tooltip title="Refresh" aria-label="refresh">
        <Fab
          color="primary"
          className={classes.fixed}
          onClick={onRefreshArticles}
        >
          <RefreshIcon />
        </Fab>
      </Tooltip>
    </Layout>
  )
}

export default Homepage
