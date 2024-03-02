import { styled } from "styled-components";

export const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 448px;
  height: 100%;
  padding: 2.5rem;
  gap: 1.5rem;
  background: ${props => props.theme["base-card"]};
  border-radius: 0.375rem 2.75rem 0.375rem 2.75rem;
`
export const PriceOrderConatiner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;

`

const BaseDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`


export const TotalItems = styled(BaseDiv)`
  span {
    line-height: 130%;
    font-weight: 400;
    font-size: ${props => props.theme.font_roboto["Text S"]};
    color: ${props => props.theme["base-text"]};

    &:last-child{
      font-size: ${props => props.theme.font_roboto["Text M"]};
    }
  }
`

export const OrderDelivery = styled(BaseDiv)`
  span {
    line-height: 130%;
    font-weight: 400;
    font-size: ${props => props.theme.font_roboto["Text S"]};
    color: ${props => props.theme["base-text"]};

    &:last-child{
      font-size: ${props => props.theme.font_roboto["Text M"]};
    }
  }
`

export const TotalOrder = styled(BaseDiv)`
  span {
    line-height: 130%;
    font-weight: 700;
    font-size: ${props => props.theme.font_roboto["Text L"]};
    color: ${props => props.theme["base-subtitle"]};

    &:last-child{
      font-size: ${props => props.theme.font_roboto["Text L"]};
    }
  }
`

export const ButtonSubmitOrder = styled.button`
  width: 100%;
  text-transform: uppercase;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 0.375rem;
  font-weight: 700;
  margin-top: 0.75rem;
  font-size: ${props => props.theme.font_roboto["Button G"]};
  color: ${props => props.theme.white};
  background: ${props => props.theme.yellow};
  transition: 0.5s;
  cursor: pointer;

  &:hover{
    background: ${props => props.theme["yellow-dark"]};
    transition: 0.5s;
  }
`
