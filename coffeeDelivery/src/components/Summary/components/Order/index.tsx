import { Counter } from "../../../Counter";
import { ActionOrder, InfoOrder, OrderContainer } from "./style";
import { IProduct } from "../../../../reducer/products/reducer";

interface IOrder {
  id?: number;
  picture: string | undefined;
  name: string | undefined;
  price: number | undefined
  onQuant: number 
}

export function Order({picture,name,onQuant,price}: IOrder){
  return(
    <OrderContainer>
      <img src={picture} alt="" />
      <InfoOrder>
        <h2>{name}</h2>
        <ActionOrder>
          <Counter  onQuantItem={onQuant}/>
          <button>Remover</button>
        </ActionOrder>
      </InfoOrder>
      <span>{price}</span>
    </OrderContainer>
  )
}
