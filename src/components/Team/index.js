import React from 'react'
import "./Team.css"
import Dragan from "../../images/Dragan.jpg"
import Ermin from "../../images/Ermin.jpg"
import Jasmin from "../../images/Jasmin.jpg"
import Andrej from "../../images/Andrej.jpg"
import Zlatan from "../../images/Zlatan.jpg"
import Jovana from "../../images/Jovana.jpg"
import { FaLinkedin, FaEnvelopeOpen } from "react-icons/fa";

function Team() {
    return(
    
        <div className="hero-container222">
            <div className="textWrapper2222">
                <div class="spanwrapper2222"><span className="spanCircle2222">3</span></div>
            <div className="containerNaslov222">View our</div>
            <div className="containerNaslov2223">Team</div>

            <div id="team" class="team-area">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
     
                </div>
            </div>
                <div class="row team-items">
                    <div class="col-md-4 single-item">
                        <div class="item">
                            <div class="thumb">
                                <img class="img-fluid" src={Dragan} alt="Thumb"/>
                                <div class="overlay">
                                    <h4>Dragan Neskovic</h4>
                                    <p>
                                        Full stack web and app engineer with several years of experience in both development and tutoring. PhD in Computer Science.
                                    </p>
                                    <div class="social">
                                    <ul>
                                            <li class="twitter">
                                                <a href="#"><FaLinkedin/></a>
                                            </li>
                                     
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="info">
                                <span class="message">
                                    <a href="#"><FaEnvelopeOpen/></a>
                                </span>
                                <h4>Dragan</h4>
                                <span>Full-stack engineer</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 single-item">
                        <div class="item">
                            <div class="thumb">
                            <img class="img-fluid" src={Jasmin} alt="Thumb"/>
                                <div class="overlay">
                                    <h4>Jasmin Skamo</h4>
                                    <p>
                                        Full-stack web development expert and engineer with five years of experience, one of the best Udemy tutors.
                                    </p>
                                    <div class="social">
                                        <ul>
                                            <li class="twitter">
                                            <a href="#"><FaLinkedin/></a>
                                            </li>
                                         
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="info">
                                <span class="message">
                                <a href="#"><FaEnvelopeOpen/></a>
                                </span>
                                <h4>Jasmin</h4>
                                <span>Full-stack engineer</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 single-item">
                        <div class="item">
                            <div class="thumb">
                            <img class="img-fluid" src={Ermin} alt="Thumb"/>
                                <div class="overlay">
                                    <h4>Ermin Kreponic</h4>
                                    <p>
                                        One of the best dev ops engineers and ethical hackers having more than 500,000 Udemy stundets and hundred of safely secured sites.
                                    </p>
                                    <div class="social">
                                    <ul>
                                            <li class="twitter">
                                            <a href="#"><FaLinkedin/></a>
                                            </li>
                                          
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="info">
                                <span class="message">
                                <a href="#"><FaEnvelopeOpen/></a>
                                </span>
                                <h4>Ermin</h4>
                                <span>Dev Ops engineer</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 single-item">
                        <div class="item">
                            <div class="thumb">
                            <img class="img-fluid" src={Andrej} alt="Thumb"/>
                                <div class="overlay">
                                    <h4>Andrej Crnic</h4>
                                    <p>
                                        Cretive mind of our team with more than five years of experience in UI/UX design, having profound knowledge in most design software.
                                    </p>
                                    <div class="social">
                                    <ul>
                                            <li class="twitter">
                                            <a href="#"><FaLinkedin/></a>
                                            </li>
                                          
                                          
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="info">
                                <span class="message">
                                <a href="#"><FaEnvelopeOpen/></a>
                                </span>
                                <h4>Andrej</h4>
                                <span>UI/UX Designer</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 single-item">
                        <div class="item">
                            <div class="thumb">
                            <img class="img-fluid" src={Jovana} alt="Thumb"/>
                                <div class="overlay">
                                    <h4>Jovana Sehic</h4>
                                    <p>
                                        Jovana is our app developer specialized in Android development having more than three years in app development field.
                                    </p>
                                    <div class="social">
                                    <ul>
                                            <li class="twitter">
                                            <a href="#"><FaLinkedin/></a>
                                            </li>
                                           
                                          
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="info">
                                <span class="message">
                                <a href="#"><FaEnvelopeOpen/></a>
                                </span>
                                <h4>Jovana</h4>
                                <span>App Developer</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 single-item">
                        <div class="item">
                            <div class="thumb">
                            <img class="img-fluid" src={Zlatan} alt="Thumb"/>
                                <div class="overlay">
                                    <h4>Zlatan Paleksic</h4>
                                    <p>
                                        Zlatan is our backend and data wizard, focused on data manipulation, migration and deployment.
                                    </p>
                                    <div class="social">
                                    <ul>
                                            <li class="twitter">
                                            <a href="#"><FaLinkedin/></a>
                                            </li>
                                           
                                          
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="info">
                                <span class="message">
                                <a href="#"><FaEnvelopeOpen/></a>
                                </span>
                                <h4>Zlatan</h4>
                                <span>Data & back-end scientist</span>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
                </div>
            
        </div>
    )
    
}

export default Team