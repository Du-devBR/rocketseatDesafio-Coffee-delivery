import { useContext } from "react"
import { productsDb } from "../../assets/mock/products"
import { Card } from "../../components/Card"
import { ProductsContext } from "../../context/ProductsContext"
import { ContainerHome, ContainerProducts } from "./style"

export function Home(){
  const {products} = useContext(ProductsContext)

  return(
    <ContainerHome>
      <h1>Nossos cafés</h1>
      <ContainerProducts>
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
      </ContainerProducts>
    </ContainerHome>
  )

}
