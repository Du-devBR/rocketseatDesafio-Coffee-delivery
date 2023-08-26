import { Address } from "./components/Address";
import { Payment } from "./components/Payment";
import { FormsContainer } from "./style";

export function Forms(){

  return(
    <FormsContainer>
      <Address />
      <Payment />
    </FormsContainer>
  )
}
