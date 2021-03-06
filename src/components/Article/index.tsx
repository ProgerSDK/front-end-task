import React from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { connect, ConnectedProps } from 'react-redux'
import { RootState } from '../../typings'
import Article from './Article'
import withAuthorization from '../../hocs/withAuthorization'
import ROUTES from '../../constants/routes'

interface Props extends PropsFromRedux, RouteComponentProps<{ id: string }> {}
interface State {
  articleId: number
}

class ArticleContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { articleId: Number(this.props.match.params.id) }
  }

  onGoBack = () => {
    this.props.history.goBack()
  }

  render() {
    if (this.props.isLoaded && this.props.articles) {
      return (
        <Article
          article={this.props.articles[this.state.articleId]}
          onGoBack={this.onGoBack}
        />
      )
    } else {
      this.props.history.push(ROUTES.HOMEPAGE)
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

const condition = (authUser: firebase.User | null) => !authUser

export default withAuthorization(
  condition,
  ROUTES.SIGN_IN
)(withRouter(connector(ArticleContainer)))
