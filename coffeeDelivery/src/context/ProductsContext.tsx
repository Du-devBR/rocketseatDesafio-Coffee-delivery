import { ReactNode, createContext, useReducer } from "react"
import { IProduct, productsReducer } from "../reducer/products/reducer"
import { addProductToCart, addQuantityItems, removeProductToCart, removeQuantityItems } from "../reducer/products/action"

interface ProductsContextType {
  products: IProduct[];
  countItens: number;
  handleAddProductToCart: (data: IProduct) => void;
  handleRemoveProductToCart: (id: number) => void
  handleQuantityItemsRemove: (id: number) => void
  handleQuantityItemsAdd: (id: number) => void
}
export const ProductsContext = createContext({} as ProductsContextType )

interface ProductsContextProviderProps {
  children: ReactNode
}

export function ProductsContextProvider({children}: ProductsContextProviderProps){

  const [productState, dispatch] = useReducer(productsReducer, {
    products: [],
    countItens: 0,
  })

  const {products, countItens} = productState

  function handleAddProductToCart(data: IProduct){
    dispatch(addProductToCart(data))
  }

  function handleRemoveProductToCart(id: number){
    dispatch(removeProductToCart(id))
  }

  function handleQuantityItemsRemove(id: number){
    dispatch(removeQuantityItems(id))
  }

  function handleQuantityItemsAdd(id: number){
    dispatch(addQuantityItems(id))
  }
  return(
    <ProductsContext.Provider
      value={{products, countItens, handleAddProductToCart, handleRemoveProductToCart, handleQuantityItemsRemove, handleQuantityItemsAdd}}
    >
      {children}
    </ProductsContext.Provider>
  )
}
