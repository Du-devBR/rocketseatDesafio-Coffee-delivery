import { MapPinLine } from "phosphor-react";
import { ContainerAddress, ContainerComplement, Street, ZipCode, FormContainer, StyledInput, Number, Complement, ContainerComplementAddress, Region, City, StateCode, HeaderContainer, SubtitleContainer, IconLocation } from "./style";
import { useState } from "react";



export interface IDataUser {
  id: string;
  zipCode: string;
  street: string;
  number: string;
  complement: string;
  region: string;
  city: string;
  state: string;
}
interface IAddressProps {
  dataAddress: (data: IDataUser) => void
}

export function Address({dataAddress}: IAddressProps){

  const [dataPaymentAddress, setDataPaymentAddress] = useState<IDataUser>({
    id: String(new Date().getTime()),
    zipCode: '',
    street: '',
    number: '',
    complement: '',
    region: '',
    city: '',
    state: '',
  })

  function handleAddressChange(event: React.ChangeEvent<HTMLInputElement>, field: keyof IDataUser){
    const { value } = event.target;
    const updatedAddress = { ...dataPaymentAddress, [field]: value };
    setDataPaymentAddress(updatedAddress); // Atualiza o estado local

    dataAddress(updatedAddress);
  }

  return(
    <ContainerAddress>
      <HeaderContainer>
        <IconLocation>
          <MapPinLine size={22} />
        </IconLocation>
        <SubtitleContainer>
          <strong>Endereço de Entrega</strong>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </SubtitleContainer>
      </HeaderContainer>
      <FormContainer>
        <ZipCode>
          <StyledInput
            type="text"
            placeholder="Cep"
            value={dataPaymentAddress.zipCode}
            onChange={(event) => handleAddressChange(event, "zipCode")}
          />
        </ZipCode>
        <Street>
          <StyledInput
            type="text"
            placeholder="Rua"
            value={dataPaymentAddress.street}
            onChange={(event) => handleAddressChange(event, "street")}
          />
        </Street>
        <ContainerComplement>
          <Number>
            <StyledInput
              type="text"
              placeholder="Numero"
              value={dataPaymentAddress.number}
              onChange={(event) => handleAddressChange(event, "number")}
            />
          </Number>
          <Complement>
            <StyledInput
              type="text"
              placeholder="Complemento"
              value={dataPaymentAddress.complement}
              onChange={(event) => handleAddressChange(event, "complement")}
            />
          </Complement>
        </ContainerComplement>
        <ContainerComplementAddress>
          <Region>
            <StyledInput
              type="text"
              placeholder="Bairro"
              value={dataPaymentAddress.region}
              onChange={(event) => handleAddressChange(event, "region")}
            />
          </Region>
          <City>
            <StyledInput
              type="text"
              placeholder="Cidade"
              value={dataPaymentAddress.city}
              onChange={(event) => handleAddressChange(event, "city")}
            />
          </City>
          <StateCode>
            <StyledInput
              type="text"
              placeholder="Uf"
              value={dataPaymentAddress.state}
              onChange={(event) => handleAddressChange(event, "state")}
            />
          </StateCode>
        </ContainerComplementAddress>
      </FormContainer>
    </ContainerAddress>
  )
}
