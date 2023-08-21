import { Counter } from "../../../Counter";
import { ActionOrder, InfoOrder, OrderContainer } from "./style";

interface IOrder {
  id?: number;
  picture: string | undefined;
  name: string | undefined;
  price: number
  onQuant: number;
  onRemoveCart: () => void
}

export function Order({picture,name,onQuant,price, onRemoveCart}: IOrder){

  const totalOrder = (price * onQuant).toFixed(2);

  return(
    <OrderContainer>
      <img src={picture} alt="" />
      <InfoOrder>
        <h2>{name}</h2>
        <ActionOrder>
          <Counter
            onQuantItem={onQuant}
          />
          <button onClick={onRemoveCart}>Remover</button>
        </ActionOrder>
      </InfoOrder>
      <span>{totalOrder}</span>
    </OrderContainer>
  )
}
