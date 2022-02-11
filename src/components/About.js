import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import './Styles/About.css'
import Purdue from "../assets/purdue.png"

export default function About({id}) {
    return (
        <Container id={id} fluid>     
                <h1 className="abouttitle">About</h1>

            <Row>
                <Col> 
                
                <p className="maintext">
                    I'm a computer science and political science major at Purdue University.
                    I graduate in May 2022, and have served as an RA to Purdue's Hawkins
                    Residence Hall for almost 2 academic years. This site contains past work I've done and ongoing projects
                    I'm a part of.
                </p>
                </Col>
                <Col>
                    <img src={Purdue} alt="Sunil"></img>
                    <br/>
                    <br/>
                </Col>
            </Row>
    </Container>
    )
}