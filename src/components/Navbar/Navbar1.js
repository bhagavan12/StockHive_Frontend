import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';
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

function Navbar(props) {
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

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to='/' onClick={closeMobileMenu}>
              <NavIcon />
              STOCKS
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
              <NavItem   onClick={()=>(
                props.handleLogin()
              )}  >
                Logout
              </NavItem>
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
              </NavItemBtn> */}
              {/* <NavItemBtn>
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
