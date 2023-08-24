import { styled } from "styled-components";

export const OrderContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 1.25rem;
  padding-bottom: 1.5rem;
  border-bottom: solid 1px ${props => props.theme["base-button"]};

  img {
    width: 4rem;
    height: 4rem;
  }

  span {
    line-height: 130%;
    font-weight: 700;
    font-size: ${props => props.theme.font_roboto["Text M"]};
    color: ${props => props.theme["base-text"]};
  }
`

export const InfoOrder = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.5rem;

  h2 {
    line-height: 130%;
    font-weight: 400;
    font-size: ${props => props.theme.font_roboto["Text M"]};
    color: ${props => props.theme["base-subtitle"]};
  }
`

export const ActionOrder = styled.div`
  display: flex;
  gap: 0.5rem;
`



export const ButtonSubmitOrder = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 0.375rem;
  border: none;
  text-transform: uppercase;
  line-height: 160%;
  gap: 0.5rem;
  padding: 0.5rem;
  font-weight: 400;
  font-size: ${props => props.theme.font_roboto["Button M"]};
  color: ${props => props.theme["base-text"]};
  background: ${props => props.theme["base-button"]};
  transition: 0.5s;

  &:hover{
    color: ${props => props.theme["base-subtitle"]};
    background: ${props => props.theme["base-hover"]};
    transition: 0.5s;

    .trash {
      color: ${props => props.theme["purple-dark"]};
      transition: 0.5s;
    }
  }

  .trash {
    color: ${props => props.theme["purple"]};
    transition: 0.5s;
  }

`
