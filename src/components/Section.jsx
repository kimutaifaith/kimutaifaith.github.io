import React from 'react'
import './styles/Section.css'
import picture from '../assets/wig.jpg'


export default function Section(){
    return(
        <>
        <div className="section-container">
        <div className='section-image'>
            <img src={picture} alt='' />
        </div>
        <div className="section-details">
            <h1>FAITH KIMUTAI</h1>
            <p>Experience with website development</p>
            <p>Proficient in React</p>
            <p>Experience in Backend Development</p>
            <p>Professional in Data management</p>
        </div>
        </div>
        </>
    )
}