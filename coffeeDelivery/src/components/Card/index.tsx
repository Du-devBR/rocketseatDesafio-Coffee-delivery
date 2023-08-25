import { useContext, useState } from "react";
import { IProducts } from "../../assets/mock/products";
import { Cart } from "../Cart";
import { Counter } from "../Counter";
import { ContainerCard, ContainerPrice, FooterCard, HeaderCard, MainCard, TagName, TagsProduct } from "./style";
import { ProductsContext } from "../../context/ProductsContext";


export function Card({id, picture, name, price, description, types}: IProducts){
  const {handleAddProductToCart, FormatPriceValue} = useContext(ProductsContext)

  const [quant, setQuant] = useState(1)

  function addProductToCart(){
    const productData = {
      product: {
        id,
        picture,
        name,
        price,
      },
      quant,
    };
    handleAddProductToCart(productData)
    setQuant(1)
  }

  return(
    <ContainerCard isActive={quant > 1}>
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
          <span>{`${FormatPriceValue(price)}`}</span>
        </ContainerPrice>
        <Counter
          onQuantItem={quant}
          onAddItem={() => setQuant(quant + 1)}
          onRemoveItem={() => setQuant(quant - 1)}
        />
        <Cart color="purple" onAddCart={addProductToCart} isActive={quant > 1}/>
      </FooterCard>
    </ContainerCard>
  )
}
