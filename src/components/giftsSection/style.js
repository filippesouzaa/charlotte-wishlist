import styled from "styled-components"

export const MainDiv = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  } ;
`
export const GiftPhotos = styled.img`
  width: 50%;
  height: 600px;
  @media (max-width: 768px) {
    width: 100%;
  } ;
`

export const GiftDescription = styled.div`
  width: 50%;
  height: 600px;
  @media (max-width: 768px) {
    width: 100%;
  } ;
`

export const GiftTitle = styled.span`
  color: #31383a !important;
  font-size: 36px;
`

export const GiftSection = styled.div`
  height: 100%;
  min-height: 100%;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  justify-content: center;
  flex-direction: column;
`
export const Lines = styled.div`
  background-color: #31383a !important;
  height: 3px;
  margin: 0 auto;
  width: 10%; /* Valor da Largura */
  margin-top: 20px;
`
export const GiftPrice = styled.span`
  margin-top: 20px;
  font-size: 22px;
  color: #8dc351;
`
export const GiftButton = styled.button`
  margin-top: 20px;
  padding: 20px 50px;
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
