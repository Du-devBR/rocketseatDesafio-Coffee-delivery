import { useContext } from "react"
import { ProductsContext } from "../../context/ProductsContext"

export function Checkout(){

  const {products} = useContext(ProductsContext)

  return(
    <div>
      <h1>checkout</h1>
        {
          products.map(product => (
            <div>
              <p>{product.name}</p>
              <img src={product.picture} alt="" />
            </div>
          ))
        }
    </div>
  )
}
