import { products } from "../../assets/mock/products"
import { Card } from "../../components/Card"
import { ContainerHome, ContainerProducts } from "./style"

export function Home(){
  return(
    <ContainerHome>
      <h1>Nossos cafés</h1>
      <ContainerProducts>
        {
          products.map((product) => (
            <Card
              key={product.id}
              picture= {product.picture}
              types= {product.types}
              name= {product.name}
              description= {product.description}
              price= {product.price}
            />
          ))
        }
      </ContainerProducts>
    </ContainerHome>
  )

}
