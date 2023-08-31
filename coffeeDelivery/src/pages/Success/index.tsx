import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { ContainerInfoSuccess, ContainerSuccess, IconStyle, ImageSuccess, Info, InfoAddress, InfoSuccess } from "./style";
import imageDelivery from '../../assets/img/imageDelivery.png'

export function Success(){
  return(
    <ContainerSuccess>
      <ContainerInfoSuccess>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
        <InfoSuccess>
          <Info>
            <IconStyle iconTheme="location">
              <MapPin size={16} weight="fill" />
            </IconStyle>
            <InfoAddress>
              <span>Entrega em <strong>Rua João Daniel Martinelli</strong>
                , 102 Farrapos - Porto Alegre, RS
              </span>
            </InfoAddress>
          </Info>
          <Info>
            <IconStyle iconTheme="timer">
              <Timer size={16} weight="fill" />
            </IconStyle>
            <InfoAddress>
              <span>Previsão de entrega</span>
              <strong>20 min - 30 min </strong>
            </InfoAddress>
          </Info>
          <Info>
            <IconStyle iconTheme="dollar">
              <CurrencyDollar size={16} weight="fill" />
            </IconStyle>
            <InfoAddress>
              <span>Pagamento na entrega</span>
              <strong>Cartão de Crédito</strong>
            </InfoAddress>
          </Info>
        </InfoSuccess>
      </ContainerInfoSuccess>
      <ImageSuccess>
        <img src={imageDelivery} alt="" />
      </ImageSuccess>
    </ContainerSuccess>
  )
}
