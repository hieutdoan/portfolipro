import React from 'react'
/* This implements smooth scrolling using the link tag */
import {Link, animateScroll as scroll} from 'react-scroll'
import './Header.css'

class Header extends React.Component { 

  constructor (props) {
    super(props)

    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll)
  }

  // event listener, has the page scrolled by over 50px? if yes set state hasScrolled to true, else false 
  handleScroll = (event) => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50)
    {
      this.setState({hasScrolled: true})
    } else {
      this.setState({hasScrolled: false})
    }
  }

  render () 
  { return (
    // this asks if the page has scrolled, if yes give it classname header and headerscrolled, else header
      <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
        <div className='HeaderGroup'> 
          <Link to="sectionone" smooth={true} duration={1250} offset={60}>about</Link> 
          <Link to="Cards" smooth={true} duration={1250} offset={-215}>my work</Link>
          <Link to="sectiontwo" smooth={true} duration={1250}>contact me</Link>
          <a target="_blank" href="https://drive.google.com/file/d/1oFI5atfFdjrNf-5URiiPeSz5FAP67gtY/preview">resume</a>
        </div>
      </div>
    )
  }
}

export default Header
