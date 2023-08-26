import { useState } from "react";
import { Address, IDataUser } from "./components/Address";
import { Payment } from "./components/Payment";
import { FormsContainer } from "./style";

interface IDataPayment extends IDataUser {
  payment: string
}

export function Forms(){

  const [dataPayment, setDataPayment] = useState<IDataPayment>({
    id: '',
    zipCode: '',
    street: '',
    number: '',
    complement: '',
    region: '',
    city: '',
    state: '',
    payment: '',
  });

  console.log(dataPayment)


  function handleDataAddress(dataAddress: IDataUser){
    setDataPayment((prevData) => ({ ...prevData, ...dataAddress }));
  }

  function handleDataPayment(paymentMethod: string){
    setDataPayment((prevData) => ({ ...prevData, payment: paymentMethod }));
  }

  return(
    <FormsContainer>
      <Address dataAddress={handleDataAddress}/>
      <Payment dataPaymentSelect={handleDataPayment}/>
    </FormsContainer>
  )
}
