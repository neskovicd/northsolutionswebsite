import styled from "styled-components"
import {Link} from "gatsby"
import Logo2 from "../../images/northlogo2.png"

export const FooterContainer = styled.div`
padding-top:1rem;
background-color: #101522;
display:flex;
flex-direction: COLUMN;
justify-content:center;
align-items: center;
width:80%;
margin-left:10%;
border-radius:40px 40px 0px 0px;

@media screen and (max-width: 960px){
     width:100%;
     margin-left:0;
     display:flex;
     flex-direction:column;
 }
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
max-width:900px;
margin:1.5rem auto;

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

`

export const SocialIcon = styled.img`
width:100%;
`

export const WebsiteRights = styled.small`
color: #fff;
font-size:16px;
`

export const SocialIcons = styled.div`
display : flex;
justify-content: space-between;
align-items:center;
width:240px;
@media screen and (max-width: 960px){
     display:none;
     visibility:hidden;
 }
`

export const SocialIconLink = styled.a`
color:#fff;
font-size:24px;
`
SocialIcon.defaultProps = {
    src: Logo2,
};

