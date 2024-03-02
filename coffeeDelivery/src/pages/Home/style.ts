import { styled } from "styled-components";

export const ContainerHome = styled.section`
  padding: 0 10rem;
  display: flex;
  flex-direction: column;

  @media (max-width: 1280px){
    padding: 0 4rem;
  }

  @media (max-width: 480px){
    padding: 0 2rem;
  }
`

export const ContainerBanner = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 3.5rem;
  padding: 5.875rem 0;


  @media (max-width: 768px){
    flex-direction: column;
  }

`

export const ContainerInfoBanner = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  h1 {
    font-weight: 700;
    line-height: 130%;
    font-size: ${props => props.theme.font_baloo["Title XL"]};
    color: ${props => props.theme["base-title"]};
    margin-bottom: 1rem;
  }

  p {
    font-weight: 400;
    line-height: 130%;
    font-size: ${props => props.theme.font_roboto["Text L"]};
    color: ${props => props.theme["base-subtitle"]};
  }

  @media (max-width: 768px){
    h1 {
      font-size: ${props => props.theme.font_baloo["Title L"]};
    }
  }
`

export const ContainerIntro = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 4rem;
`

export const Intro = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;

  p {
    line-height: 130%;
    font-weight: 400;
    color: ${props => props.theme["base-text"]};
    font-size: ${props => props.theme.font_roboto["Text M"]};
  }
`

const ICON_THEME = {
  cart: 'yellow-dark',
  package: 'base-text',
  timer: 'yellow',
  coffe: 'purple',
}

interface IIconThemeProps {
  iconTheme: keyof typeof ICON_THEME
}

export const IconIntro = styled.span<IIconThemeProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 9999px;
  background: ${(props) => props.theme[ICON_THEME[props.iconTheme]]};
  color: ${props => props.theme.white};
`

export const ContainerImage = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;

  @media (max-width: 1280px){
    justify-content: center;
  }

  img {

    height: auto;
    align-self: flex-start;

    @media (max-width: 768px){
      max-width: 100%;
    }
  }
`

export const ContainerProducts = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3.375rem;

  h2 {
    font-weight: 700;
    line-height: 130%;
    font-size: ${props => props.theme.font_baloo["Title L"]};
    color: ${props => props.theme["base-subtitle"]};
  }

  @media (max-width: 768px){
    h2 {
      font-size: ${props => props.theme.font_baloo["Title M"]};
    }
  }
`

export const ListProducts = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(256px, 1fr));
  gap: 2rem 1rem;

`
