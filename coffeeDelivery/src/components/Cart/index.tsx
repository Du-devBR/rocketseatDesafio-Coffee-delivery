import { ShoppingCart } from "phosphor-react";
import { ContainerCart, ShoppingCartStyle } from "./style";

interface ICartColorProps {
  color: "yellow" | "purple";
}

export function Cart({color}: ICartColorProps){
  return(
    <ContainerCart cartTheme={color}>
      <ShoppingCartStyle cartTheme={color} >
        <ShoppingCart size={22} weight="fill"  />
      </ShoppingCartStyle>
    </ContainerCart>

  )
}
