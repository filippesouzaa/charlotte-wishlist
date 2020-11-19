import React, { useState } from "react"
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

import Modal, { ModalProvider, BaseModalBackground } from "styled-react-modal"

const StyledModal = Modal.styled`
  width: 50rem;
  height:40rem;
  background-color: white;
  opacity: ${props => props.opacity};
  transition: opacity ease 500ms;
  overflow: auto
`
const ModalContent = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    width: 100% !important;
    flex-direction: column;
    margin-top: 20px;
  } ;
`
const ModalGiftPhoto = styled.div`
  width: 50%;
  height: 350px;
  -webkit-background-size: 100% 100% !important;
  -moz-background-size: 100% 100% !important;
  -o-background-size: 100% 100% !important;
  background-size: 100% !important;
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

function FancyModalButton() {
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
        <MainModal>
          <ReservTitle>Reservar Presente</ReservTitle>
          <ModalContent>
            <ModalGiftPhoto
              style={{
                background: `url('https://dmhxz00kguanp.cloudfront.net/fotos/100909/tapete-amiguinha-lhama-1-20m-235262.jpg') no-repeat center center `,
              }}
            ></ModalGiftPhoto>
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
              <ModalButtonCheck>Reservar</ModalButtonCheck>
              <ModalButtonGiveUp onClick={toggleModal}>
                Desistir
              </ModalButtonGiveUp>
            </RightSideModal>
          </ModalContent>
        </MainModal>
      </StyledModal>
    </div>
  )
}


const FadingBackground = styled(BaseModalBackground)`
  opacity: ${props => props.opacity};
  transition: opacity ease 200ms;
`

export default function giftObject() {
  return (
    <div>
      <MainDiv>
        <GiftPhotos
          style={{
            background: `url('https://dmhxz00kguanp.cloudfront.net/fotos/100909/tapete-amiguinha-lhama-1-20m-235262.jpg') no-repeat center center `,
          }}
        />
        <GiftDescription>
          <GiftSection>
            <GiftTitle>Tapete Amiguinha Lhama</GiftTitle>
            <Lines />
            <GiftPrice>BRL 283,99</GiftPrice>
            <ModalProvider backgroundComponent={FadingBackground}>
              <FancyModalButton />
            </ModalProvider>
            <Modal />
          </GiftSection>
        </GiftDescription>
      </MainDiv>
      <MainDiv>
        <GiftDescription>
          <GiftSection>
            <GiftTitle>Saia de Berço Renda Branco</GiftTitle>
            <Lines />
            <GiftPrice>BRL 52,52</GiftPrice>
            <ModalProvider backgroundComponent={FadingBackground}>
              <FancyModalButton/>
            </ModalProvider>
          </GiftSection>
        </GiftDescription>
        <GiftPhotos
          style={{
            background: `url('https://dmhxz00kguanp.cloudfront.net/fotos/89356/saia-de-berco-branco-classico-202222.jpg') no-repeat center center`,
          }}
        />
      </MainDiv>
      <MainDiv>
        <GiftPhotos
          style={{
            background: `url('https://dmhxz00kguanp.cloudfront.net/fotos/100854/porta-fraldas-mdf-lhama-235143.jpg') no-repeat center center `,
          }}
        />
        <GiftDescription>
          <GiftSection>
            <GiftTitle>Porta Fraldas MDF Lhama</GiftTitle>
            <Lines />
            <GiftPrice>BRL 96,99</GiftPrice>
            <GiftButton>Reservar</GiftButton>
          </GiftSection>
        </GiftDescription>
      </MainDiv>
      <MainDiv>
        <GiftDescription>
          <GiftSection>
            <GiftTitle>Jogo de Lençol Berço Branco Clássic</GiftTitle>
            <Lines />
            <GiftPrice>BRL 52,52</GiftPrice>
            <GiftButton>Reservar</GiftButton>
          </GiftSection>
        </GiftDescription>
        <GiftPhotos
          style={{
            background: `url('https://dmhxz00kguanp.cloudfront.net/fotos/89394/jogo-de-lencol-berco-branco-classico-202400.jpg') no-repeat center center`,
          }}
        />
      </MainDiv>
      <MainDiv>
        <GiftPhotos
          style={{
            background: `url('https://dmhxz00kguanp.cloudfront.net/fotos/101217/jogo-de-lencol-mini-berco-mariana-branco-230355.jpg') no-repeat center center `,
          }}
        />
        <GiftDescription>
          <GiftSection>
            <GiftTitle>Jogo de Lençol Mini Berço Branco</GiftTitle>
            <Lines />
            <GiftPrice>BRL 96,99</GiftPrice>
            <GiftButton>Reservar</GiftButton>
          </GiftSection>
        </GiftDescription>
      </MainDiv>
      <MainDiv>
        <GiftDescription>
          <GiftSection>
            <GiftTitle>Jogo de Fronhas Branco com Barra Salmão</GiftTitle>
            <Lines />
            <GiftPrice>BRL 52,52</GiftPrice>
            <GiftButton>Reservar</GiftButton>
          </GiftSection>
        </GiftDescription>
        <GiftPhotos
          style={{
            background: `url('https://dmhxz00kguanp.cloudfront.net/fotos/114088/jogo-de-fronhas-branco-com-barra-salmao-247314.jpg') no-repeat center center`,
          }}
        />
      </MainDiv>
      <MainDiv>
        <GiftPhotos
          style={{
            background: `url('https://dmhxz00kguanp.cloudfront.net/fotos/100902/cobertor-pelucia-com-tassel-234914.jpg') no-repeat center center `,
          }}
        />
        <GiftDescription>
          <GiftSection>
            <GiftTitle>Cobertor Pelúcia com Tassel</GiftTitle>
            <Lines />
            <GiftPrice>BRL 96,99</GiftPrice>
            <GiftButton>Reservar</GiftButton>
          </GiftSection>
        </GiftDescription>
      </MainDiv>
      <MainDiv>
        <GiftDescription>
          <GiftSection>
            <GiftTitle>Cobertor Soft para bebê Bordado Inglês</GiftTitle>
            <Lines />
            <GiftPrice>BRL 52,52</GiftPrice>
            <GiftButton>Reservar</GiftButton>
          </GiftSection>
        </GiftDescription>
        <GiftPhotos
          style={{
            background: `url('https://www.bebedamour.com.br/images/produtos/1-cobertor-para-bebe-em-soft-com-pique-e-renda-inglesa-blanche080903.png') no-repeat center center`,
          }}
        />
      </MainDiv>
      <MainDiv>
        <GiftPhotos
          style={{
            background: `url('https://images.yampi.me/assets/stores/babyenxoval/uploads/images/manta-para-bebe-malha-suedine-rosa-5d1c8cbce2ea1-medium.jpg') no-repeat center center `,
          }}
        />
        <GiftDescription>
          <GiftSection>
            <GiftTitle>Manta para bebê malha suedine</GiftTitle>
            <Lines />
            <GiftPrice>BRL 96,99</GiftPrice>
            <GiftButton>Reservar</GiftButton>
          </GiftSection>
        </GiftDescription>
      </MainDiv>
      <MainDiv>
        <GiftDescription>
          <GiftSection>
            <GiftTitle>Kit Berço Amiguinhas Lhamas</GiftTitle>
            <Lines />
            <GiftPrice>BRL 52,52</GiftPrice>
            <GiftButton>Reservar</GiftButton>
          </GiftSection>
        </GiftDescription>
        <GiftPhotos
          style={{
            background: `url('https://dmhxz00kguanp.cloudfront.net/fotos/100965/kit-berco-amiguinhas-lhamas-238731.jpg') no-repeat center center`,
          }}
        />
      </MainDiv>
      <MainDiv>
        <GiftPhotos
          style={{
            background: `url('https://dmhxz00kguanp.cloudfront.net/fotos/100879/cueiro-amiguinhas-lhamas-235213.jpg') no-repeat center center `,
          }}
        />
        <GiftDescription>
          <GiftSection>
            <GiftTitle>Cueiro Amiguinhas Lhamas</GiftTitle>
            <Lines />
            <GiftPrice>BRL 96,99</GiftPrice>
            <GiftButton>Reservar</GiftButton>
          </GiftSection>
        </GiftDescription>
      </MainDiv>
      <MainDiv>
        <GiftDescription>
          <GiftSection>
            <GiftTitle>Cueiro soft premium Rosa 3un</GiftTitle>
            <Lines />
            <GiftPrice>BRL 52,52</GiftPrice>
            <GiftButton>Reservar</GiftButton>
          </GiftSection>
        </GiftDescription>
        <GiftPhotos
          style={{
            background: `url('https://images-na.ssl-images-amazon.com/images/I/71SijZLh5zL._AC_SL1500_.jpg') no-repeat center center`,
          }}
        />
      </MainDiv>
      <MainDiv>
        <GiftPhotos
          style={{
            background: `url('https://images-na.ssl-images-amazon.com/images/I/71v1zq3PGOL._AC_SL1500_.jpg') no-repeat center center `,
          }}
        />
        <GiftDescription>
          <GiftSection>
            <GiftTitle>Jogo de lençol de carrinho</GiftTitle>
            <Lines />
            <GiftPrice>BRL 96,99</GiftPrice>
            <GiftButton>Reservar</GiftButton>
          </GiftSection>
        </GiftDescription>
      </MainDiv>
      <MainDiv>
        <GiftDescription>
          <GiftSection>
            <GiftTitle>Edredom de Berço Lhamas</GiftTitle>
            <Lines />
            <GiftPrice>BRL 52,52</GiftPrice>
            <GiftButton>Reservar</GiftButton>
          </GiftSection>
        </GiftDescription>
        <GiftPhotos
          style={{
            background: `url('https://dmhxz00kguanp.cloudfront.net/fotos/100930/edredom-de-berco-amiguinhas-lhamas-235429.jpg') no-repeat center center`,
          }}
        />
      </MainDiv>
      <MainDiv>
        <GiftPhotos
          style={{
            background: `url('https://images-na.ssl-images-amazon.com/images/I/51ZTMnSnRBL._AC_.jpg') no-repeat center center `,
          }}
        />
        <GiftDescription>
          <GiftSection>
            <GiftTitle>Mosquiteiro para carrinho</GiftTitle>
            <Lines />
            <GiftPrice>BRL 96,99</GiftPrice>
            <GiftButton>Reservar</GiftButton>
          </GiftSection>
        </GiftDescription>
      </MainDiv>
      <MainDiv>
        <GiftDescription>
          <GiftSection>
            <GiftTitle>Cortina Clássica com Laços Rosa e Branco</GiftTitle>
            <Lines />
            <GiftPrice>BRL 52,52</GiftPrice>
            <GiftButton>Reservar</GiftButton>
          </GiftSection>
        </GiftDescription>
        <GiftPhotos
          style={{
            background: `url('https://dmhxz00kguanp.cloudfront.net/fotos/99857/cortina-classica-com-lacos-rosa-e-branco-298539.jpg') no-repeat center center`,
          }}
        />
      </MainDiv>
      <MainDiv>
        <GiftPhotos
          style={{
            background: `url('https://dmhxz00kguanp.cloudfront.net/fotos/116707/toalha-com-capuz-infantil-nuvem-de-algodao-90cm-262659.jpg') no-repeat center center `,
          }}
        />
        <GiftDescription>
          <GiftSection>
            <GiftTitle>Toalha com Capuz Infantil Nuvem</GiftTitle>
            <Lines />
            <GiftPrice>BRL 96,99</GiftPrice>
            <GiftButton>Reservar</GiftButton>
          </GiftSection>
        </GiftDescription>
      </MainDiv>
      <MainDiv>
        <GiftDescription>
          <GiftSection>
            <GiftTitle>Almofada Amamentação Cacto</GiftTitle>
            <Lines />
            <GiftPrice>BRL 52,52</GiftPrice>
            <GiftButton>Reservar</GiftButton>
          </GiftSection>
        </GiftDescription>
        <GiftPhotos
          style={{
            background: `url('https://dmhxz00kguanp.cloudfront.net/fotos/100859/almofada-amamentacao-cacto-234897.jpg') no-repeat center center`,
          }}
        />
      </MainDiv>
      <MainDiv>
        <GiftPhotos
          style={{
            background: `url('https://images-na.ssl-images-amazon.com/images/I/717KchEvzsL._AC_SL1500_.jpg') no-repeat center center `,
          }}
        />
        <GiftDescription>
          <GiftSection>
            <GiftTitle>Fralda de pano 5 un</GiftTitle>
            <Lines />
            <GiftPrice>BRL 96,99</GiftPrice>
            <GiftButton>Reservar</GiftButton>
          </GiftSection>
        </GiftDescription>
      </MainDiv>
      <MainDiv>
        <GiftDescription>
          <GiftSection>
            <GiftTitle>Capa de Bebê Conforto Amiguinhas Lhamas</GiftTitle>
            <Lines />
            <GiftPrice>BRL 52,52</GiftPrice>
            <GiftButton>Reservar</GiftButton>
          </GiftSection>
        </GiftDescription>
        <GiftPhotos
          style={{
            background: `url('https://dmhxz00kguanp.cloudfront.net/fotos/103610/capa-de-bebe-conforto-amiguinhas-lhamas-234975.jpg') no-repeat center center`,
          }}
        />
      </MainDiv>
      <MainDiv>
        <GiftPhotos
          style={{
            background: `url('https://dmhxz00kguanp.cloudfront.net/fotos/147076/conjunto-de-mala-mochila-e-bolsa-maternidade-coracao-cinza-e-rosa-03-pcs-321632.jpg') no-repeat center center `,
          }}
        />
        <GiftDescription>
          <GiftSection>
            <GiftTitle>Conjunto de Mala, Mochila e Bolsa Maternidade</GiftTitle>
            <Lines />
            <GiftPrice>BRL 96,99</GiftPrice>
            <GiftButton>Reservar</GiftButton>
          </GiftSection>
        </GiftDescription>
      </MainDiv>
      <MainDiv>
        <GiftDescription>
          <GiftSection>
            <GiftTitle>Abajur Madeira Lhama Pompom</GiftTitle>
            <Lines />
            <GiftPrice>BRL 52,52</GiftPrice>
            <GiftButton>Reservar</GiftButton>
          </GiftSection>
        </GiftDescription>
        <GiftPhotos
          style={{
            background: `url('https://dmhxz00kguanp.cloudfront.net/fotos/100855/abajur-mdf-lhama-235137.jpg') no-repeat center center`,
          }}
        />
      </MainDiv>
      <MainDiv>
        <GiftPhotos
          style={{
            background: `url('https://dmhxz00kguanp.cloudfront.net/fotos/100846/cesta-mdf-cactos-235139.jpg') no-repeat center center `,
          }}
        />
        <GiftDescription>
          <GiftSection>
            <GiftTitle>Cesta MDF Cactos</GiftTitle>
            <Lines />
            <GiftPrice>BRL 96,99</GiftPrice>
            <GiftButton>Reservar</GiftButton>
          </GiftSection>
        </GiftDescription>
      </MainDiv>
      <MainDiv>
        <GiftDescription>
          <GiftSection>
            <GiftTitle>Farmacinha Lhama e Cactos</GiftTitle>
            <Lines />
            <GiftPrice>BRL 52,52</GiftPrice>
            <GiftButton>Reservar</GiftButton>
          </GiftSection>
        </GiftDescription>
        <GiftPhotos
          style={{
            background: `url('https://dmhxz00kguanp.cloudfront.net/fotos/100844/farmacinha-lhama-e-cactos-235140.jpg') no-repeat center center`,
          }}
        />
      </MainDiv>
      <MainDiv>
        <GiftPhotos
          style={{
            background: `url('https://images-na.ssl-images-amazon.com/images/I/41Kli8elGhL._AC_SL1000_.jpg') no-repeat center center `,
          }}
        />
        <GiftDescription>
          <GiftSection>
            <GiftTitle>Banheira com suporte</GiftTitle>
            <Lines />
            <GiftPrice>BRL 96,99</GiftPrice>
            <GiftButton>Reservar</GiftButton>
          </GiftSection>
        </GiftDescription>
      </MainDiv>
      <MainDiv>
        <GiftDescription>
          <GiftSection>
            <GiftTitle>Fralda eco diurna fatias</GiftTitle>
            <Lines />
            <GiftPrice>BRL 52,52</GiftPrice>
            <GiftButton>Reservar</GiftButton>
          </GiftSection>
        </GiftDescription>
        <GiftPhotos
          style={{
            background: `url('https://afetofraldasecologicas.com.br/wp-content/uploads/2020/09/94-SEM-FUNDO-800x800.png') no-repeat center center`,
          }}
        />
      </MainDiv>
      <MainDiv>
        <GiftPhotos
          style={{
            background: `url('https://afetofraldasecologicas.com.br/wp-content/uploads/2019/04/20180821_222804-800x800.png') no-repeat center center `,
          }}
        />
        <GiftDescription>
          <GiftSection>
            <GiftTitle>Fralda eco noturna rosa</GiftTitle>
            <Lines />
            <GiftPrice>BRL 96,99</GiftPrice>
            <GiftButton>Reservar</GiftButton>
          </GiftSection>
        </GiftDescription>
      </MainDiv>
      <MainDiv>
        <GiftDescription>
          <GiftSection>
            <GiftTitle>Fralda eco noturna cinza</GiftTitle>
            <Lines />
            <GiftPrice>BRL 52,52</GiftPrice>
            <GiftButton>Reservar</GiftButton>
          </GiftSection>
        </GiftDescription>
        <GiftPhotos
          style={{
            background: `url('https://afetofraldasecologicas.com.br/wp-content/uploads/2020/06/P_20190520_195323_1-800x800.png') no-repeat center center`,
          }}
        />
      </MainDiv>
      <MainDiv>
        <GiftPhotos
          style={{
            background: `url('https://d26lpennugtm8s.cloudfront.net/stores/001/354/318/products/fluido-de-limpeza11-6cc2e101b112e5c60316006700559566-640-0.jpeg') no-repeat`,
          }}
        />
        <GiftDescription>
          <GiftSection>
            <GiftTitle>Kit higiene eco</GiftTitle>
            <Lines />
            <GiftPrice>BRL 96,99</GiftPrice>
            <GiftButton>Reservar</GiftButton>
          </GiftSection>
        </GiftDescription>
      </MainDiv>
      <MainDiv>
        <GiftDescription>
          <GiftSection>
            <GiftTitle>
              Pomada natural contra assadura gotas de cuidado
            </GiftTitle>
            <Lines />
            <GiftPrice>BRL 52,52</GiftPrice>
            <GiftButton>Reservar</GiftButton>
          </GiftSection>
        </GiftDescription>
        <GiftPhotos
          style={{
            background: `url('https://huilearome.com.br/wp-content/uploads/2019/10/pomada-natural-gotas-de-cuidado-30g-pura-chuva.jpg') no-repeat center center`,
          }}
        />
      </MainDiv>
      <MainDiv>
        <GiftPhotos
          style={{
            background: `url('https://www.purachuva.com.br/wp-content/uploads/Pura_Chuva-612.jpg') no-repeat center center `,
          }}
        />
        <GiftDescription>
          <GiftSection>
            <GiftTitle>
              Pomada natural contra assadura gotas de delicadeza
            </GiftTitle>
            <Lines />
            <GiftPrice>BRL 96,99</GiftPrice>
            <GiftButton>Reservar</GiftButton>
          </GiftSection>
        </GiftDescription>
      </MainDiv>
      <MainDiv>
        <GiftDescription>
          <GiftSection>
            <GiftTitle>Expectorante natural gotas de conforto</GiftTitle>
            <Lines />
            <GiftPrice>BRL 52,52</GiftPrice>
            <GiftButton>Reservar</GiftButton>
          </GiftSection>
        </GiftDescription>
        <GiftPhotos
          style={{
            background: `url('https://http2.mlstatic.com/D_NQ_NP_274325-MLB25435678503_032017-O.jpg') no-repeat center center`,
          }}
        />
      </MainDiv>
      <MainDiv>
        <GiftPhotos
          style={{
            background: `url('https://cf.shopee.com.br/file/b434da295b080aa32d3d003ea7966ae6') no-repeat center center `,
          }}
        />
        <GiftDescription>
          <GiftSection>
            <GiftTitle>Repelente natural gotas de conforto</GiftTitle>
            <Lines />
            <GiftPrice>BRL 96,99</GiftPrice>
            <GiftButton>Reservar</GiftButton>
          </GiftSection>
        </GiftDescription>
      </MainDiv>
      <MainDiv>
        <GiftDescription>
          <GiftSection>
            <GiftTitle>Óleo natural gotas de suavidade</GiftTitle>
            <Lines />
            <GiftPrice>BRL 52,52</GiftPrice>
            <GiftButton>Reservar</GiftButton>
          </GiftSection>
        </GiftDescription>
        <GiftPhotos
          style={{
            background: `url('https://www.purachuva.com.br/wp-content/uploads/%C3%B3leo-corporal-1.gif') no-repeat center center`,
          }}
        />
      </MainDiv>
      <MainDiv>
        <GiftPhotos
          style={{
            background: `url('https://www.ecycle.eco.br/media/catalog/product/cache/1/image/600x/9df78eab33525d08d6e5fb8d27136e95/m/e/meow.png') no-repeat center center `,
          }}
        />
        <GiftDescription>
          <GiftSection>
            <GiftTitle>Kit absorvente para fralda eco RN</GiftTitle>
            <Lines />
            <GiftPrice>BRL 96,99</GiftPrice>
            <GiftButton>Reservar</GiftButton>
          </GiftSection>
        </GiftDescription>
      </MainDiv>
      <MainDiv>
        <GiftDescription>
          <GiftSection>
            <GiftTitle>
              Esterilizador de Microondas, Philips Avent, Azul/Branco
            </GiftTitle>
            <Lines />
            <GiftPrice>BRL 52,52</GiftPrice>
            <GiftButton>Reservar</GiftButton>
          </GiftSection>
        </GiftDescription>
        <GiftPhotos
          style={{
            background: `url('https://images-na.ssl-images-amazon.com/images/I/61Bl3aTesrL._AC_SL1500_.jpg') no-repeat center center `,
          }}
        />
      </MainDiv>
      <MainDiv>
        <GiftPhotos
          style={{
            background: `url('https://images-na.ssl-images-amazon.com/images/I/61vz76JX6xL._AC_SL1309_.jpg') no-repeat center center`,
          }}
        />
        <GiftDescription>
          <GiftSection>
            <GiftTitle>Móbile para berço nuvem</GiftTitle>
            <Lines />
            <GiftPrice>BRL 96,99</GiftPrice>
            <GiftButton>Reservar</GiftButton>
          </GiftSection>
        </GiftDescription>
      </MainDiv>
    </div>
  )
}
