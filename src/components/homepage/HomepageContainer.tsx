import React from 'react'
import Homepage from './'
import { connect } from 'react-redux'
import { RootState } from '../../redux/store'
import { getTopStories } from '../../redux/articles-reducer'

interface Props {
  getTopStories: any
}

class HomepageContainer extends React.Component<Props> {
  componentDidMount() {
    this.props.getTopStories()
  }

  render() {
    return <Homepage />
  }
}

let mapStateToProps = (state: RootState) => {
  return {}
}

export default connect(mapStateToProps, { getTopStories })(HomepageContainer)
