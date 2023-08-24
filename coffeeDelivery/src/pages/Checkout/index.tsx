
import { Forms } from "../../components/Forms"
import { Summary } from "../../components/Summary"
import { CheckoutContainer } from "./style"

export function Checkout(){

  return(
    <CheckoutContainer>
      <Forms />
      <Summary />
    </CheckoutContainer>
  )
}
