import React, {useState, } from 'react'
import { FaFacebook, FaGithub, FaLinkedin, FaMailBulk} from 'react-icons/fa'
import { FooterContainer, SocialIconLink, SocialIcon, SocialIcons, SocialMedia, SocialMediaWrap, WebsiteRights, SocialLogo} from "./Footerelements"
import "./style.css"


const Footer = () => {

    const [formState, setFormState] = useState({
    name: "",
    email: ""
})

const handleChange = e =>{
    setFormState({
        ...formState,
        [e.target.name]: e.target.value,
        [e.target.email]: e.target.value
    })
}
const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

const handleSubmit = e =>{
    fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...formState })
      })
        .then(() => alert("Success!"))
        .catch(error => alert(error));

      e.preventDefault();
}
return(

<FooterContainer>
    <div class="vWrapper">
        <div class="listComponent">
        <label class="llabel">Links</label>
<ul class = "listLinks">
    <li class="linkItem">Home</li>
    <li class="linkItem">About</li>
    <li class="linkItem">Contact</li>
</ul>
</div>
<div class="listComponent1">
    <label class="llabel1">Company Info</label>
<ul class = "listLinks1">

    <li class="linkItem1">Location: <strong>Sarajevo, BiH</strong></li>
    <li class="linkItem1">Address: <strong>Kolodvorska 5</strong></li>
    <li class="linkItem1">Contact: <strong>info@northsolutions.io</strong></li>
</ul>
</div>

<div class ="contactWrapper">
    <label class = "inptText">let us contact you</label>
   <form
   class="contactForm"
   name="contact"
   method = "POST"
   data-netlify="true"
   data-netlify-honeypot = "bot-field"
   onSubmit={handleSubmit}>
       <input type="hidden" name="form-name" value="contact"/>
       <input class="inputField"
       id = "name"
       type = "text"
       name = "name"
       onChange = {handleChange}
       value = {formState.name}
       placeholder="enter your e-mail"/>

       <button class="submit" type="submit">Submit</button>
   </form>
   </div>
   </div>
    <SocialMedia>
        <SocialMediaWrap>
            <SocialLogo>
                <SocialIcon/>
            </SocialLogo>
            <WebsiteRights>North Solutions © {new Date().getFullYear()}</WebsiteRights>
            <SocialIcons>
                <SocialIconLink href="https://www.linkedin.com/company/north-solutions-sweden-ab" target="_blank" aria-label="Facebook">
                    <FaFacebook/>
                </SocialIconLink>
                <SocialIconLink href="https://www.linkedin.com/company/north-solutions-sweden-ab" target="_blank" aria-label="Facebook">
                    <FaLinkedin/>
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                    <FaGithub/>
                </SocialIconLink>
                <SocialIconLink href="info@northsolutions.com" target="_blank" aria-label="Facebook">
                    <FaMailBulk/>
                </SocialIconLink>
            </SocialIcons>
        </SocialMediaWrap>
    </SocialMedia>
  
 
</FooterContainer>
    
)
}
export default Footer