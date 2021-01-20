import styled from "styled-components"

export const Button = styled.button`
border-radius: 30px;
background: ${({ primary }) => (primary ? "#ff4040" : "rgba(234, 26, 143, 0.80)")};
white-space:nowrap;
padding: ${({ big }) => (big ? "16px 64px" : "10px 20px")};
color: #fff;
font-size: ${({fontbig}) => (fontbig ? "24px" : "20px")};
outline:none;
border:none;
cursor:pointer;
font-family:"Roboto", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

&:hover{
    transition: all 0.5s ease-out;
    transform: scale(1.05);
    background: ${({primary}) => (primary? "0467FB" : "rgba(22, 104, 178, 0.75)")};
       
    }
@media screen and (max-width: 960px){
    width:100%;
}
`