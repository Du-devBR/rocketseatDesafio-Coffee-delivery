import { CartContaienr, Count, HeaderContainer, NavContainer } from "./style";
import logo from '../../assets/img/logo.png'
import { Location } from "./components/Location";
import { Cart } from "../Cart";
import { Link } from "react-router-dom";
import { ProductsContext } from "../../context/ProductsContext";
import { useContext } from "react";

export function Header(){

  const {countItens} = useContext(ProductsContext)
  return(
    <HeaderContainer>
      <Link to={"/"}>
        <img src={logo} alt="Logotipo da marca coffee delivery representada por um copo de cafe cor roxa e um foguete dentro do copo." />
      </Link>

      <NavContainer>
        <Location />
        <Link to={"/checkout"}>
          <CartContaienr>
            <Count >
              <p>{countItens}</p>
            </Count>
            <Cart color="yellow"/>
          </CartContaienr>
        </Link>
      </NavContainer>
    </HeaderContainer>
  )
}
