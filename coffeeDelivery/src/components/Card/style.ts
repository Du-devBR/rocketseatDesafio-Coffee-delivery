import { styled } from "styled-components";

interface IActiveCard {
  isActive: boolean;
}

export const ContainerCard = styled.div<IActiveCard>`
  width: 256px;
  display: flex;
  flex-direction: column;
  background: ${props => props.theme["base-card"]};
  border-radius: 0.375rem 2.25rem 0.375rem 2.25rem;
  padding: 0 1.25rem 1.25rem 1.25rem;
  transition: 0.5s;

`

export const HeaderCard = styled.header`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: -1.25rem;
  align-items: center;

  img {
    max-width: 120px;
  }
`

export const TagsProduct = styled.div`
  display: flex;
  gap: 0.5rem;
  align-self: center;
`

export const TagName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem 0.5rem;
  background: ${props => props.theme["yellow-light"]};
  border-radius: 6.25rem;

  span {
    font-size: ${props => props.theme.font_roboto.Tag};
    color: ${props => props.theme["yellow-dark"]};
    text-transform: uppercase;
    font-weight: 700;
    line-height: 130%;

  }
`

export const MainCard = styled.main`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 0.5rem;
  margin: 1rem 0 2rem 0;

  h2 {
    font-size: ${props => props.theme.font_baloo["Title S"]};
    font-weight: 700;
    color: ${props => props.theme["base-subtitle"]};
    line-height: 130%;
  }

  p {
    font-size: ${props => props.theme.font_roboto["Text S"]};
    font-weight: 400;
    color: ${props => props.theme["base-label"]};
    line-height: 130%;
  }
`

export const FooterCard = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;

`

export const ContainerPrice = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: ${props => props.theme["base-text"]};
    line-height: 130%;

    &:first-child {
      font-size: ${props => props.theme.font_roboto["Text S"]};
      font-weight: 400;
    }

    &:last-child {
      font-size: ${props => props.theme.font_baloo["Title M"]};
      font-family: 'Baloo 2', cursive;
      font-weight: 700;
    }

  }

`
