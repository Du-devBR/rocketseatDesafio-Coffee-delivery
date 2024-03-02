import { styled } from "styled-components";

export const PaymentContainer = styled.div`
  padding: 2.5rem;
  background: ${props => props.theme["base-card"]};
  border-radius: 0.375rem;
`


export const PaymentHeader = styled.header`
  display: flex;
  gap: 0.5rem;
  align-items: flex-start;
  margin-bottom: 2rem;
`

export const IconDolar = styled.span`
  color: ${props => props.theme.purple};
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

export const PaymentForm = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.75rem;

  @media (max-width: 480px){
    flex-direction: column;
  }
`

export const SelectPayment = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1rem;
  border-radius: 0.375rem;
  text-transform: uppercase;
  line-height: 160%;
  font-weight: 400;
  font-size: ${props => props.theme.font_roboto["Button M"]};
  color: ${props => props.theme["base-text"]};
  background: ${props => props.theme["base-button"]};
  border: solid 1px ${props => props.theme["base-button"]};

  &.selected {
    background: ${props => props.theme["purple-light"]};
    border: solid 1px ${props => props.theme.purple};
  }

  input {
    display: none;
  }


`
