import { MapPin } from "phosphor-react";
import { ContainerLocation, MapPinStyle } from "./style";

export function Location(){
  return(
    <ContainerLocation>
      <MapPinStyle>
        <MapPin size={22} weight="fill" />
      </MapPinStyle>
      <span className="location">Porto Alegre, RS</span>
    </ContainerLocation>
  )
}
