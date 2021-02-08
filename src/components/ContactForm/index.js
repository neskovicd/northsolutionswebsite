import React,{useState,} from 'react'
import "./contactElements.css"
import {FaEnvelope, FaPhone, FaLocationArrow, FaFacebook, FaLinkedin} from "react-icons/fa"

function HeroAboutSection() {
    const [formState, setFormState] = useState({
        name: "",
        lastname: "",
        email: "",
        phone:"",
        message:""

    })
    
    const handleChange = e =>{
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
            [e.target.lastname]: e.target.value,
            [e.target.phone]: e.target.value,
            [e.target.email]: e.target.value,
            [e.target.message]: e.target.value
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

        <div className="mainContactWrapper">
         <div className="squareDiv">
             <div className="contactTextWrap">
               <div className="contacTitle">
                   Contact information
               </div>
               <div className="contactDesc">
                   Fill up the form and contact us, get response in less than a day.
               </div>
               <div className="envelopeDiv">
               <FaEnvelope className="FaEnvelope"/>
               hello@northsolutions.io
               </div>
               <div className="phoneDiv">
               <FaPhone className="FaPhone"/>
               +38766208155
               </div>
               <div className="locationDiv">
               <FaLocationArrow className="FaLocationArrow"/>
               Kolodvorska 5, Sarajevo, BiH
             </div>
             </div>
            

             
             <div className="circleWrapper">
             <a href="https://www.linkedin.com/company/north-solutions-sweden-ab" target="_blank">
             <FaFacebook className="Facebook"/>
             </a>
             <a href="https://www.linkedin.com/company/north-solutions-sweden-ab" target="_blank">
             <FaLinkedin className="Linkedin"/>
             </a>
             <div className="insideCircle2"/>
             <div className="insideCircle1"/>
             </div>
         </div>
         <form
   class="contactForm1"
   name="contactForm1"
   method = "POST"
   data-netlify="true"
   data-netlify-honeypot = "bot-field"
   onSubmit={handleSubmit}>
         <div 
         className="Form">
             <div className="column1">
             <div className="firstColumn">
                 <span className="FirstName">First Name</span>
                 <input className="FNInput"
                 id = "name"
                 type = "text"
                 name = "name"
                 onChange = {handleChange}
                 value = {formState.name}
                 />
             </div>
             <div className="firstColumn">
                 <span className="FirstName">Last Name</span>
                 <input className="FNInput"
                 id = "lastname"
                 type = "text"
                 name = "lastname"
                 onChange = {handleChange}
                 value = {formState.lastname}
                 />
             </div>
             </div>
             <div className="column2">
             <div className="firstColumn">
                 <span className="FirstName">E-mail</span>
                 <input className="FNInput"
                 id = "email"
                 type = "text"
                 name = "email"
                 onChange = {handleChange}
                 value = {formState.email}
                 />
             </div>
             <div className="firstColumn">
                 <span className="FirstName">Phone</span>
                 <input className="FNInput"
                 id = "phone"
                 type = "text"
                 name = "phone"
                 onChange = {handleChange}
                 value = {formState.phone}/>
             </div>
             </div>
             <div className="column3">
             <div className="firstColumn">
                 <span className="FirstName">Message</span>
                 <input className="Message"
                 id = "message"
                 type = "text"
                 name = "message"
                 onChange = {handleChange}
                 value = {formState.message}
                 />
             </div>
             </div>
             <div className="buttonDiv">
             
             <button className="contactButton submit" type="submit">Send</button>
             </div>
         </div>
         </form>
        </div>
    )
    
}

export default HeroAboutSection