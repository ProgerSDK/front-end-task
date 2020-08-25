import React from 'react'
import Layout from '../Layout'
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
import Tooltip from '@material-ui/core/Tooltip'
import Fab from '@material-ui/core/Fab'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    byline: {
      marginBottom: theme.spacing(2)
    },
    chips: {
      display: 'flex',
      '& > *': {
        marginRight: theme.spacing(0.5),
        marginBottom: theme.spacing(2)
      }
    },
    fixed: {
      position: 'fixed',
      top: theme.spacing(10),
      left: theme.spacing(4)
    }
  })
)

interface Props {
  article: ArticleType
  onGoBack: () => void
}

const Article: React.FC<Props> = ({ article, onGoBack, ...props }) => {
  const classes = useStyles()

  return (
    <Layout>
      <Tooltip title="Go back" aria-label="go-back">
        <Fab color="primary" className={classes.fixed} onClick={onGoBack}>
          <ArrowBackIcon />
        </Fab>
      </Tooltip>
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
          <Button
            color="default"
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Layout>
  )
}

export default Article
