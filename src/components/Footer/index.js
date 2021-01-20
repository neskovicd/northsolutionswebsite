import React, {useState, } from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitch, FaTwitter} from 'react-icons/fa'
import { FooterContainer, SocialIconLink, SocialIcon, SocialIcons, SocialMedia, SocialMediaWrap, WebsiteRights, SocialLogo} from "./Footerelements"

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
    fetch("https://loving-ride-2090d9.netlify.app", {
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
    <SocialMedia>
        <SocialMediaWrap>
            <SocialLogo>
                <SocialIcon/>
            </SocialLogo>
            <WebsiteRights>North Solutions © {new Date().getFullYear()}</WebsiteRights>
            <SocialIcons>
                <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                    <FaFacebook/>
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                    <FaInstagram/>
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                    <FaTwitter/>
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                    <FaLinkedin/>
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                    <FaTwitch/>
                </SocialIconLink>
            </SocialIcons>
        </SocialMediaWrap>
    </SocialMedia>
   <form name="contact"
   method = "POST"
   data-netlify="true"
   data-netlify-honeypot = "bot-field"
   onSubmit={handleSubmit}>
       <input type="hidden" name="form-name" value="contact"/>
       <label htmlFor = "nmame">Name</label>
       <input
       id = "name"
       type = "text"
       name = "name"
       onChange = {handleChange}
       value = {formState.name}
       placeholder="enter your name"/>
       <label htmlFor = "nmame">email</label>
       <input
       id = "name"
       type = "text"
       name = "email"
       onChange = {handleChange}
       value = {formState.email}
       placeholder="enter your email"/>
       <button type="submit">Submit</button>
   </form>
</FooterContainer>
    
)
}
export default Footer