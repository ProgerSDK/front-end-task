import React from 'react'
import Layout from '../layout'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import { Article } from '../../redux/articles-reducer'
import Preloader from '../common/preloader'
import GridItem from './GridItem'
import Tooltip from '@material-ui/core/Tooltip'
import Fab from '@material-ui/core/Fab'
import RefreshIcon from '@material-ui/icons/Refresh'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grid: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3)
    },
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
  onRefreshArticles: () => void
}

const Homepage: React.FC<Props> = ({
  isLoaded,
  articles,
  error,
  onRefreshArticles
}) => {
  const classes = useStyles()

  return (
    <Layout>
      <Grid
        container
        spacing={3}
        direction="column"
        alignItems="stretch"
        className={classes.grid}
      >
        {error && <GridItem>{error}</GridItem>}

        {!isLoaded && <Preloader />}

        {articles &&
          articles.map((item: Article, index: number) => (
            <GridItem key={item.title} link={`/article/${index}`}>
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
