import { styled } from "styled-components";

export const ContainerSuccess = styled.div`
  display: flex;
  padding: 0 10rem;
  align-items: flex-end;
  justify-content: space-between;
  gap: 2rem;
`

export const ContainerInfoSuccess = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  h1 {
    line-height: 160%;
    font-weight: 700;
    font-size: ${props => props.theme.font_baloo["Title L"]};
    color: ${props => props.theme["yellow-dark"]};
  }

  p {
    line-height: 130%;
    font-weight: 400;
    font-size: ${props => props.theme.font_roboto["Text L"]};
    color: ${props => props.theme["base-subtitle"]};
  }
`


export const InfoSuccess = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;
  background: none;
  border: solid 1px ${props => props.theme["yellow-dark"]};
  border-radius: 0.375rem 2.25rem 0.375rem 2.25rem;
  margin-top: 2.5rem;
`


export const Info = styled.li`
  display: flex;
  gap: 0.75rem;
  align-items: center;
`

const ICON_THEME = {
  location: 'purple',
  timer: 'yellow',
  dollar: 'yellow-dark'
}

interface IIconThemeProps {
  iconTheme: keyof typeof ICON_THEME
}

export const IconStyle = styled.span<IIconThemeProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 999px;
  color: ${props => props.theme.white};
  background: ${props => props.theme[ICON_THEME[props.iconTheme]]};
`

export const InfoAddress = styled.div`
  display: flex;
  flex-direction: column;

  span {
    line-height: 130%;
    font-weight: 400;
    font-size: ${props => props.theme.font_roboto["Text M"]};
    color: ${props => props.theme["base-text"]};
  }

  strong {
    line-height: 130%;
    font-weight: 700;
    font-size: ${props => props.theme.font_roboto["Text M"]};
    color: ${props => props.theme["base-text"]};
  }
`

export const ImageSuccess = styled.div`
  width: 40%;
`
