import {ThemeProvider} from 'styled-components'
import { defaultThemes } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
export function App() {

  return (
    <ThemeProvider theme={defaultThemes}>
      <GlobalStyle />
    </ThemeProvider>
  )
}
