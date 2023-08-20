import {ThemeProvider} from 'styled-components'
import { defaultThemes } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { ProductsContextProvider } from './context/ProductsContext'
export function App() {

  return (
    <ThemeProvider theme={defaultThemes}>
      <BrowserRouter>
       <ProductsContextProvider>
        <Router />
       </ProductsContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
