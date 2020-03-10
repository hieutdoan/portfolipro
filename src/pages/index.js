import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card'
import Section from '../components/section'
import Wave from '../components/Wave'
import SectionTwo from '../components/sectiontwo'


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
      <a href="https://www.notion.so/LAPIS-c5c5934b27ad4e9faec70211e30fab2c" target="_blank">
      <Card 
        title = "LAPIS"
        text = "Class Project"
        image = {require('../images/lapis.jpg')} />
      </a>

      <a href="https://www.notion.so/TikTok-Homepage-Redesign-cdf4d9b8f5f145f39c0bff7ec54e2fb5" target="_blank">
      <Card
        title = "TikTok Site Redesign"
        text = "Personal Project"
        image = {require('../images/tiktok.jpg')} />
      </a>

      <a href="https://www.notion.so/Clamor-2019-Design-Editor-71e0f803fb2b470096ad5509f43bd316" target="_blank">
      <Card
        title = "Clamor 2019"
        text = "Class Project"
        image = {require('../images/clamor.jpg')} />
      </a>

      </div>
    </div>
    <Section
    id="sectionone"
    title = "about me"
    text = "Hi there~ I'm Hieu and I'm currently a student at the University of Washington Bothell majoring in Interactive Media Design while minoring in Gender, Women, and Sexuality Studies.
    I'm also a student representative for my cohort and collaborate with faculty and other student representatives to help create the best experiences for students in the IMD program. 
    Outside of school, I love being crafty and creative~ I'm currenty teaching myself (and others in my cohort) how to embroider!
    Ever since I discovered UX Design, I've become passionate about weaving psychology, creative design, and storytelling to solve real-world problems and create captivating experiences. 
    Enthusiastic about taking on my next creative challenge, I strive to utilize my broad range of skills to create beautiful and better experiences for people around the world."
    />
    <div>
      <SectionTwo
      id="sectiontwo"
      title ="contact"
      text = "email: hieud@uw.edu"
      texttwo ="linkedin: www.linkedin.com/in/hieuddesigns/"
      />
    </div>
  </div>
)

export default IndexPage
