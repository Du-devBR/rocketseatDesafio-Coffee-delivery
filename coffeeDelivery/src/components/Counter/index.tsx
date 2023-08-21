import { ContainerCounter } from "./style";

interface IHandleProductToCart {
  onQuantItem: number
  onAddItem?: () => void
  onRemoveItem?: () => void
  onRemoveCart?:() => void
}

export function Counter({ onAddItem, onRemoveItem, onQuantItem}: IHandleProductToCart){
  const handleButtonRemove = onRemoveItem

  return(

    <ContainerCounter>
      <button onClick={handleButtonRemove} disabled={onQuantItem <= 1}></button>
      <span>{onQuantItem}</span>
      <button onClick={onAddItem}></button>
    </ContainerCounter>
  )
}
