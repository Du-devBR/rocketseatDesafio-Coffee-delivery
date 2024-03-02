import { MapPin } from "phosphor-react";
import { ContainerLocation, MapPinStyle } from "./style";

export function Location() {
  return (
    <ContainerLocation>
      <MapPinStyle>
        <MapPin size={22} weight="fill" />
      </MapPinStyle>
      <input list="city" placeholder="Escolher região" />
      <datalist id="city">
        <option value="Porto Alegre, RS" />
        <option value="São Paulo, SP" />
        <option value="Rio de Janeiro, RJ" />
        <option value="Belo Horizonte, MG" />
      </datalist>
    </ContainerLocation>
  );
}
