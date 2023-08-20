import { ReactNode, createContext, useReducer } from "react"
import { IProduct, productsReducer } from "../reducer/products/reducer"
import { addProductToCart } from "../reducer/products/action"

interface ProductsContextType {
  products: IProduct[];
  handleProductToCart: (data: IProduct) => void
}
export const ProductsContext = createContext({} as ProductsContextType )

interface ProductsContextProviderProps {
  children: ReactNode
}

export function ProductsContextProvider({children}: ProductsContextProviderProps){

  const [productState, dispatch] = useReducer(productsReducer, {
    products: []
  })

  const {products} = productState

  function handleProductToCart(data: IProduct){
    dispatch(addProductToCart(data))
  }
  return(
    <ProductsContext.Provider
      value={{products, handleProductToCart}}
    >
      {children}
    </ProductsContext.Provider>
  )
}
