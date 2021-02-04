import React, {useState, useEffect} from 'react'
import { IconContext } from "react-icons/lib"
import { FaBars, FaTimes } from "react-icons/fa"
import {Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon, NavMenu, NavItem, NavLinks} from "./navbarElements"

const Navbar = () => {
    const [click, setClick] = useState(false)
    const [scroll, setScroll] = useState(false)
    const checkActive = (match, location) => {
        if(!location) return false;
        const {pathname} = location;
        console.log(pathname);
        return pathname === "/";
    }
    const handleClick = () => setClick(!click)

    const changeNav = () => {
        if (window.scrollY >= 80) 
    {
        setScroll(true)
    }
    else {
            setScroll(false)

        }
    }
    
    useEffect(() => {
        window.addEventListener("scroll", changeNav)
    }, [] )

return (
    <>
    <IconContext.Provider value={{color : "#353535"}}>

      <Nav active={scroll} click={click}>
        <NavbarContainer>
            <NavLogo to="/">
                <NavIcon/>
            </NavLogo>
            <MobileIcon onClick={handleClick}>
                {click ? <FaTimes/> : <FaBars/>}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
            <NavItem>
                    <NavLinks to="/" activeClassName="active-link" isActive={checkActive} activeStyle={{color:"#c12280"}} >Home</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="/Aboutus" activeClassName="active-link" isActive={checkActive} activeStyle={{color:"#c12280"}}>About Us</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="/Portfolio" activeClassName="active-link" isActive={checkActive} activeStyle={{color:"#c12280"}}>Portfolio</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="/Careers" activeClassName="active-link" isActive={checkActive} activeStyle={{color:"#c12280"}}>Careers</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="/Contact"  activeClassName="active-link" isActive={checkActive} activeStyle={{color:"#c12280"}}>Contact</NavLinks>
                </NavItem>
            </NavMenu>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>

    </>
)

}


export default Navbar
