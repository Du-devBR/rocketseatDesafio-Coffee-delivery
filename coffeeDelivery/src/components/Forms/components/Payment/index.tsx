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

  const [dataForPayment, setDataForPayment] = useState(null)

  function handleTeste(event: any) {

    dataPaymentSelect(event.target.value)
    setDataForPayment(event.target.value)
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
        <SelectPayment htmlFor="1" className={dataForPayment === 'creditCard' ? 'selected' : ''}>
          <input type="radio" value={"creditCard"} id="1" onChange={handleTeste} checked={dataForPayment === 'creditCard'} />
          Cartão de credito
        </SelectPayment>
        <SelectPayment htmlFor="2" className={dataForPayment === 'debitCard' ? 'selected' : ''}>
          <input type="radio" value={"debitCard"} id="2" onChange={handleTeste} checked={dataForPayment === 'debitCard'} />
          Cartão de Debito
        </SelectPayment>
        <SelectPayment htmlFor="3" className={dataForPayment === 'money' ? 'selected' : ''}>
          <input type="radio" value={"money"} id="3" onChange={handleTeste} checked={dataForPayment === 'money'} />
          Dinheiro
        </SelectPayment>
      </PaymentForm>
    </PaymentContainer>
  )
}
