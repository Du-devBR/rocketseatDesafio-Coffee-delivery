import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { ContainerInfoSuccess, ContainerSuccess, Info, InfoSuccess } from "./style";
import imageDelivery from '../../assets/img/imageDelivery.png'

export function Success(){
  return(
    <ContainerSuccess>
      <ContainerInfoSuccess>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
        <InfoSuccess>
          <Info>
            <span>
              <MapPin size={16} weight="fill" />
            </span>
            <div>
              <span>Entrega em Rua João Daniel Martinelli, 102</span>
              <span>Farrapos - Porto Alegre, RS</span>
            </div>
          </Info>
          <Info>
            <span>
              <Timer size={16} weight="fill" />
            </span>
            <div>
              <span>Previsão de entrega</span>
              <span>20 min - 30 min </span>
            </div>
          </Info>
          <Info>
            <span>
              <CurrencyDollar size={16} weight="fill" />
            </span>
            <div>
              <span>Pagamento na entrega</span>
              <span>Cartão de Crédito</span>
            </div>
          </Info>
        </InfoSuccess>
      </ContainerInfoSuccess>
      <div>
        <img src={imageDelivery} alt="" />
      </div>
    </ContainerSuccess>
  )
}
