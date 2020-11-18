import React from "react"
import { MenuContainer, StaticMenu, MenuItem, MenuLogo} from "./style"

export default function menu() {
  return (
    <MenuContainer>
      <MenuLogo>CHARLOTTE</MenuLogo>
      <StaticMenu>
        <MenuItem>Inicio</MenuItem>
        <MenuItem>Timer</MenuItem>
        <MenuItem>Presentes</MenuItem>
        <MenuItem>Contato</MenuItem>
      </StaticMenu>
    </MenuContainer>
  )
}
