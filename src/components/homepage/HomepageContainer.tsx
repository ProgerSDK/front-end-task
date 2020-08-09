import React from 'react'
import Homepage from './'
import { connect, ConnectedProps } from 'react-redux'
import { RootState } from '../../redux/store'
import { getTopStories } from '../../redux/articles-reducer'

interface Props extends PropsFromRedux {}

class HomepageContainer extends React.Component<Props> {
  componentDidMount() {
    if (!this.props.isLoaded) {
      this.props.getTopStories()
    }
  }

  render() {
    return (
      <Homepage isLoaded={this.props.isLoaded} articles={this.props.articles} />
    )
  }
}

let mapState = (state: RootState) => {
  return {
    isLoaded: state.articles.isLoaded,
    articles: state.articles.items
  }
}

const connector = connect(mapState, { getTopStories })

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(HomepageContainer)
