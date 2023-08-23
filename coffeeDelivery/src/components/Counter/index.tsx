import { ContainerCounter } from "./style";

interface IHandleProductToCart {
  onQuantItem: number
  onAddItem?: () => void
  onRemoveItem?: () => void
  onRemoveQuantItems?:() => void
  onAddQuantItems?:() => void
}

export function Counter({ onAddItem, onRemoveItem, onQuantItem, onRemoveQuantItems, onAddQuantItems}: IHandleProductToCart){
  const handleButtonRemove = onRemoveItem || onRemoveQuantItems
  const handleButtonAdd = onAddItem || onAddQuantItems

  return(

    <ContainerCounter>
      <button onClick={handleButtonRemove} disabled={onQuantItem <= 1}></button>
      <span>{onQuantItem}</span>
      <button onClick={handleButtonAdd}></button>
    </ContainerCounter>
  )
}
