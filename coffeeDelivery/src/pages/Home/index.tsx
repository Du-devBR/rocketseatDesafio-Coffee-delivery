import { products } from "../../assets/mock/products"
import { Card } from "../../components/Card"
import { ContainerHome } from "./style"

export function Home(){
  return(
    <ContainerHome>
      <h1>Home</h1>
    {/* {
      products.map((product) => (
        <div>
          <h1>{product.name}</h1>
          <img src={product.picture} alt="" />
        </div>
      ))
    } */}
    <Card />
    </ContainerHome>
  )

}
