import React, { useState } from 'react';
import styled from 'styled-components';
import './NavBar.css'

const Navbar = ({ colors }) => {
    const [scrolled, setScrolled] = useState(false)
    const [ismobile, setismobile] = useState(
        window.innerWidth <= 811 ? true : false
    )
    const [menuIsOpen, setmenuIsOpen] = useState(ismobile ? false : true)

    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) setScrolled(true)
        else setScrolled(false)
    })

    window.addEventListener('resize', () => {
        if (window.innerWidth <= 820) setismobile(true)
        else setismobile(false)
    })

    const handleMenu = () => {
        setmenuIsOpen(!menuIsOpen)
    }

    return (
        <Nav background={colors.$background} scrolled={scrolled}>
            <LogoContent href="/" scrolled={scrolled}>
                <LogoText color={colors.$text}>FakTuR</LogoText>
            </LogoContent>
            {ismobile && (
                <Burger
                    color="#ffffff"
                    onClick={handleMenu}
                    menuIsOpen={menuIsOpen}>
                    <span></span>
                </Burger>
            )}
            <BurgerMenu menuIsOpen={menuIsOpen}
                ismobile={ismobile}
                background={colors.$background} >
                    <ul className='nav-ul'>
                        <li style={{"--clr": "#00ade1"}}>
                            <a href="/faction" text="Faction" ismobile={{ismobile}}>Faction</a>
                        </li>
                        <li style={{"--clr": "#dc00d4"}}>
                            <a href="/#news" text="Recrutements">Recrutements</a>
                        </li>
                        <li style={{"--clr": "#00dc82"}}>
                            <a href="/#news" text="Réalisations">Réalisations</a>
                        </li>
                        <li style={{"--clr": "#fb2f6d"}}>
                            <a href="/#news" text="News">News</a>
                        </li>
                    </ul>
            </BurgerMenu>
        </Nav>
    );
};

const Nav = styled.nav`
  background: ${props => props.background};
  height: ${props => (props.scrolled ? '70px' : '100px')};
  position: fixed;
  z-index: 999;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: height 0.4s;
`

const LogoContent = styled.a`
text-color: ${props => props.color};
font-size: 3em;
text-align: center;    
display: table-cell;
vertical-align: middle;
text-decoration: none; 
width: ${props => (props.scrolled ? '50px' : '70px')};
transition: width 0.4s, filter 0.4s;
padding: 20px;
`

const LogoText = styled.p`
color: #ffffff;
`
const Burger = styled.div`
  width: 30px;
  height: 30px;
  position: relative;
  cursor: pointer;
  margin-right: 30px;

  & span {
    background-color: ${props =>
      props.color ? (props.menuIsOpen ? 'transparent' : props.color) : 'white'};
    position: absolute;
    width: 100%;
    height: 3px;
    top: 50%;
    transform: translateY(-50%);
    transition: background 0.4s;

    &::before {
        background-color: ${props => (props.color ? props.color : 'white')};
      transform: ${props => props.menuIsOpen && 'rotate(45deg)'};
      margin-top: ${props => (props.menuIsOpen ? '0' : '10px')};
      content: '';
      position: absolute;
      width: 100%;
      height: 3px;
      transition: transform 0.4s, margin 0.4s;
    }

    &::after {
        background-color: ${props => (props.color ? props.color : 'white')};
      transform: ${props => props.menuIsOpen && 'rotate(-45deg)'};
      margin-top: ${props => (props.menuIsOpen ? '0' : '-10px')};
      content: '';
      position: absolute;
      width: 100%;
      height: 3px;
      transition: transform 0.4s, margin 0.4s;
    }
  }
`

const BurgerMenu = styled.div`
  flex-direction: ${props => (props.ismobile ? 'column' : 'row')};
  position: ${props => (props.ismobile ? 'absolute' : 'relative')};
  width: ${props => (props.ismobile ? '100%' : '80%')};
  min-width: ${props => (props.ismobile ? 'unset' : '600px')};
  top: ${props => (props.ismobile ? '100%' : '0')};
  background: ${props => props.background};
  padding-top: ${props => (props.ismobile && props.menuIsOpen ? '30px' : '0')};
  padding-bottom: ${props => (props.ismobile && props.menuIsOpen ? '30px' : '0')};
  max-height: ${props => (props.menuIsOpen ? '400px' : '0')};
  border-radius: 20px;
  align-items: center;
  justify-content: space-between;
  display: flex;
  overflow: hidden;
  transition: max-height 0.4s, padding 0.4s;

  & ul li a {
      color: ${props => (props.ismobile ? 'var(--clr)' : 'transparent')};
      filter: ${props => (props.ismobile ? 'drop-shadow(0 0 8px var(--clr))' : '')};
  }
`

export default Navbar;