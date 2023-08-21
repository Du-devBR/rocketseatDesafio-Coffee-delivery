import { ShoppingCart } from "phosphor-react";
import { ContainerCart, ShoppingCartStyle } from "./style";

interface ICartColorProps {
  color: "yellow" | "purple";
  onAddCart?: () => void;
  isActive?: boolean
}

export function Cart({color, onAddCart, isActive}: ICartColorProps){
  return(
    <ContainerCart cartTheme={color} onClick={onAddCart} isActive={isActive}>
      <ShoppingCartStyle cartTheme={color} >
        <ShoppingCart size={22} weight="fill"  />
      </ShoppingCartStyle>
    </ContainerCart>

  )
}
