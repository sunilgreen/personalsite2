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
                    In fall 2021, I'll be a rising senior, and incoming RA to Purdue's Hawkins
                    Residence Hall. This site contains past work I've done and ongoing projects
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