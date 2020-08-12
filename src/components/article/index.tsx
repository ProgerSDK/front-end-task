import React from 'react'
import Layout from '../layout'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { connect, ConnectedProps } from 'react-redux'
import { RootState } from '../../redux/store'

interface Props extends PropsFromRedux, RouteComponentProps<{ id: string }> {}
interface State {
  articleId: string
}

class ArticleContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { articleId: this.props.match.params.id }
  }

  render() {
    if (this.props.isLoaded) {
      return <Layout>Article {this.state.articleId}</Layout>
    } else {
      this.props.history.push('/')
      return null
    }
  }
}

let mapState = (state: RootState) => {
  return {
    isLoaded: state.articles.isLoaded,
    articles: state.articles.items
  }
}

const connector = connect(mapState, {})

type PropsFromRedux = ConnectedProps<typeof connector>

export default withRouter(connector(ArticleContainer))
