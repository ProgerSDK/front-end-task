import React from 'react'
import Header from '../header'
import Container from '@material-ui/core/Container'

interface Props {
  children?: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => (
  <div>
    <Header />
    <Container maxWidth="md">
      <>{children}</>
    </Container>
  </div>
)

export default Layout
