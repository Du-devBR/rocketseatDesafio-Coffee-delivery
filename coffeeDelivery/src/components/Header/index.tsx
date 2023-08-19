import { HeaderContainer, NavContainer } from "./style";
import logo from '../../assets/img/logo.png'
import { Location } from "./components/Location";
import { Cart } from "../Cart";

export function Header(){
  return(
    <HeaderContainer>
      <img src={logo} alt="Logotipo da marca coffee delivery representada por um copo de cafe cor roxa e um foguete dentro do copo." />
      <NavContainer>
        <Location />
        <Cart color="yellow" />
      </NavContainer>
    </HeaderContainer>
  )
}
