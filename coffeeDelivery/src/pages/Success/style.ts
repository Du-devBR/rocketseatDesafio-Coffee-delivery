import { styled } from "styled-components";

export const ContainerSuccess = styled.div`
  display: flex;
  padding: 0 10rem;
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


export const InfoSuccess = styled.div`

  padding: 2.5rem;
  background: none;
  border: solid 1px ${props => props.theme["yellow-dark"]};
  border-radius: 0.375rem 2.25rem 0.375rem 2.25rem;
`


export const Info = styled.div``
