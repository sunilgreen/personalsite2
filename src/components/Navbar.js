import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import './Styles/Navbar.css'


export default class Navbar extends Component {
    scrollToTop = () => {
        scroll.scrollToTop();
    }

    render() {

        return (
           
                    <nav className="nav" id="navbar">
                        <div className="nav-content">
                            <ul className="nav-items">
                                    <li className="nav-item">
                                        <Link 
                                            activeClass="active"
                                            spy={true}
                                            smooth={true}
                                            offset={-70}
                                            duration={500}
                                            onClick={this.scrollToTop}
                                        >
                                        Home
                                        </Link>
                                    </li>
                            
                                <li className="nav-item">
                                    <Link 
                                        activeClass="active"
                                        to="aboutsection"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                        >
                                        About
                                    </Link>
                                </li>
                          
                                    <li className="nav-item">
                                    <Link 
                                        activeClass="active"
                                        to="myworksection"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration={500}
                                        >
                                        My Work
                                    </Link>
                                
                                    </li>
                                              
                            
                        <li className="nav-item">
                            <Link 
                                activeClass="active"
                                to="contactsection"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                >
                                    Contact
                                </Link>
                        </li>
                    </ul>
                </div>
            </nav>
    

            
        )
    }
}