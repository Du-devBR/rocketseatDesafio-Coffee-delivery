import { styled } from "styled-components";

export const ContainerCard = styled.div`
  max-width: 256px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${props => props.theme["base-card"]};
  border-radius: 0.375rem 2.25rem 0.375rem 2.25rem;
  padding: 0 1.25rem 1.25rem 1.25rem;
`


export const HeaderCard = styled.header`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: -1.25rem;
`

export const MainCard = styled.main``

export const FooterCard = styled.footer``
