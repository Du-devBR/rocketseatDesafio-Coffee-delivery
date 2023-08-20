import { HeaderContainer, NavContainer } from "./style";
import logo from '../../assets/img/logo.png'
import { Location } from "./components/Location";
import { Cart } from "../Cart";
import { Link } from "react-router-dom";

export function Header(){
  return(
    <HeaderContainer>
      <img src={logo} alt="Logotipo da marca coffee delivery representada por um copo de cafe cor roxa e um foguete dentro do copo." />
      <NavContainer>
        <Location />
        <Link to={"/checkout"}>
        <Cart color="yellow" />
        </Link>
      </NavContainer>
    </HeaderContainer>
  )
}
