import React, { useState, useEffect } from "react"
import styled from "styled-components"

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

  background-color: #f9f9f9 !important;
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

const ModalButtonCheck = styled.button`
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

const Modal = () => {
  const [product, setProduct] = useState([])
  useEffect(() => {
    fetch("./gifts.json", {
      headers: {
        Accept: "application/json",
      },
    })
      .then(res => res.json())
      .then(res => setProduct(res.data))
  }, [])
  return (
    <div>
      {product.map(item => (
        <MainModal key={item.id}>
          <ReservTitle>{item.nome}</ReservTitle>
          <ModalContent>
            <ModalGiftPhoto src={item.image}/>
            <VerticalLine />
            <RightSideModal>
              <span style={{ fontSize: 18 }}>
                Insira seus dados para registrarmos o seu presente para a
                Charlotte. Ela vai adorar!
              </span>
              <form>
                <InputText>Seu nome</InputText>
                <InputModal type="text"></InputModal>
                <InputText>Seu telefone</InputText>
                <InputModal type="number"></InputModal>
              </form>
              <a href={item.link}>
                <ModalButtonCheck>Comprar</ModalButtonCheck>
              </a>
              {/* <ModalButtonGiveUp onClick={toggleModal}>Desistir</ModalButtonGiveUp> */}
            </RightSideModal>
          </ModalContent>
        </MainModal>
      ))}
    </div>
  )
}

export default Modal
