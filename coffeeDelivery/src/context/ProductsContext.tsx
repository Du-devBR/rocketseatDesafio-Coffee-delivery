import { ReactNode, createContext, useReducer } from "react"
import { IProduct, productsReducer } from "../reducer/products/reducer"
import { addProductToCart, removeProductToCart, testeAction } from "../reducer/products/action"

interface ProductsContextType {
  products: IProduct[];
  countItens: number;
  // quant: number
  handleAddProductToCart: (data: IProduct) => void;
  handleRemoveProductToCart: (id: number) => void
  teste: (data: IProduct) => void
}
export const ProductsContext = createContext({} as ProductsContextType )

interface ProductsContextProviderProps {
  children: ReactNode
}

export function ProductsContextProvider({children}: ProductsContextProviderProps){

  const [productState, dispatch] = useReducer(productsReducer, {
    products: [],
    countItens: 0,
    // quant: 0
  })

  const {products, countItens} = productState

  function handleAddProductToCart(data: IProduct){
    dispatch(addProductToCart(data))
  }

  function handleRemoveProductToCart(id: number){
    dispatch(removeProductToCart(id))
  }

  function teste(teste: IProduct){
    dispatch(testeAction(teste))
  }
  return(
    <ProductsContext.Provider
      value={{products, countItens, handleAddProductToCart, handleRemoveProductToCart, teste}}
    >
      {children}
    </ProductsContext.Provider>
  )
}
