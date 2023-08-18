import { styled } from "styled-components";

export const ContainerCart = styled.div`
  width: fit-content;
  padding: 0.5rem;
  border-radius: 0.375rem;
  background: ${props => props.theme.color["yellow-light"]};
`
export const ShoppingCartStyle = styled.span`
  color: ${props => props.theme.color["yellow-dark"]};
  cursor: pointer;
`
