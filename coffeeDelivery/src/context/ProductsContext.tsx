import { ReactNode, createContext, useReducer } from "react"
import { IProduct, productsReducer } from "../reducer/products/reducer"
import { addProductToCart, removeProductToCart } from "../reducer/products/action"

interface ProductsContextType {
  products: IProduct[];
  countItens: number;
  handleAddProductToCart: (data: IProduct, itemQuantity: number) => void;
  handleRemoveProductToCart: (id: number) => void
}
export const ProductsContext = createContext({} as ProductsContextType )

interface ProductsContextProviderProps {
  children: ReactNode
}

export function ProductsContextProvider({children}: ProductsContextProviderProps){

  const [productState, dispatch] = useReducer(productsReducer, {
    products: [],
    countItens: 0,
    quant: 0
  })

  const {products, countItens} = productState

  function handleAddProductToCart(data: IProduct, quant: number){
    dispatch(addProductToCart(data, quant))
  }

  function handleRemoveProductToCart(id: number){
    dispatch(removeProductToCart(id))
  }
  return(
    <ProductsContext.Provider
      value={{products, countItens,  handleAddProductToCart, handleRemoveProductToCart}}
    >
      {children}
    </ProductsContext.Provider>
  )
}
