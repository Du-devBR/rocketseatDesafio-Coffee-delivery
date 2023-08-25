import { MapPinLine } from "phosphor-react";
import { ContainerAddress, ContainerComplement, Street, ZipCode, FormContainer, StyledInput, Number, Complement, ContainerComplementAddress, Region, City, StateCode } from "./style";

export function Address(){
  return(
    <ContainerAddress>
      <header>
        <MapPinLine  />
        <div>
          <strong>Endereço de Entrega</strong>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </header>
      <FormContainer>
        <ZipCode>
          <StyledInput type="text" placeholder="Cep" />
        </ZipCode>
        <Street>
          <StyledInput type="text" placeholder="Rua" />
        </Street>
        <ContainerComplement>
          <Number>
            <StyledInput type="text" placeholder="Numero" />
          </Number>
          <Complement>
            <StyledInput type="text" placeholder="Complemento" />
          </Complement>
        </ContainerComplement>
        <ContainerComplementAddress>
          <Region>
            <StyledInput type="text" placeholder="Bairro" />
          </Region>
          <City>
            <StyledInput type="text" placeholder="Cidade" />
          </City>
          <StateCode>
            <StyledInput type="text" placeholder="Uf" />
          </StateCode>
        </ContainerComplementAddress>
      </FormContainer>
    </ContainerAddress>
  )
}
