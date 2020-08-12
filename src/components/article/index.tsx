import React from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { connect, ConnectedProps } from 'react-redux'
import { RootState } from '../../redux/store'
import Article from './Article'

interface Props extends PropsFromRedux, RouteComponentProps<{ id: string }> {}
interface State {
  articleId: number
}

class ArticleContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { articleId: Number(this.props.match.params.id) }
  }

  render() {
    if (this.props.isLoaded && this.props.articles) {
      return <Article article={this.props.articles[this.state.articleId]} />
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
