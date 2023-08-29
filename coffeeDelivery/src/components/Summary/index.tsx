import { useContext} from "react";
import { Order } from "./components/Order";
import { ButtonSubmitOrder, OrderDelivery, PriceOrderConatiner, SummaryContainer, TotalItems, TotalOrder } from "./style";
import { ProductsContext } from "../../context/ProductsContext";

interface IPropsSummary {
  onDispatch: () => void
}

export function Summary({onDispatch} : IPropsSummary){

  const {products, somePriceOrders, handleRemoveProductToCart, handleQuantityItemsRemove, handleQuantityItemsAdd, FormatPriceValue} = useContext(ProductsContext)

  const orderDelivery = 3.50
  const totalPrice = (somePriceOrders + orderDelivery)

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
      <PriceOrderConatiner>
        <TotalItems>
          <span>Total de itens</span>
          <span>{`R$ ${FormatPriceValue(somePriceOrders)}`}</span>
        </TotalItems>
        <OrderDelivery>
          <span>Entrega</span>
          <span>{`R$ ${FormatPriceValue(orderDelivery)}`}</span>
        </OrderDelivery>
        <TotalOrder>
          <span>Total</span>
          <span>{`R$ ${FormatPriceValue(totalPrice)}`}</span>
        </TotalOrder>
        <ButtonSubmitOrder onClick={onDispatch}>
          Confirmar Pedido
        </ButtonSubmitOrder>
      </PriceOrderConatiner>
    </SummaryContainer>
  )
}
