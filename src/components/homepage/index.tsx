import React from 'react'
import Layout from '../layout'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import { Article } from '../../redux/articles-reducer'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    paper: {
      padding: theme.spacing(2)
      // color: theme.palette.text.secondary
    },
    grid: {
      paddingTop: theme.spacing(3)
    }
  })
)

interface Props {
  articles: Array<Article> | null
  isLoaded: boolean
}

const Homepage: React.FC<Props> = ({ isLoaded, articles }) => {
  const classes = useStyles()

  return (
    <Layout>
      <div className={classes.root}>
        <Container maxWidth="md">
          <Grid
            container
            spacing={3}
            direction="column"
            alignItems="stretch"
            className={classes.grid}
          >
            {isLoaded &&
              articles &&
              articles.map((item: any) => (
                <ArticleLink key={item.title} title={item.title} />
              ))}
          </Grid>
        </Container>
      </div>
    </Layout>
  )
}

interface PropsArticleLink {
  title: string
}

const ArticleLink: React.FC<PropsArticleLink> = ({ title }) => {
  const classes = useStyles()

  return (
    <>
      <Grid item>
        <Paper className={classes.paper} elevation={3}>
          {title}
        </Paper>
      </Grid>
    </>
  )
}

export default Homepage
