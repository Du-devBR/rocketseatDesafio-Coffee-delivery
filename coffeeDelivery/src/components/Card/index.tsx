import { IProducts } from "../../assets/mock/products";
import { Cart } from "../Cart";
import { Counter } from "../Counter";
import { ContainerCard, ContainerPrice, FooterCard, HeaderCard, MainCard, TagName, TagsProduct } from "./style";

export function Card({picture, name, price, description, types}: IProducts){
  return(
    <ContainerCard>
      <HeaderCard>
        <img src={picture} alt="" />
        <TagsProduct>
          {
            types.map((type, idx) => (
              <TagName key={idx}>
                <span>{type}</span>
              </TagName>
            ))
          }
        </TagsProduct>
      </HeaderCard>
      <MainCard>
        <h2>{name}</h2>
        <p>{description}</p>
      </MainCard>
      <FooterCard>
        <ContainerPrice>
          <span>R$</span>
          <span>{price.toFixed(2)}</span>
        </ContainerPrice>
        <Counter />
        <Cart color="purple"/>
      </FooterCard>
    </ContainerCard>
  )
}
