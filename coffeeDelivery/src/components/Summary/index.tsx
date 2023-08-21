import { useContext } from "react";
import { Order } from "./components/Order";
import { SummaryContainer } from "./style";
import { ProductsContext } from "../../context/ProductsContext";

export function Summary(){

  const {products, } = useContext(ProductsContext)

  console.log(products)
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
          />
        ))
      }
    </SummaryContainer>
  )
}
