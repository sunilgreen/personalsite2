import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import PDC from '../assets/pdc.png';
import PROVERBIA from '../assets/cover.png';
import GOPEER from '../assets/gopeer.png';
import URCONVEY from '../assets/uc.png';
import PISIG from '../assets/pisig.png';
import PROJECTX from '../assets/projectx.jpg';
import './Styles/MyWork.css'

export default function MyWork({id}) {
    return (
        <Container id={id} fluid>
            <br/>
            <h3 className="title">My Work</h3>
            <Row>
            <Col id="coursework" sm={3}>
                <h3 className="subtitle">Coursework</h3>    
                <ul id="courseworklist">
                    <li>CS 180 Object Oriented Programming</li>  
                    <li>CS 182 Principles of Computer Science</li>
                    <li>CS 240 Programming in C</li>  
                    <li>CS 250 Computer Architecture</li>
                    <li>CS 251 Data Structures And Algorithms</li>
                    <li>CS 252 Systems Programming</li>
                    <li>CS 307 Software Engineering</li>
                    <li>CS 348 Databases </li>
                    <li>CS 373 Data Mining and Machine Learning</li>
                    <li>POL 231 U.S. Foreign Policy </li>
                    <li>POL 235 Rich and Poor Nations </li>
                    <li>POL 300 Political Science Research</li>
                    <li>POL 373 Campaigns and Elections</li>
                    <li>POL 461 Consitutional Law</li>
                </ul>        
            </Col>

            <Col id="outsideclass">
                <h3 className="subtitle">Outside the Classroom</h3>    
                <img id="pdcimage" src={PDC}></img> 
                <h4>Purdue PDC</h4>
                <p className="bodytext">I am the current President
                    and one of the founding members of The Political Discourse Club.
                    It's an organization that helps students on campus talk about politics
                    civily. We also work on publishing student created media through our website <a  href="https://purduepdc.org">purduepdc.org.  </a> 
                    Check out the site to see our student created articles, cartoons, and podcast.
                </p>
                <br/>
                <br/>

                <img id="urconvey" src={URCONVEY}></img>
                <h4 className="sectiontitle">UrConvey</h4>
                <p className="bodytext">I interned over the summer with a startup that aims to change the way we rideshre. I was a project management
                                        and software engineering intern. Information about the company can be found <a href="https://www.urconvey.com/">here.</a>
                </p>

                <br/>
                <br/>

                <img id="urconvey" src={PISIG}></img>
                <h4 className="sectiontitle">Pi Sigma Alpha Delta Omega</h4>
                <p className="bodytext">I serve as the outreach coordinator for Purdue's Pi Sigma Alpha Chapter. 
                                    More information about the organization can be found on our <a href="https://www.instagram.com/purdue_pisig/">instagram.</a>
                </p>

                <br/>
                <br/>

                <img id="gopeerimage" src={GOPEER}></img>
                <h4 className="sectiontitle">GoPeer</h4>
                <p className="bodytext">I tutor online through a service called GoPeer. I can tutor a wide 
                                        range of subjects including Math through Calculus II, A.P. U.S. History, A.P. World History
                                        and basic Spanish. You can find my profile for the service <a href="https://gopeer.org/profile/5baa72773354c231625738db?referrer=1WXIVl">here.</a>
                </p>

                

               


                       
            </Col>

            <Col id="personalprojects" sm={3}>
                <h3 className="subtitle">Personal Projects</h3>
                <img id="comingsoon" src={PROVERBIA}></img> 
                <p className="bodytext">A mobile app built using React Native and Firebase that provides users with the ability to view and save uplifting messages for troubling times. Messages are currated from some of humanity's best 
                    leaders and a wide variety of religious texts. You can view a demo of the app <a href="https://expo.io/@endians/Proverbia">here</a>. Pending review on the Google Play Store and the App Store.</p>
               
                <br/>
                <br/>
                <h3 className="subtitle">Project X</h3>
                <img id="comingsoon" src={PROJECTX}></img> 
                <p className="bodytext">Helped Purdue innovate ideas for managaing a school year in COVID through the 
                                        Krannert School of Business' Project X Case Competition. Our team placed third
                                        in our category </p>
               
            </Col>
                
            </Row>
            
        </Container>
    )
}