import { ShoppingCart } from "phosphor-react";
import { ContainerCart, ShoppingCartStyle } from "./style";

export function Cart(){
  return(
    <ContainerCart >
      <ShoppingCartStyle>
        <ShoppingCart size={22} weight="fill"  />
      </ShoppingCartStyle>
    </ContainerCart>

  )
}
