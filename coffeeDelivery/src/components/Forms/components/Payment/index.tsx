import { CurrencyDollar } from "phosphor-react";
import { IconDolar, PaymentContainer, PaymentForm, PaymentHeader, SelectPayment, SubtitleContainer } from "./style";
import { useState } from "react";

export interface IDataUser {
  payment: string;
}
interface IAddressProps {
  dataPaymentSelect: (paymentMethod: string) => void
}

export function Payment({dataPaymentSelect}: IAddressProps){

  const [teste, setTeste] = useState(null)

  function handleTeste(event) {

    dataPaymentSelect(event.target.value)
    setTeste(event.target.value)
  }


  return(
    <PaymentContainer>
      <PaymentHeader>
        <IconDolar>
          <CurrencyDollar size={22}/>
        </IconDolar>
        <SubtitleContainer>
          <strong>Pagamento</strong>
          <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
        </SubtitleContainer>
      </PaymentHeader>
      <PaymentForm>
        <SelectPayment htmlFor="1" className={teste === 'creditCard' ? 'selected' : ''}>
          <input type="radio" value={"creditCard"} id="1" onChange={handleTeste} checked={teste === 'creditCard'} />
          Cartão de credito
        </SelectPayment>
        <SelectPayment htmlFor="2" className={teste === 'debitCard' ? 'selected' : ''}>
          <input type="radio" value={"debitCard"} id="2" onChange={handleTeste} checked={teste === 'debitCard'} />
          Cartão de Debito
        </SelectPayment>
        <SelectPayment htmlFor="3" className={teste === 'money' ? 'selected' : ''}>
          <input type="radio" value={"money"} id="3" onChange={handleTeste} checked={teste === 'money'} />
          Dinheiro
        </SelectPayment>
      </PaymentForm>
    </PaymentContainer>
  )
}
