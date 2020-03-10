import React from 'react'
import styled from 'styled-components'
import Wave from './Wave'


const SectionGroup = styled.div`
    margin: 100px 0;
    background: #dcd0ff;
    height: 1000px;
    position: relative;
 
    @media (max-width: 640px) {
        height:1200px;
    }
`

const SectionTitleGroup = styled.div`
    max-width: 100%;
    margin: 40px; 
`

const SectionTitle = styled.h3`
    color: #8A2BE2;
    font-size: 60px;
    line-height: 1.2;
    text-align: center;
    padding: 150px 0 50px;
 
    @media (max-width: 640px) {
        font-size: 40px;
    }
`

const SectionText = styled.p`
    color: black;
    text-align: center;
    font-size: 24px;

    @media (max-width: 800px) {
        font-size: 20px; 
    }
`
const SectionTextTwo = styled.p`
    color: black;
    text-align: center;
    font-size: 24px;

    @media (max-width: 800px) {
        font-size: 20px; 
    }
`

const WaveTop = styled.div`
    position: absolute;
    width: 100%;
    top: -6px;
    transform: rotate(180deg)
`

const WaveBottom = styled.div`
    position: absolute;
    width: 100%;
    bottom: -6px;
`
const SectionTwo = props => (
    <SectionGroup background={props.background}
    id={props.id}>
        <WaveTop><Wave /></WaveTop>
        <WaveBottom><Wave /></WaveBottom>
        <br/>
        <br/>
        <SectionTitleGroup>
            <SectionTitle>{props.title}</SectionTitle>
            <SectionText>{props.text}</SectionText>
            <SectionTextTwo>{props.texttwo}</SectionTextTwo>

        </SectionTitleGroup>
    </SectionGroup>
)

export default SectionTwo