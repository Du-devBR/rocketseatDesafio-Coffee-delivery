import { useContext } from "react";
import { Order } from "./components/Order";
import { SummaryContainer } from "./style";
import { ProductsContext } from "../../context/ProductsContext";

export function Summary(){

  const {products, handleRemoveProductToCart} = useContext(ProductsContext)

  function removeProductToCart(id: number | undefined){

    if(id !== undefined){
      handleRemoveProductToCart(id)
    }
  }

  return(
    <SummaryContainer>
      {
        products.map(order => (
          <Order
            key={order.product.id}
            id={order.product.id}
            picture={order.product.picture}
            name={order.product.name}
            price={order.product.price}
            onQuant={order?.quant}
            onRemoveCart={() => removeProductToCart(order.product.id)}
          />
        ))
      }
    </SummaryContainer>
  )
}
