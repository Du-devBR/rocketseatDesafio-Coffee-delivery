import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 2rem 10rem;
`

export const NavContainer = styled.nav`
  display: flex;
  gap: 1.25rem;
`

export const CartContaienr = styled.div`
  display: flex;
  position: relative;

`

export const Count = styled.div`
  display: flex;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  position: absolute;
  right: -10px;
  margin-top: -10px;
  background: ${props => props.theme['yellow-dark']};
  align-items: center;

  p {
    font-weight: 700;
    line-height: 130%;
    font-size: ${props => props.theme.font_roboto['Text S']};
    color: ${props => props.theme.white};
  }

`
