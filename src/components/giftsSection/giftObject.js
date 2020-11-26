import React, { useState, useEffect } from "react"
import {
  MainDiv,
  GiftPhotos,
  GiftDescription,
  GiftTitle,
  GiftSection,
  Lines,
  GiftPrice,
  GiftButton,
} from "./style"
import styled from "styled-components"

import GiftModalContent from "./giftModals/modal"

import Modal, { ModalProvider, BaseModalBackground } from "styled-react-modal"

const StyledModal = Modal.styled`
  width: 50rem;
  height:40rem;
  background-color: white;
  opacity: ${props => props.opacity};
  transition: opacity ease 500ms;
  overflow: auto
`

function FancyModalButton(props) {
  const [isOpen, setIsOpen] = useState(false)
  const [opacity, setOpacity] = useState(0)

  function toggleModal(e) {
    setIsOpen(!isOpen)
  }

  function afterOpen() {
    setTimeout(() => {
      setOpacity(1)
    }, 10)
  }

  function beforeClose() {
    return new Promise(resolve => {
      setOpacity(0)
      setTimeout(resolve, 200)
    })
  }

  return (
    <div>
      <GiftButton onClick={toggleModal}>Reservar</GiftButton>
      <StyledModal
        isOpen={isOpen}
        afterOpen={afterOpen}
        beforeClose={beforeClose}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
        opacity={opacity}
        backgroundProps={{ opacity }}
      >
        <GiftModalContent>{props.children}</GiftModalContent>
      </StyledModal>
    </div>
  )
}

const FadingBackground = styled(BaseModalBackground)`
  opacity: ${props => props.opacity};
  transition: opacity ease 200ms;
`
const API = "https://charlotte-aplication.herokuapp.com/gifts"

const GiftObject = () => {
  const [product, setProduct] = useState([])
  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(res => {
        setProduct(res)
      })
  }, [])
  return (
    <div>
      {product.map(item => (
        <MainDiv key={item.id}>
          <GiftPhotos src={item.image} />
          <GiftDescription>
            <GiftSection>
              <GiftTitle>{item.name}</GiftTitle>
              <Lines />
              <GiftPrice>BRL {item.price}</GiftPrice>
              <ModalProvider backgroundComponent={FadingBackground}>
                <FancyModalButton>{item}</FancyModalButton>
              </ModalProvider>
            </GiftSection>
          </GiftDescription>
        </MainDiv>
      ))}
      ;
    </div>
  )
}

export default GiftObject
