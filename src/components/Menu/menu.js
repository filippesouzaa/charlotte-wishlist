import React from "react"
import { MenuContainer, StaticMenu, MenuItem, MenuLogo} from "./style"

export default function menu() {
  return (
    <MenuContainer>
      <MenuLogo>Charlotte</MenuLogo>
      <StaticMenu>
        <MenuItem>Inicio</MenuItem>
        <MenuItem>Presentes</MenuItem>
        <MenuItem>Fotos</MenuItem>
      </StaticMenu>
    </MenuContainer>
  )
}
