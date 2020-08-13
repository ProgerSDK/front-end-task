import React from 'react'
import Layout from '../layout'
import { Article as ArticleType } from '../../redux/articles-reducer'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'

import styles from './styles.module.css'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import Chip from '@material-ui/core/Chip'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3)
    },
    byline: {
      marginBottom: theme.spacing(2)
    },
    chips: {
      display: 'flex',
      '& > *': {
        marginRight: theme.spacing(0.5),
        marginBottom: theme.spacing(2)
      }
    }
  })
)

interface Props {
  article: ArticleType
}

const Article: React.FC<Props> = ({ article, ...props }) => {
  const classes = useStyles()

  return (
    <Layout>
      <div className={classes.root}>
        <Card>
          <CardMedia
            className={styles.media}
            image={article.multimedia[0].url}
            title={article.multimedia[0].caption}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {article.title}
            </Typography>
            <Typography
              className={classes.byline}
              variant="subtitle2"
              color="textSecondary"
              component="p"
            >
              {article.byline}
            </Typography>
            <div className={classes.chips}>
              <Chip label={article.section} />
              {article.subsection.length > 0 && (
                <Chip label={article.subsection} />
              )}
            </div>
            <Typography variant="body1" component="p">
              {article.abstract}
            </Typography>
          </CardContent>
          <Divider />
          <CardActions>
            <Button color="default">Learn More</Button>
          </CardActions>
        </Card>
      </div>
    </Layout>
  )
}

export default Article
