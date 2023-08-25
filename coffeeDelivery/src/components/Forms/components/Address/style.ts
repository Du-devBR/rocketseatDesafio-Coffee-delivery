import { styled } from "styled-components";

export const ContainerAddress = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 2.5rem;
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
  flex-wrap: wrap
`

export const ZipCode = styled.div`
  max-width: 40%;
`

export const Street = styled.div`
  max-width: 100%;
`

export const ContainerComplement = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 1rem;
`

export const Complement = styled.div`
  width: calc(60% - 0.5rem);
`

export const Number = styled.div`
  width: calc(40% + 0.5rem);
`

export const ContainerComplementAddress = styled.div`
  width: 100%;
  display: flex;
  /* justify-content: space-between; */
  gap: 1rem;
`

export const Region = styled.div`
  width: calc(40% + 1rem);
`

export const City = styled.div`
  width: calc(50% - 1rem);
`

export const StateCode = styled.div`
  width: 10%;
`

export const StyledInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: none;
  border-radius: 0.25rem;
  font-weight: 400;
  font-size: ${props => props.theme.font_roboto["Text S"]};
  color: ${props => props.theme["base-text"]};
  background: ${props => props.theme["base-input"]};
  border: 1px solid ${props => props.theme["base-button"]};
  outline: none;
  transition: 0.5s;

  &::placeholder{
    color: ${props => props.theme["base-label"]};
  }

  &:focus{
    border: 1px solid ${props => props.theme.yellow};
    transition: 0.5s;
  }
`
