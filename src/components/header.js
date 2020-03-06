import React from 'react'
import Link from 'gatsby-link'
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

  // event listener, has the page scrolled by over 50px, if yes set state hasScrolled to true, else false 
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
          <Link to="/" >hieu d.</Link>
          <Link>my work</Link>
          <Link>get in touch</Link>
          <Link>resume</Link>
        </div>
      </div>
    )
  }
}

export default Header
