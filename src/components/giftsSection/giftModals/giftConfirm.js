import React from "react"
import styled from "styled-components"

const ModalButtonGiveUp = styled.button`
  margin-top: 10px;
  padding: 20px 50px;
  width: 100%;
  border: 3px solid #31383a;
  text-transform: uppercase;
  background-color: #ffff;
  transition: 0.4s;
  outline: none;
  cursor: pointer;
  &:hover {
    background-color: #f15050;
    border: 3px solid #f15050;
  }
`
const giftConfirm = props => {
  return (
    <a >
      <ModalButtonGiveUp type="submit">COMPRAR</ModalButtonGiveUp>
    </a>
  )
}

export default giftConfirm
