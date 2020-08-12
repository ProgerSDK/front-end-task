import React from 'react'
import Layout from '../layout'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import { Article } from '../../redux/articles-reducer'
import Preloader from '../common/preloader'
import GridItem from './GridItem'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grid: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3)
    }
  })
)

interface Props {
  articles: Array<Article> | null
  isLoaded: boolean
  error: null | string
}

const Homepage: React.FC<Props> = ({ isLoaded, articles, error }) => {
  const classes = useStyles()

  return (
    <Layout>
      <Container maxWidth="md">
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
      </Container>
    </Layout>
  )
}

export default Homepage
