import { MapPinLine } from "phosphor-react";
import { ContainerAddress, ContainerComplement, Street, ZipCode, FormContainer, StyledInput, Number, Complement, ContainerComplementAddress, Region, City, StateCode, HeaderContainer, SubtitleContainer, IconLocation } from "./style";
import { useEffect, useState } from "react";

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
  onResetForm: {}
  dataAddress: (data: IDataUser) => void
}

export function Address({dataAddress, onResetForm}: IAddressProps){

  const [errorCep, setErrorCep] = useState(false)

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

  useEffect(() => {
    setDataPaymentAddress({
      ...dataPaymentAddress,
      zipCode: '',
      street: '',
      number: '',
      complement: '',
      region: '',
      city: '',
      state: '',
      })

  }, [onResetForm])

  function handleAddressChange(event: React.ChangeEvent<HTMLInputElement>, field: keyof IDataUser){
    const { value } = event.target;
    const updatedAddress = { ...dataPaymentAddress, [field]: value };
    setDataPaymentAddress(updatedAddress)

    dataAddress(updatedAddress);
  }

  async function handleApiCep(cep: string){
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    const data = await response.json()

    if(!data.erro){
      setDataPaymentAddress({
       ...dataPaymentAddress,
       street: data.logradouro,
       region: data.bairro,
       state: data.uf,
       city: data.localidade,
      })
    }else{
      setErrorCep(true)
    }
  }

  function formatCep(cep: string){
    return cep.replace(/^(\d{5})(\d{3})$/, "$1-$2")
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
            maxLength={8}
            value={formatCep(dataPaymentAddress.zipCode)}
            onChange={(event) => handleAddressChange(event, "zipCode")}
            onBlur={(event) => dataPaymentAddress.zipCode.length >= 8 ? handleApiCep((event.target as HTMLInputElement).value) : ''}
            onFocus={() => setErrorCep(false)}
            className={errorCep ? 'error' : ''}
          />
          {
            errorCep ? (
              <span>Cep não encontrado</span>
            ): ''
          }
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
              maxLength={2}
              value={dataPaymentAddress.state}
              onChange={(event) => handleAddressChange(event, "state")}
            />
          </StateCode>
        </ContainerComplementAddress>
      </FormContainer>
    </ContainerAddress>
  )
}
