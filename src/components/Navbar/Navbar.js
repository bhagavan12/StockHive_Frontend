import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';
import { Button } from '../../globalStyles';
import styled from 'styled-components';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavItemBtn,
  NavLinks,
  NavBtnLink
} from './Navbar.elements';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);
  const DropdownContainer = styled.div`
  position: relative;
  background-color:#000
`;

const DropdownButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
  background-color: #000;
  color: #fff;
  cursor: pointer;
  position: relative;
  z-index: 1;
  &:after {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    width: 0;
    height: 0;
    border-top: 6px solid transparent;
    border-bottom: 6px solid transparent;
    border-left: 6px solid #fff;
  }
  &:hover {
    color: #4b59f7;
    transition: all 0.3s ease;
  }
`;


const DropdownMenu = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  padding: 0.5em 0;
  margin: 0;
  list-style: none;
`;

const DropdownMenuItem = styled.li`
  padding: 0.5em 1em;
  cursor: pointer;
`;

const [isOpen, setIsOpen] = useState(false);
const [isOpen1, setIsOpen1] = useState(false);
const toggleDropdown1 = () => {
  setIsOpen1(!isOpen1);
};
const toggleDropdown = () => {
  setIsOpen(!isOpen);
};
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to='/' onClick={closeMobileMenu}>
              <NavIcon />
              STOCKHIVE
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to='/' onClick={closeMobileMenu}>
                  Home
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/services' onClick={closeMobileMenu}>
                  About
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/aboutus' onClick={closeMobileMenu}>
                Services
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/stock' onClick={closeMobileMenu}>
                Stocks
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/news' onClick={closeMobileMenu}>
                News
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/newsform' onClick={closeMobileMenu}>
                NEWS form
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/stockss' onClick={closeMobileMenu}>
                tradingview
                </NavLinks>
              </NavItem>
              {/* <NavItem>
                <NavLinks to='#' onClick={closeMobileMenu}>
                Feedback
                </NavLinks>
              </NavItem> */}
              {/* <NavItem>
                <NavLinks to='/protifolio' onClick={closeMobileMenu}>
                Winning Portifolio
                </NavLinks>
              </NavItem> */}
              <DropdownContainer>
                <DropdownButton onClick={toggleDropdown1}>Portifolio</DropdownButton>
                {isOpen1 && (
                  <DropdownMenu>
                    <DropdownMenuItem>
                    <NavItem>
                      <NavLinks to='/protifolio' onClick={closeMobileMenu}>
                      Winning Portifolio
                      </NavLinks>
                    </NavItem>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                    <NavItem>
                      <NavLinks to='/mover' onClick={closeMobileMenu}>
                        Movers
                      </NavLinks>
                    </NavItem>
                    </DropdownMenuItem>
                  </DropdownMenu>
                )}
              </DropdownContainer>
              <NavItem>
                <NavLinks to='/heatmap' onClick={closeMobileMenu}>
                Heat map
                </NavLinks>
              </NavItem>
              <DropdownContainer>
                <DropdownButton onClick={toggleDropdown}>Moving Averages</DropdownButton>
                {isOpen && (
                  <DropdownMenu>
                    <DropdownMenuItem>
                    <NavItem>
                      <NavLinks to='/sma' onClick={closeMobileMenu}>
                        SMA
                      </NavLinks>
                    </NavItem>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                    <NavItem>
                      <NavLinks to='/ema' onClick={closeMobileMenu}>
                        EMA
                      </NavLinks>
                    </NavItem>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                    <NavItem>
                      <NavLinks to='/wma' onClick={closeMobileMenu}>
                        WMA
                      </NavLinks>
                    </NavItem>
                    </DropdownMenuItem>
                  </DropdownMenu>
                )}
              </DropdownContainer>
              {/* <NavItemBtn>
                {button ? (
                  <NavBtnLink to='/sign-up'>
                    <Button primary>SIGN UP</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to='/sign-up'>
                    <Button onClick={closeMobileMenu} fontBig primary>
                      SIGN UP
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
              <NavItemBtn>
                {button ? (
                  <NavBtnLink to='/login'>
                    <Button primary>SIGN IN</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to='/login'>
                    <Button onClick={closeMobileMenu} fontBig primary>
                      SIGN IN
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn> */}
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
