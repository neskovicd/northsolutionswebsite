import React from 'react'
import "./HeroSection.css"
import "./containerText.css"
import {Button} from '../ButtonElements'

function HeroSection() {
    return(

        <div className="hero-container">
            <div className="containerText">
            <h1>Create your dream site or application</h1>
            <p>Our team of specialized individuals is on your service to create <strong>your dream software.</strong> With profound experience in both web and app development, we offer services as SEO as well in order to launch your app the best way possible. Get started now!</p>
            <div className="containerText-btns">
                <a href="/Contact" target="_blank">
                <Button>Contact us</Button>
                </a>
            </div>
            </div>
            <div className = "showoffImg"/>
        </div>
    )
    
}

export default HeroSection