import React from 'react'
import { FaAndroid, FaChrome, FaApple } from 'react-icons/fa'
import "./projectComponents.css"




function Projects() {
    return(
        <div className="container">
            <div className="header">
                <div className="header1txt">
                    some of our
                </div>
                <div className="header2txt">
                    projects
                </div>
            </div>
            <div className="containerItems">
                <div className="containerItem">
                <div className="divImg bgImg">
                    </div>
                    <span className="title">
                            Majstor za pivo
                        </span>
                        <div className="description">
                          Majstor za pivo is both mobile and web application made for beer distribution
                        </div>
                        <div className="buttonWrapper">
                            <button className="btn">
                                <FaApple className="icon"/>
                                Appstore
                            </button>
                            <button className="btn">
                                <FaAndroid className="icon"/>
                                Playstore
                            </button>
                            <button className="btn">
                                <FaChrome className="icon"/>
                                Website
                            </button>
                        </div>
                </div>
                <div className="containerItem">
                <div className="divImg bgImg2">
                    </div>
                    <span className="title">
                            Snjezna Dolina
                        </span>
                        <div className="description">
                          Majstor za pivo is both mobile and web application made for beer distribution
                        </div>
                        <div className="buttonWrapper">
                            <button className="btn">
                                <FaChrome className="icon"/>
                                Website
                            </button>
                        </div>
                </div>
                
                
            </div>
            <div className="containerItems">
                <div className="containerItem">
                <div className="divImg bgImg3">
                    </div>
                    <span className="title">
                            Ermex Printing
                        </span>
                        <div className="description">
                          Majstor za pivo is both mobile and web application made for beer distribution
                        </div>
                        <div className="buttonWrapper">
                            <button className="btn">
                                <FaChrome className="icon"/>
                                Website
                            </button>
                        </div>
                </div>
                <div className="containerItem">
                <div className="divImg bgImg4">
                    </div>
                    <span className="title">
                            5th Dimension
                        </span>
                        <div className="description">
                          Majstor za pivo is both mobile and web application made for beer distribution
                        </div>
                        <div className="buttonWrapper">
                            <button className="btn">
                                <FaChrome className="icon"/>
                                Website
                            </button>
                        </div>
                </div>
                
                
            </div>
            <div className="containerItems">
                <div className="containerItem">
                <div className="divImg bgImg5">
                    </div>
                    <span className="title">
                            BBQ Delivery
                        </span>
                        <div className="description">
                          Majstor za pivo is both mobile and web application made for beer distribution
                        </div>
                        <div className="buttonWrapper">
                            <button className="btn">
                                <FaApple className="icon"/>
                                Appstore
                            </button>
                            <button className="btn">
                                <FaAndroid className="icon"/>
                                Playstore
                            </button>
                        </div>
                </div>
                <div className="containerItem">
                <div className="divImg bgImg6">
                    </div>
                    <span className="title">
                            DDK Hub
                        </span>
                        <div className="description">
                          Majstor za pivo is both mobile and web application made for beer distribution
                        </div>
                        <div className="buttonWrapper">
                            <button className="btn">
                                <FaChrome className="icon"/>
                                Website
                            </button>
                        </div>
                </div>
                
                
            </div>
        </div>
      
    )
    
}

export default Projects