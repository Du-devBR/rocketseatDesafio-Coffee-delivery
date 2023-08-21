import { css, keyframes, styled } from 'styled-components';

const CART_THEME = {
  yellow: {
    color: 'yellow-dark',
    background: 'yellow-light',
  },
  purple: {
    color: 'white',
    background: 'purple-dark',
  },
};

interface ICartThemeProps {
  cartTheme: keyof typeof CART_THEME;
  isActive?: boolean;
}

const fadeIn = keyframes`
  0% {
    box-shadow: 0 0 10px rgba(1, 10, 0, 1);
  }
  50% {
    box-shadow: 0 0 20px rgba(1, 10, 0, 1.5);
  }
  100% {
    box-shadow: 0 0 10px rgba(1, 10, 0, 0.5);
  }
`;

export const ContainerCart = styled.div<ICartThemeProps>`
  width: fit-content;
  padding: 0.5rem;
  border-radius: 0.375rem;
  background: ${(props) => props.theme[CART_THEME[props.cartTheme].background]};
  transition: 0.5s;

  ${(props) =>
    props.isActive &&
    css`
      transition: 0.5s;
      animation: ${fadeIn} 1s infinite;
    `}

  &:hover {
    box-shadow: 1px 2px 10px 1px ${(props) => props.theme[CART_THEME[props.cartTheme].background]};
    transition: 0.5s;
  }
`;

export const ShoppingCartStyle = styled.span<ICartThemeProps>`
  color: ${(props) => props.theme[CART_THEME[props.cartTheme].color]};
  cursor: pointer;
`;
