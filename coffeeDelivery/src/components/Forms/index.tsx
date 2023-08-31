
import { Address, IDataUser } from "./components/Address";
import { Payment } from "./components/Payment";
import { FormsContainer } from "./style";


interface IPropsData {
  onResetForm: {}
  onHandleDataAddress: (dataAddress: IDataUser) => void
  onHandleDataPayment: (paymentMethod: string) => void
}

export function Forms({onHandleDataAddress, onHandleDataPayment, onResetForm} : IPropsData){

  return(
    <FormsContainer>
      <Address
        dataAddress={onHandleDataAddress}
        onResetForm={onResetForm}
      />
      <Payment dataPaymentSelect={onHandleDataPayment}/>
    </FormsContainer>
  )
}
