
import { productsDb } from "../../assets/mock/products"
import { Card } from "../../components/Card"
import imagemBanner from '../../assets/img/banner.png'
import { ContainerBanner, ContainerHome, ContainerImage, ContainerInfoBanner, ContainerIntro, ContainerProducts, IconIntro, Intro, ListProducts } from "./style"
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react"

export function Home(){

  return(
    <ContainerHome>
      <ContainerBanner>
        <ContainerInfoBanner>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
          <ContainerIntro>
            <Intro>
              <IconIntro iconTheme={"cart"}>
                <ShoppingCart size={16} weight="fill" />
              </IconIntro>
              <p>Compra simples e segura</p>
            </Intro>
            <Intro>
              <IconIntro iconTheme={"package"}>
                <Package size={16} weight="fill" />
              </IconIntro>
              <p>Embalagem mantém o café intacto</p>
            </Intro>
            <Intro>
              <IconIntro iconTheme={"timer"}>
                <Timer size={16} weight="fill" />
              </IconIntro>
              <p>Entrega rápida e rastreada</p>
            </Intro>
            <Intro>
              <IconIntro iconTheme={"coffe"}>
                <Coffee size={16} weight="fill" />
              </IconIntro>
              <p>O café chega fresquinho até você</p>
            </Intro>
          </ContainerIntro>
        </ContainerInfoBanner>
        <ContainerImage>
          <img src={imagemBanner} alt="" />
        </ContainerImage>
      </ContainerBanner>
      <ContainerProducts>
      <h2>Nossos cafés</h2>
        <ListProducts>
          {
            productsDb.map((product) => (
              <Card
                key={product.id}
                id={product.id}
                picture= {product.picture}
                types= {product.types}
                name= {product.name}
                description= {product.description}
                price= {product.price}
              />
            ))
          }
        </ListProducts>
      </ContainerProducts>
    </ContainerHome>
  )

}
