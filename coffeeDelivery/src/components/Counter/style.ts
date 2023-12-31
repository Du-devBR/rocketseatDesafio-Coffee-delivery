import { styled } from "styled-components";

export const ContainerCounter = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  background: ${props => props.theme["base-button"]};
  border-radius: 0.375rem;
  padding: 0.5rem;

  button {
    background: none;
    border: none;
    cursor: pointer;
    transition: 0.5s;
    padding: 0.5rem 0;

    &:hover {
      transition: 0.5s;
      transform: scale(1.2);
    }


    &:first-child::after{
      content: '';
      width: 14px;
      height: 2px;
      display: block;
      background: ${props => props.theme.purple};
      border-radius: 1px;
    }

    &:last-child::after{
      content: '';
      width: 14px;
      height: 2px;
      display: block;
      background: ${props => props.theme.purple};
      position: relative;
      border-radius: 1px;
    }
    &:last-child::before{
      content: '';
      width: 14px;
      height: 2px;
      display: block;
      background: ${props => props.theme.purple};
      transform: rotate(90deg);
      position: absolute;
      border-radius: 1px;

    }
  }

  span {
    font-size: ${props => props.theme.font_roboto["Text M"]};
    color: ${props => props.theme["base-text"]};
  }
`
