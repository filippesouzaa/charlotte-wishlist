import React from "react"
import Menu from "../Menu/menu"

import {
  CenteredTitle,
  CoupleImage,
  MasterTitle,
  Line,
  SubTitle,
} from "./style"

export default function firstSection() {
  return (
    <div>
      <CoupleImage>
        <Menu />
        <CenteredTitle>
          <MasterTitle>Charlotte</MasterTitle>
          <Line />
          <SubTitle>Minha lista de desejos</SubTitle>
        </CenteredTitle>
      </CoupleImage>
    </div>
  )
}
