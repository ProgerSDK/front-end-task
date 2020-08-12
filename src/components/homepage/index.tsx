import React from 'react'
import Homepage from './Homepage'
import { connect, ConnectedProps } from 'react-redux'
import { RootState } from '../../redux/store'
import { getTopStories, refreshArticles } from '../../redux/articles-reducer'

interface Props extends PropsFromRedux {}

class HomepageContainer extends React.Component<Props> {
  componentDidMount() {
    if (!this.props.isLoaded) {
      this.props.getTopStories()
    }
  }

  onRefreshArticles = () => {
    this.props.refreshArticles()
  }

  render() {
    return (
      <Homepage
        isLoaded={this.props.isLoaded}
        articles={this.props.articles}
        error={this.props.error}
        onRefreshArticles={this.onRefreshArticles}
      />
    )
  }
}

let mapState = (state: RootState) => {
  return {
    isLoaded: state.articles.isLoaded,
    articles: state.articles.items,
    error: state.articles.error
  }
}

const connector = connect(mapState, { getTopStories, refreshArticles })

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(HomepageContainer)
