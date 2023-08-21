import { styled } from "styled-components";

export const OrderContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 1.25rem;
  padding-bottom: 1.5rem;
  border-bottom: solid 1px ${props => props.theme["base-button"]};
`

export const InfoOrder = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.5rem;
`

export const ActionOrder = styled.div`
  display: flex;
  gap: 0.5rem;
`
