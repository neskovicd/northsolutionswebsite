import React from 'react'
import { FaAndroid, FaChrome, FaApple, FaProjectDiagram} from 'react-icons/fa'
import "./projectComponents.css"




function Projects() {
    return(
        <div className="container">
            <div className="projectDiagram">
            <div className="projectIcon">1</div>
            </div>
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
                        <a href="https://apps.apple.com/us/app/majstor-za-pivo/id1473955739" target="_blank">
                            <button className="btn">
                                <FaApple className="icon"/>
                                Appstore
                            </button>
                            </a>
                            <a href="https://play.google.com/store/apps/details?id=com.masterofbeer&hl=es_NIg
                            " target="_blank">
                            <button className="btn">
                                <FaAndroid className="icon"/>
                                Playstore
                            </button>
                            </a>
                            <a href="https://www.majstorzapivo.ba/" target="_blank">
                            <button className="btn">
                                <FaChrome className="icon"/>
                                Website
                            </button>
                            </a>
                        </div>
                        
                </div>
                <div className="containerItem">
                <div className="divImg bgImg2">
                    </div>
                    <span className="title">
                            Snjezna Dolina
                        </span>
                        <div className="description">
                          Snjezna Dolina, a website for the biggest complex of apartments on the best olympic mountain, Jahorina.
                        </div>
                        <div className="buttonWrapper">
                        <a href="https://snjeznadolina.ba/" target="_blank">
                            <button className="btn">
                                <FaChrome className="icon"/>
                                Website
                            </button>
                            </a>
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
                          A website for a big printing company where all of their work is posted daily.
                        </div>
                        <div className="buttonWrapper">
                        <a href="https://ermex.ba/" target="_blank">
                            <button className="btn">
                                <FaChrome className="icon"/>
                                Website
                            </button>
                            </a>
                        </div>
                </div>
                <div className="containerItem">
                <div className="divImg bgImg4">
                    </div>
                    <span className="title">
                            5th Dimension
                        </span>
                        <div className="description">
                          Webiste for the biggest billing software company in Sarajevo where all the data regarding its manuals can be downloaded.
                        </div>
                        <div className="buttonWrapper">
                        <a href="https://5th-dimension.ba/pocetna/" target="_blank">
                            <button className="btn">
                                <FaChrome className="icon"/>
                                Website
                            </button>
                            </a>
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
                          Delivery iOS and Android application for food chain with two admin pages for both deliverer and cook.
                        </div>
                        <div className="buttonWrapper">
                        <a href="https://apps.apple.com/us/app/bbq-dostava/id1465941391" target="_blank">
                            <button className="btn">
                                <FaApple className="icon"/>
                                Appstore
                            </button>
                            </a>
                            <a href="https://play.google.com/store/apps/details?id=com.aksifood2&hl=en&gl=US" target="_blank">
                            <button className="btn">
                                <FaAndroid className="icon"/>
                                Playstore
                            </button>
                            </a>
                        </div>
                </div>
                <div className="containerItem">
                <div className="divImg bgImg6">
                    </div>
                    <span className="title">
                            DDK Hub
                        </span>
                        <div className="description">
                          Creative website for a creative hub that boosts startups and game development projects.
                        </div>
                        <div className="buttonWrapper">
                        <a href="https://dedeka.ba/" target="_blank">
                            <button className="btn">
                                <FaChrome className="icon"/>
                                Website
                            </button>
                            </a>
                        </div>
                </div>
                
                
            </div>
            <div className="testimonialsWrapper testimonialsBg">
            <div className="projectDiagramTesti">
            <div className="projectIconTesti">2</div>
            </div>
            <div className="header">
                <div className="header1txtTesti">
                    our happy
                </div>
                <div className="header2txtTesti">
                clients
                </div>
                </div>
                <div class="rowrapper">
                <div className="testimonial1">
                  <div className="testimonialImage testImg">
                  </div>
                      <div className="testimonialText">
                          <div className="clientName">
                            Spaso Ristovic
                          </div>
                          <div className="clientNameCEO">
                            Ermex Printing CEO
                          </div>
                          <div className="clientDesc">
                            "I've always craved for a website that I can daily edit and upload to as I have daily production of high quality products I wish to share."
                          </div>
                      </div>
                  
                </div>
                <div className="testimonial1">
                  <div className="testimonialImage testImg2">
                  </div>
                      <div className="testimonialText">
                          <div className="clientName">
                            Sinisa Papaz
                          </div>
                          <div className="clientNameCEO">
                            Majstor za pivo CEO
                          </div>
                          <div className="clientDesc">
                           "North Solutions provided me with both mobile and web solution regarding my beer distribution and sales by unifying these two aspects."
                          </div>
                      </div>
                  
                </div>
                <div className="testimonial1">
                  <div className="testimonialImage testImg3">
                  </div>
                      <div className="testimonialText">
                          <div className="clientName">
                            Zlatko Borenovic
                          </div>
                          <div className="clientNameCEO">
                            Laguna doo CEO
                          </div>
                          <div className="clientDesc">
                            "Guys from North Solutions made a perfect website for bathroom sanitaries and tiles selling. I needed a stylish website for my accessories."
                          </div>
                      </div>
                  
                </div>
            </div>
            </div>
        </div>
      
    )
    
}

export default Projects