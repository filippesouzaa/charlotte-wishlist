import styled from "styled-components"

export const CoupleImage = styled.div`
  /* The image used */
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.4)
    ),
    url("https://i.ibb.co/F0MYHtP/couple.jpg");

  /* Full height */
  height: 100vh;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

export const CenteredTitle = styled.div`
  display: block;
  position: absolute;
  bottom: 120px;
  width: 100%;
  text-align: center;
`
export const MasterTitle = styled.span`
  font-size: 100px;
  text-transform: uppercase;
  font-weight: 700;
  color: #ffff;
  letter-spacing: 11px;
`
export const Line = styled.h1`
  background-color: #ffff;
  height: 5px;
  margin: 0 auto;
  width: 10%; /* Valor da Largura */
  margin-top: 20px;
`
export const SubTitle = styled.h2`
  margin-top: 40px;
  font-size: 20px;
  font-style: normal;
  font-variant-caps: normal;
  font-variant-east-asian: normal;
  font-variant-ligatures: normal;
  font-variant-numeric: normal;
  font-weight: 700;
  color: #ffff;
  text-transform: uppercase;
`