import { ReactNode, createContext, useReducer, useState } from "react"
import { IProduct, productsReducer } from "../reducer/products/reducer"
import { addProductToCart, addQuantityItems, removeProductToCart, removeQuantityItems } from "../reducer/products/action"

interface ProductsContextType {
  products: IProduct[];
  countItens: number;
  somePriceOrders: number
  handlePriceTotal: () => void
  handleAddProductToCart: (data: IProduct) => void;
  handleRemoveProductToCart: (id: number) => void
  handleQuantityItemsRemove: (id: number) => void
  handleQuantityItemsAdd: (id: number) => void
  FormatPriceValue: (price: number) => void
}
export const ProductsContext = createContext({} as ProductsContextType )

interface ProductsContextProviderProps {
  children: ReactNode
}

export function ProductsContextProvider({children}: ProductsContextProviderProps){

  const [somePriceOrders, setSomePriceOrders] = useState(0)

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

  function handlePriceTotal() {
    const priceTotal = products.reduce((total, product) => {
      return total + product.quant * product.product.price
    }, 0)

    setSomePriceOrders(priceTotal)
  }

  function FormatPriceValue(price: number){
    const priceToFormat = price;
    const priceFormatter = new Intl.NumberFormat('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })

    return priceFormatter.format(priceToFormat)
  }
  return(
    <ProductsContext.Provider
      value={{products, countItens, somePriceOrders, handlePriceTotal, handleAddProductToCart, handleRemoveProductToCart, handleQuantityItemsRemove, handleQuantityItemsAdd, FormatPriceValue}}
    >
      {children}
    </ProductsContext.Provider>
  )
}
