import React from "react"

import FirstSection from "../components/FirstSection/firstSection"
// import TimerSection from "../components/TimerSection/timer"
import GiftSection from "../components/giftsSection/giftObject"
import Phrase from "../components/phrase/phrase"
import Album from "../components/albumSection/album"

import "../globalStyles/global.css"

export default function Home() {
  return (
    <div>
      <FirstSection />
      <GiftSection />
      <Phrase />
      <Album />
    </div>
  )
}
