import { Cart } from "../Cart";
import { ContainerCard, FooterCard, HeaderCard, MainCard } from "./style";
import img from '../../assets/img/imgProducts/Type=Americano.png'
export function Card(){
  return(
    <ContainerCard>
      <HeaderCard>
        <img src={img} alt="" />
        <span>tradicional</span>
      </HeaderCard>
      <MainCard>
        <h2>Expresso tradicional</h2>
        <p>O tradicional café feito com água quente e grãos moídos</p>
      </MainCard>
      <FooterCard>
        <span>R$ 9,90</span>
        <Cart color="purple"/>
      </FooterCard>
    </ContainerCard>
  )
}
