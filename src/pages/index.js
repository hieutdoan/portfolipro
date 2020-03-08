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
        title = "TikTok Site Redesign"
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
    text = "Hi there~ I'm Hieu and I'm currently a student at the University of Washington Bothell majoring in Interactive Media Design while minoring in Gender, Women, and Sexuality Studies.
    I'm also a student representative for my cohort and collaborate with faculty and other student representatives to help create the best experiences for students in the IMD program. 
    Outside of school, I love being crafty and creative~ I'm currenty teaching myself (and others in my cohort) how to embroider!
    Ever since I discovered UX Design, I've become passionate about weaving psychology, creative design, and storytelling to solve real-world problems and create captivating experiences. 
    Enthusiastic about taking on my next creative challenge, I strive to utilize my broad range of skills to create beautiful and better experiences for people around the world."
    />
  </div>
)

export default IndexPage
