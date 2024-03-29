import { styled } from "styled-components";

export const ContainerAddress = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2rem;
  padding: 2.5rem;
  background: ${props => props.theme["base-card"]};
  border-radius: 0.375rem;
  margin-bottom: 0.75rem;
`

export const HeaderContainer = styled.header`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
`

export const IconLocation = styled.span`
  color: ${props => props.theme["yellow-dark"]};
`

export const SubtitleContainer = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    line-height: 130%;
    font-weight: 400;
    font-size: ${props => props.theme.font_roboto["Text M"]};
    color: ${props => props.theme["base-subtitle"]};
  }

  p {
    line-height: 130%;
    font-weight: 400;
    font-size: ${props => props.theme.font_roboto["Text S"]};
    color: ${props => props.theme["base-text"]};
  }
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
  gap: 1rem;

  span {
    margin-top: 0.5rem;
    font-size: ${props => props.theme.font_roboto["Text S"]};
    color: ${props => props.theme["error-border"]};
  }

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
  gap: 1rem;

  @media (max-width: 480px){
    flex-direction: column;
  }
`

export const Region = styled.div`
  width: calc(40% + 1rem);

  @media (max-width: 480px){
    width: 100%;
  }
`

export const City = styled.div`
  width: calc(45% - 1rem);
  @media (max-width: 480px){
    width: 100%;
  }
`

export const StateCode = styled.div`
  width: 15%;
  @media (max-width: 480px){
    width: 30%;
    align-self: flex-end;
  }
`

export const StyledInput = styled.input`
  width: 100%;
  padding: 0.75rem;
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

  &.error {
    border: 1px solid ${props => props.theme["error-border"]};
    background: ${props => props.theme["error-background"]};
  }
`
