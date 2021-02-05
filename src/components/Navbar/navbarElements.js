import styled from "styled-components"
import {Link} from "gatsby"
import Logo from "../../images/northlogo.png"
import {createGlobalStyle} from 'styled-components'
import SofiaRegular from "../fonts/Sofia\ Pro\ Regular\ Az.otf"

export const Nav = styled.nav`
background: ${({active}) => active ? "#fff" : "linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(255,255,255, 0) 100% )"};
transition: all 0.2s ease-in;
height: 80px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1.05rem;
position: sticky;
top: 0;
z-index:100;

@media screen and (max-width: 960px){
    background: ${({click}) => (click ? "#fff" :
    "white"
    )};
    transition: all 0.2s ease-in;
}
`


export const NavbarContainer = styled.div`
display:flex;
justify-content: space-between;
height: 80px;
z-index: 1;
width:100%;
max-width:1000px;
` 
export const NavLogo = styled(Link)`
color:#535353;
justify-self:flex-start;
cursor: pointer;
text-decoration:none;
font-size:1.5rem;
display:flex;
align-items:center;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

export const NavIcon = styled.img`
width:100%;
`

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    color:black;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

 export const NavMenu = styled.ul`
 display: flex;
 align-items: center;
 list-style: none;
 text-align: center;
 

 @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    top: ${({ click }) => (click ? "100%" : "-1000px")};
    opacity: 1;
    transition: all 0.2s ease;
    background: #fff;
  }
`
export const NavItem = styled.li`
 height:80px;

  @media screen and (max-width: 960px) {
    width: 100%;
  }
 
 `

 export const NavLinks = styled(Link)`
 color: #353535;
 display: flex;
 align-items: center;
 text-decoration: none;
 padding: 0.5rem 2rem;
 height:100%;
 font-family: SofiaLight;
 font-weight:550;
 

  &:hover{
    color: #c12280; 
    transition: 0.3s ease-in-out;
   }

   @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
        color: #c12280; 
    transition: 0.3s ease-in-out;;
    }
 }
`
NavIcon.defaultProps = {
    src: Logo,
};

export default createGlobalStyle`
@font-face {
    font-family: SofiaRegular;
    src: local('SofiaRegular'),
    url(${SofiaRegular}) format('otf');
    font-weight:300;
    font-style:normal;
}
`;