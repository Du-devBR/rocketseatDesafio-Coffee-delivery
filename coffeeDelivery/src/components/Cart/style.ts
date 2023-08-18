import { styled } from "styled-components";

const CART_THEME = {
  yellow: {
    color: 'yellow-dark',
    background: 'yellow-light',
  },
  purple: {
    color: 'white',
    background: 'purple-dark',
  },
}

interface ICartThemeProps {
  cartTheme: keyof typeof CART_THEME;
}

export const ContainerCart = styled.div<ICartThemeProps>`
  width: fit-content;
  padding: 0.5rem;
  border-radius: 0.375rem;
  background: ${props => props.theme[CART_THEME[props.cartTheme].background]};
`


export const ShoppingCartStyle = styled.span<ICartThemeProps>`
  color: ${props => props.theme[CART_THEME[props.cartTheme].color]};
  cursor: pointer;
`
