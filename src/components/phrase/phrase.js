import React from "react"
import styled from "styled-components"

const MainDiv = styled.div`
  /* The image used */
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.4)
    ),
    url("https://images.alphacoders.com/441/441409.jpg");

  /* Full height */
  height: 40vh;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

const MainPhrase = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-height: 100%;
  font-size: 50px;
  font-family: "Satisfy", cursive;
  color: #ffff;
  flex-direction: column;
`

export default function phrase() {
  return (
    <MainDiv>
      <MainPhrase>
        "O verdadeiro amor nunca se desgasta. Quanto mais se dá mais se tem."
        <p style={{fontSize: `30px`}}>Antoine de Saint-Exupéry</p>

      </MainPhrase>
    </MainDiv>
  )
}
