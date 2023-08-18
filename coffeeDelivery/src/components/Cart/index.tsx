import { ShoppingCart } from "phosphor-react";
import { ContainerCart, ShoppingCartStyle } from "./style";

export function Cart(){
  return(
    <ContainerCart cartTheme="purple">
      <ShoppingCartStyle cartTheme="purple" >
        <ShoppingCart size={22} weight="fill"  />
      </ShoppingCartStyle>
    </ContainerCart>

  )
}
