import { styled } from "styled-components";

export const ContainerLocation = styled.div`
  display: flex;
  gap: 0.25rem;
  align-items: center;
  padding: 0.5rem;
  background: ${props => props.theme["purple-light"]};
  border-radius: 0.375rem;
  border: none;

  input {
    border: none;
    background: none;
    height: 100%;
    outline: none;
  }

  input::placeholder {
    font-size: ${props => props.theme.font_roboto["Text S"]};
    color: ${props => props.theme["purple-dark"]};
    text-align: end;
    font-weight: 700;
  }

  .location {
    font-size: ${props => props.theme.font_roboto["Text S"]};
    font-weight: 400;
    line-height: 160%;
    color: ${props => props.theme["purple-dark"]};
  }
`

export const MapPinStyle = styled.span`
  color: ${props => props.theme.purple};
`
