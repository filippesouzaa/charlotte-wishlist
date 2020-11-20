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

function FancyModalButton() {
  
  const [isOpen, setIsOpen] = useState(false)
  const [opacity, setOpacity] = useState(0)

  function Abriu(){
    console.log('Abriu modal')
  }

  function toggleModal(e) {
    setIsOpen(!isOpen)
    console.log('Clicou no button')

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
        <GiftModalContent />
      </StyledModal>
    </div>
  )
}

const FadingBackground = styled(BaseModalBackground)`
  opacity: ${props => props.opacity};
  transition: opacity ease 200ms;
`


const GiftObject = () => {
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
        <MainDiv key={item.id}>
          <GiftPhotos src={item.image} />
          <GiftDescription>
            <GiftSection>
              <GiftTitle>{item.nome}</GiftTitle>
              <Lines />
              <GiftPrice>BRL {item.preco}</GiftPrice>
              <ModalProvider backgroundComponent={FadingBackground}>
                <FancyModalButton/>
              </ModalProvider>
            </GiftSection>
          </GiftDescription>
        </MainDiv>
      ))}
      ;
      {/* <MainDiv>
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
      </MainDiv> */}
    </div>
  )
}

export default GiftObject
