import React from "react"
import styled from "styled-components"

const Footer = styled.div`
  background-color: #08091b;
  text-align: center;
  padding: 20px;
`

const Info = styled.span`
  color: white;
  font-size: 12px;
`
const Link = styled.a`
    color: #D98D04;
    text-decoration: none;
    font-weight: bold;
`

export default function footer() {
  return (
    <Footer>
      <Info>
        Developed by © 2020 <Link href="https://wifiro.net">WIFIRO</Link> | Todos os
        direitos reservados
      </Info>
    </Footer>
  )
}
