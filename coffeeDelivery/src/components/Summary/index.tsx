import { useContext} from "react";
import { Order } from "./components/Order";
import { SummaryContainer } from "./style";
import { ProductsContext } from "../../context/ProductsContext";

export function Summary(){

  const {products, somePriceOrders, handleRemoveProductToCart, handleQuantityItemsRemove, handleQuantityItemsAdd} = useContext(ProductsContext)

  const orderDelivery = 3.50
  const totalPrice = (somePriceOrders + orderDelivery).toFixed(2)

  function removeProductToCart(id: number | undefined){

    if(id !== undefined){
      handleRemoveProductToCart(id)
    }
  }

  function removeQauntityItems(id: number | undefined){

    if(id !== undefined){
      handleQuantityItemsRemove(id)
    }
  }

  function addQauntityItems(id: number | undefined){

    if(id !== undefined){
      handleQuantityItemsAdd(id)
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
            onRemoveQuantItems = {() => removeQauntityItems(order.product.id)}
            onAddQuantItems = {() => addQauntityItems(order.product.id)}
          />
        ))
      }
      <div>
        <div>
          <span>Total de itens</span>
          <span>{`R$ ${somePriceOrders.toFixed(2)}`}</span>
        </div>
        <div>
          <span>Total de itens</span>
          <span>{`R$ ${orderDelivery}`}</span>
        </div>
        <div>
          <span>Total</span>
          <span>{`R$ ${totalPrice}`}</span>
        </div>
        <button>Confirmar Pedido</button>
      </div>
    </SummaryContainer>
  )
}
