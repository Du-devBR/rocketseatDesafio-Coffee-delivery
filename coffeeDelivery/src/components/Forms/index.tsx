
import { Address, IDataUser } from "./components/Address";
import { Payment } from "./components/Payment";
import { FormsContainer } from "./style";


interface IPropsData {
  onHandleDataAddress: (dataAddress: IDataUser) => void
  onHandleDataPayment: (paymentMethod: string) => void
}

export function Forms({onHandleDataAddress, onHandleDataPayment} : IPropsData){

  return(
    <FormsContainer>
      <Address dataAddress={onHandleDataAddress}/>
      <Payment dataPaymentSelect={onHandleDataPayment}/>
    </FormsContainer>
  )
}
