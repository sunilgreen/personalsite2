import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import PDC from '../assets/pdc.png';
import PROVERBIA from '../assets/cover.png';
import GOPEER from '../assets/gopeer.png';
import URCONVEY from '../assets/uc.png';
import PISIG from '../assets/pisig.png';
import PROJECTX from '../assets/projectx.jpg';
import POL300 from "../assets/POL300.png";
import PORK from "../assets/pork.png"
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
                    <li>POL 461 Consitutional Law I</li>
                    <li>POL 462 Consitutional Law II</li>
                </ul>        
            </Col>

            <Col id="outsideclass">
                <h3 className="subtitle">Outside the Classroom</h3>    
                <img id="pdcimage" src={PDC}></img> 
                <h4>Purdue PDC</h4>
                <p className="bodytext">I am the former President
                    and one of the founding members of Purdue's Political Discourse Club.
                    We're an organization that helps students on campus talk about politics
                    civily. We also work on publishing student created media through our website <a  href="https://purduepdc.org">purduepdc.org.  </a> 
                    Check out the site to see our student created articles, cartoons, and podcast.
                </p>
                <br/>
                <br/>

                <img id="urconvey" src={PISIG}></img>
                <h4 className="sectiontitle">Pi Sigma Alpha Delta Omega</h4>
                <p className="bodytext">I serve as the outreach coordinator for Purdue's Pi Sigma Alpha Chapter. 
                                    More information about the organization can be found on our <a href="https://www.instagram.com/purdue_pisig/">Instagram.</a>
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

                

                <img id="gopeerimage" src={GOPEER}></img>
                <h4 className="sectiontitle">GoPeer</h4>
                <p className="bodytext">I tutor online through a service called GoPeer. I can tutor a wide 
                                        range of subjects including Math through Calculus II, A.P. U.S. History, A.P. World History
                                        and basic Spanish. You can find my profile for the service <a href="https://gopeer.org/profile/5baa72773354c231625738db?referrer=1WXIVl">here.</a>
                </p>

                

               


                       
            </Col>

            <Col id="personalprojects" sm={3}>
                <h3 className="subtitle">Projects</h3>
                <img id="comingsoon" src={POL300}></img> 
                <h3 className="subtitle">POL300 Website</h3>
                <p className="bodytext">As the undegraduate preceptor for Purdue's POL300 course in Fall 2021, I helped organize a python cirriculum for political science students. The resuling course materials resulted in the creation of a python tutorial and reference site.
                    You can view the site and course materials <a href="https://infallible-austin-8176ba.netlify.app/">here</a>. The goal of the site is to spark interst in coding amongst liberal arts students.
                    Another tutorial for POL300A, the accelerated version of POL300 currently being run, is in the works as well.</p>
               
                <br/>
                <br/>
                <img id="comingsoon" src={PORK}></img> 
                <h3 className="subtitle">Identifying Pork Barrel Legislation Using Machine Learning</h3>
                <p className="bodytext">For an undergraduate capstone project I am attempting to create a machine learning classfier that can help automate the indentificaiton of potentially pork barreled projects in an appropriations act.
                    The project is still in the works, but the source code can be found <a href="https://github.com/sunilgreen/pork">here</a>. Upon completion of the paper, the project will be fully open-sourced
                    and contributions from other developers and researchers will be accepted.</p>
               

                <img id="comingsoon" src={PROJECTX}></img> 
                <h3 className="subtitle">Project X</h3>
                <p className="bodytext">I helped Purdue innovate ideas for managaing a school year in COVID through the 
                                        Krannert School of Business' Project X Case Competition. Our team placed third
                                        in our category. </p>
               
            </Col>
                
            </Row>
            
        </Container>
    )
}