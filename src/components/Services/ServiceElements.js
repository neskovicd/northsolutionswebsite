import styled from "styled-components"
import {createGlobalStyle} from 'styled-components'
import {createGlobalStyleBold} from 'styled-components'
import SofiaRegular from "../fonts/Sofia\ Pro\ Regular\ Az.otf"
import SofiaBold from "../fonts/Sofia\ Pro\ Semi\ Bold\ Az.otf"
import SofiaLight from "../fonts/Sofia\ Pro\ Light\ Az.otf"
import banner from "../../images/banner.png"


export const Services = styled.div`
display:flex;
flex-direction: row;
justify-content:center;
column-gap: 20rem;
padding: 50px 0;
align-items: center;
height:50vh;


@media screen and (max-width:920px){
background-color: #fff;
display:flex;
flex-direction: column;
justify-content:center;
align-items: center;
height:30vh;
}

`

Services.defaultProps ={
    src:banner,
};

export const ServicesContainer = styled.div`
width:40vh;
display:flex;
flex-direction: column;
justify-content:center;
padding: 1px;
align-items:center;
`

export const ServiceIcons = styled.img`
width:14rem;
color: #101522;
justify-content:start;
text-decoration:none;
font-size: 1rem;
display: flex;
align-items: center;
margin-bottom: 5px;

&:hover{
    transform:scale(1.05);
    transition: 0.3s ease-out;
}
`
export const Naslov = styled.span`
color:#c12280;
margin-top:3rem;
font-size:70px;
font-family: SofiaBold;
font-weight:400;
`
export const Podnaslov = styled.span`
margin-top:10px;
font-size:50px;
font-family: SofiaRegular;
font-weight:400;
color:#353535;
margin-left:0.5rem;
margin-bottom:1rem;
`
export const Wrapper = styled.div`
background-image : url(${banner});
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`

export const ServicesText = styled.span`
color: #c12280;
font-size:60px;
display:flex;
justify-content:start;
font-family: Sofiabold;
font-weight: 500;
`

export const ServicesText2 = styled.span`
color: #1668b2;
font-size:60px;
display:flex;
justify-content:start;
font-family: Sofiabold;
font-weight: 500;
`

export const ServicesDescription = styled.span`
margin-top:10px;
font-size:22px;
color:#353535;
font-family:SofiaLight;
text-align:center;
`
export default createGlobalStyle`
@font-face {
    font-family: SofiaRegular, SofiaBold;
    src: local('SofiaRegular','SofiaBold','SofiaLight'),
    url(${SofiaRegular},${SofiaBold},${SofiaLight}) format('otf');
    font-weight:300;
    font-style:normal;
}
`;
