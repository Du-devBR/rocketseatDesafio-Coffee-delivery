import { useContext, useEffect } from "react";
import { Counter } from "../../../Counter";
import { ActionOrder, ButtonRemoveOrder, InfoOrder, OrderContainer } from "./style";
import { ProductsContext } from "../../../../context/ProductsContext";
import { Trash } from "phosphor-react";

interface IOrder {
  id?: number;
  picture: string | undefined;
  name: string | undefined;
  price: number
  onQuant: number;
  onRemoveCart: () => void
  onRemoveQuantItems: () => void
  onAddQuantItems: () => void
}

export function Order({picture, name, onQuant, price, onRemoveCart, onRemoveQuantItems, onAddQuantItems}: IOrder){

  const {handlePriceTotal, FormatPriceValue} = useContext(ProductsContext)
  const totalOrder = (price * onQuant);

  useEffect(() => {
    handlePriceTotal()
  }, [onQuant, handlePriceTotal])

  return(
    <OrderContainer>
      <img src={picture} alt="" />
      <InfoOrder>
        <h2>{name}</h2>
        <ActionOrder>
          <Counter
            onQuantItem={onQuant}
            onRemoveQuantItems={onRemoveQuantItems}
            onAddQuantItems={onAddQuantItems}
          />
          <ButtonRemoveOrder
            onClick={onRemoveCart}
            >
              <Trash className="trash" size={16} />
              Remover
          </ButtonRemoveOrder>
        </ActionOrder>
      </InfoOrder>
      <span>{`R$${FormatPriceValue(totalOrder)}`}</span>
    </OrderContainer>
  )
}
