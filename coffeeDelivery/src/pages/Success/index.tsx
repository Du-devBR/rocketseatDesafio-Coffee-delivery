import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { ContainerInfoSuccess, ContainerSuccess, IconStyle, ImageSuccess, Info, InfoAddress, InfoSuccess } from "./style";
import imageDelivery from '../../assets/img/imageDelivery.png'
import { useEffect, useState } from "react";
import { IDataPayment } from "../Checkout";

export function Success(){

  const [dataOrder, setDataOrder] = useState<IDataPayment>()

  useEffect(() => {
    const localStorageOrder = localStorage.getItem('order')
    if(localStorageOrder){
      const parsedOrder = JSON.parse(localStorageOrder)
      setDataOrder(parsedOrder)
    }
  }, [])

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
              <span>Entrega em <strong>{dataOrder?.street}</strong>
                , {dataOrder?.number} {dataOrder?.region} - {dataOrder?.city}, {dataOrder?.state}
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
              <strong>{dataOrder?.payment}</strong>
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
