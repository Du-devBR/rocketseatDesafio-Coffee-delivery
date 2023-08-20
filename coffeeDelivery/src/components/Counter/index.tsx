import { ContainerCounter } from "./style";

interface IHandleProductToCart {
  onQuantItem: number
  onAddItem?: () => void
  onRemoveItem?: () => void
  onRemoveCart?:() => void
}

export function Counter({ onRemoveCart, onAddItem, onRemoveItem, onQuantItem}: IHandleProductToCart){
  return(
    <ContainerCounter>
      <button onClick={onRemoveItem} disabled={onQuantItem <= 1}></button>
      <span>{onQuantItem}</span>
      <button onClick={onAddItem}></button>
    </ContainerCounter>
  )
}
