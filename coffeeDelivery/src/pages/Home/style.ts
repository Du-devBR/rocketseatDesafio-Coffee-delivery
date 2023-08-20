import { styled } from "styled-components";

export const ContainerHome = styled.section`
  padding: 0 10rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  h1 {
    font-weight: 700;
    line-height: 130%;
    font-size: ${props => props.theme.font_baloo["Title L"]};
    color: ${props => props.theme["base-subtitle"]};
  }
`

export const ContainerProducts = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(256px, 1fr));
  gap: 2rem 1rem;
`
