import React from "react"
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
            <GiftButton>Reservar</GiftButton>
          </GiftSection>
        </GiftDescription>
      </MainDiv>
      <MainDiv>
        <GiftDescription>
          <GiftSection>
            <GiftTitle>Saia de Berço Renda Branco</GiftTitle>
            <Lines />
            <GiftPrice>BRL 52,52</GiftPrice>
            <GiftButton>Reservar</GiftButton>
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
    </div>
  )
}
