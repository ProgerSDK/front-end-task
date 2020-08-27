import React from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { ConnectedProps, connect } from 'react-redux'
import { RootState } from '../redux/store'
import { light, dark } from '../styles/theme'

const withThemeProvider = <BaseProps extends {}>(
  Component: React.ComponentType<BaseProps>
) => {
  interface Props extends PropsFromRedux {}

  const WithThemeProvider: React.FC<Props> = ({ theme, ...restProps }) => {
    const appliedTheme = createMuiTheme(theme === 'light' ? light : dark)

    return (
      <ThemeProvider theme={appliedTheme}>
        <Component {...(restProps as BaseProps)} />
      </ThemeProvider>
    )
  }

  let mapState = (state: RootState) => {
    return {
      theme: state.app.theme
    }
  }

  const connector = connect(mapState, {})

  type PropsFromRedux = ConnectedProps<typeof connector>

  return connector(WithThemeProvider)
}

export default withThemeProvider
