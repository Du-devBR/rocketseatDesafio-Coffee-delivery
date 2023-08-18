import { styled } from "styled-components";

export const ContainerLocation = styled.div`
  display: flex;
  gap: 0.25rem;
  align-items: center;
  padding: 0.5rem;
  background: ${props => props.theme.color["purple-light"]};
  border-radius: 0.375rem;
  border: none;

  .location {
    font-size: ${props => props.theme.font_roboto["Text S"]};
    font-weight: 400;
    line-height: 160%;
    color: ${props => props.theme.color["purple-dark"]};
  }
`

export const MapPinStyle = styled.span`
  color: ${props => props.theme.color.purple};
`
