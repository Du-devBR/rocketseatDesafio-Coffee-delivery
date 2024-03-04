import { MapPin } from "phosphor-react";
import { ContainerLocation, MapPinStyle } from "./style";

export function Location() {
  return (
    <ContainerLocation>
      <MapPinStyle>
        <MapPin size={22} weight="fill" />
      </MapPinStyle>
      <select id="city">
        <option>Escolher região</option>
        <option value="">Porto Alegre, RS</option>
        <option value="">São Paulo, SP</option>
        <option value="">Rio de Janeiro, RJ</option>
        <option value="">Belo Horizonte, MG</option>
      </select>
    </ContainerLocation>
  );
}
