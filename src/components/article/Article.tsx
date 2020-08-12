import React from 'react'
import Layout from '../layout'
import { Article as ArticleType } from '../../redux/articles-reducer'

interface Props {
  article: ArticleType
}

const Article: React.FC<Props> = (props) => {
  return <Layout>{props.article.title}</Layout>
}

export default Article
