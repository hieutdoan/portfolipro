import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card'
import Section from '../components/section'
import Wave from '../components/Wave'

const IndexPage = () => (
  <div>
    <div className="Hero">
      <div className="HeroGroup"> 
        <h1>hieu doan</h1>
        <p>UX Designer and Creativity Enthusiast!</p>
        <Wave />
      </div>
    </div>
    <div className="Cards">
      <div className="CardGroup">
      {/* <h2>Figma</h2> */}
      <Card 
        title = "LAPIS"
        text = "Class Project"
        image = {require('../images/lapis.jpg')} />

      <Card
        title = "TikTok"
        text = "Personal Project"
        image = {require('../images/tiktok.jpg')} />

      <Card
        title = "Clamor 2019"
        text = "Class Project"
        image = {require('../images/clamor.jpg')} />
      </div>
    </div>
    <Section
    title = "about me"
    text = "Mewtwo Strikes Back Pidgeotto Poliwag Caterpie Tangela Town Map Pansage. 
    Anim id est laborum Rotom Jigglypuff Smoochum Palpitoad Dragon Body Slam. 
    Meowth, thats right Latias Sunkern Cofagrigus Deerling Skuntank Chansey. 
    Qui officia deserunt mollit Potion Plusle quis nostrud exercitation Slugma Pokeball Cresselia. 
    Electric Scyther Giovanni youre not wearing shorts Pansear Minun Dark.
    Teleport Viridian City in voluptate velit esse cillum dolore eu fugiat nulla pariatur Noctowl Emolga Latios Beldum. 
    Water Chatot Dusclops Dunsparce Celebi Sawk Great Ball. Sed do eiusmod tempor incididunt Poliwag Great Ball Ditto Leech Life
    Arbok Dusknoir. Sand-Attack Emolga Volcano Badge Bronzor Stoutland Mienshao Froslass. 
    Blizzard Glitch City Rapidash Darumaka Elekid Glaceon Victreebel.
    Duis aute irure dolor in reprehenderit in voluptate ullamco laboris nisi Braviary Teleport Serperior Serperior 
    Escape Rope. Sand-Attack Tentacruel Purugly Gabite Sandile Torchic Slash.
     Teleport Rampardos Carvanha Chandelure Fire Amoonguss Blissey. Leaf Green Blaziken Vanillish 
     Abomasnow Zangoose Rampardos Whirlipede. Strength Poke Flute Reuniclus Jynx Slowpoke searching far and wide Wartortle."
    />
  </div>
)

export default IndexPage
