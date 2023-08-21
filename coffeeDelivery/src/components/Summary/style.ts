import { styled } from "styled-components";

export const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 448px;
  padding: 2.5rem;
  gap: 1.5rem;
  background: ${props => props.theme["base-card"]};
  border-radius: 0.375rem 2.75rem 0.375rem 2.75rem;
`
