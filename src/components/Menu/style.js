import styled from "styled-components"

export const MenuContainer = styled.div`
  padding: 40px;
  display: flex;
  flex: 1;
  justify-content: space-between;
`
export const StaticMenu = styled.div`
  display: flex;
  position: right;
  @media (max-width: 425px) {
    display: none;
  } ;
  @media (max-width: 768px) {
    display: none;
  } ;
`

export const MenuItem = styled.a`
  margin-right: 40px;
  font-size: 22px;
  text-transform: uppercase;
  font-weight: bold;
  color: #ffff;
  cursor: pointer;
  &:hover {
    color: tomato;
  }
`
export const MenuLogo = styled.a`
  margin-right: 40px;
  font-size: 22px;
  text-transform: uppercase;
  font-weight: bold;
  color: #ffff;
`
