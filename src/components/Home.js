import React from 'react'
import './Styles/Home.css'
import mainImage from '../assets/sunil.jpg'



export default function Home({id}) {
    return (
            <div id={id} className="topsection">
                <p className="introtext">Welcome to my corner of the web</p>
                 <img className="bigimage" src={mainImage}/>


            </div>
           
        
    )
}
