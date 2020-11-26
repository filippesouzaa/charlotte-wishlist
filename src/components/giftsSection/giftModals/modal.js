import React, { useState } from "react"
import styled from "styled-components"
import { useForm } from "react-hook-form"
import GiftConfirm from "./giftConfirm"
import api from "../../../services/api"

const ModalContent = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    width: 100% !important;
    flex-direction: column;
    margin-top: 20px;
  } ;
`
const ModalGiftPhoto = styled.img`
  width: 50%;
  height: 350px;
  border: 0 !important;
  text-decoration: none;
  @media (max-width: 768px) {
    width: 100%;
  } ;
`

const VerticalLine = styled.div`
  background-color: #e6e6e6 !important;
  height: 500px;
  margin: 10px;
  width: 1px; /* Valor da Largura */
  margin-top: 20px;
  @media (max-width: 768px) {
    display: none;
  } ;
`
const InputModal = styled.input`
  height: 50px;
  margin-top: 10px;
  width: 100%;
  border: solid 2px pink;
  font-size: 20px;
  &:focus {
    outline: none;
  }
`
const InputText = styled.p`
  margin-top: 20px;
  line-height: 25.2px;
  vertical-align: baseline;
  letter-spacing: normal;
  word-spacing: 0px;
  font-weight: bold;
`

const ModalButtonCheck = styled.input`
  margin-top: 20px;
  padding: 20px 50px;
  width: 100%;
  border: 3px solid pink;
  text-transform: uppercase;
  background-color: pink;
  transition: 0.4s;
  outline: none;
  cursor: pointer;
  &:hover {
    background-color: #f053a1;
    border: 3px solid #f053a1;
  }
`
const ReservTitle = styled.span`
  font-size: 24px;
  font-style: normal;
  font-variant-caps: normal;
  font-variant-east-asian: normal;
  font-variant-ligatures: normal;
  font-variant-numeric: normal;
  color: grey;
`
const MainModal = styled.div`
  padding: 30px;
  @media (max-width: 768px) {
    padding: none;
  } ;
`

const RightSideModal = styled.div`
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  } ;
`

const Modal = props => {
  const { register, handleSubmit, errors } = useForm()
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [showResults, setShowResults] = useState(false)
  const [disabled, setDisabled] = useState(false)
  const [avaible, setAvaible] = useState(false)

  function onSubmit(data) {
    console.log(data)
    setDisabled(!disabled)
    setAvaible(!avaible)
    api.post("/users", data)
  }
  const onClick = () => {
    if (name !== "" && phone !== "") {
      setShowResults(true)
    }
  }
  return (
    <MainModal>
      <ReservTitle>Reservar Presente</ReservTitle>
      <ModalContent>
        <ModalGiftPhoto src={props.children.image} />
        <VerticalLine />
        <RightSideModal>
          <span style={{ fontSize: 18 }}>
            Insira seus dados para registrarmos o seu presente para a Charlotte.
            Ela vai adorar!
          </span>
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputText>Seu nome</InputText>
            <InputModal
              name="name"
              ref={register({ required: true })}
              disabled={disabled}
              value={name}
              onChange={e => setName(e.target.value)}
            ></InputModal>
            {errors.nameRequired && <span>Este é um campo obrigatório</span>}
            <InputText>Seu telefone</InputText>
            <InputModal
              name="phone"
              ref={register({ required: true })}
              type="number"
              disabled={disabled}
              value={phone}
              onChange={e => setPhone(e.target.value)}
            ></InputModal>
            {errors.phoneRequired && <span>Este é um campo obrigatório</span>}
            <ModalButtonCheck
              type="submit"
              value="RESERVAR"
              onClick={onClick}
              disabled={avaible}
            />
          </form>
          {showResults ? (
            <GiftConfirm>{props.children.link}</GiftConfirm>
          ) : null}
        </RightSideModal>
      </ModalContent>
    </MainModal>
  )
}

export default Modal
