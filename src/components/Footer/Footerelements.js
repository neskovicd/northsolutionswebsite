import styled from "styled-components"
import {Link} from "gatsby"
import Logo from "../../images/northlogo.png"



export const FooterContainer = styled.div`
background-color: #101522;
display:flex;
flex-direction: column;
justify-content:center;
align-items: center;
width:90%;
margin-left:5%;
border-radius:40px 40px 0px 0px;
`

export const SocialMedia = styled.section`
max-width: 1000px;
width: 100%;
`

export const SocialMediaWrap = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
width:90%;
max-width:1000px;
margin:2rem auto;

@media screen and(max-width:820px){
    flex-direction:column;
}
`

export const SocialLogo = styled(Link)`

color:#fff;
justify-content:start;
cursor:pointer;
text-decoration:none;
font-size: 2rem;
display: flex;
align-items: center;
margin-bottom: 16px;
`

export const SocialIcon = styled.img`
margin-right: 10px;
width:100%;
`

export const WebsiteRights = styled.small`
color: #fff;
margin-bottom:16px;
`

export const SocialIcons = styled.div`
display : flex;
justify-content: space-between;
align-items:center;
width:240px;
`

export const SocialIconLink = styled.a`
color:#fff;
font-size:24px;
`
SocialIcon.defaultProps = {
    src: Logo,
};

