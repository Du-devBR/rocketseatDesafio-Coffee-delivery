import { styled } from "styled-components";

export const CheckoutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 10rem;
  flex-wrap: wrap;
  gap: 2rem;

  @media (max-width: 1280px){
    padding: 0rem 4rem;
  }

  @media (max-width: 480px){
    padding:  2rem;
  }
`
