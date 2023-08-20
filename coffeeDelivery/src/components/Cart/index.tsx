import { ShoppingCart } from "phosphor-react";
import { ContainerCart, ShoppingCartStyle } from "./style";

interface ICartColorProps {
  color: "yellow" | "purple";
  onAddCart?: () => void
}

export function Cart({color, onAddCart}: ICartColorProps){
  return(
    <ContainerCart cartTheme={color} onClick={onAddCart}>
      <ShoppingCartStyle cartTheme={color} >
        <ShoppingCart size={22} weight="fill"  />
      </ShoppingCartStyle>
    </ContainerCart>

  )
}
