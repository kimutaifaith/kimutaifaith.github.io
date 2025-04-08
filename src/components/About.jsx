import React from 'react'
import "./styles/About.css"
import picture from "../assets/picture.jpg"
import { Link } from "react-router-dom"
import Header from "../components/Header"

export default function About({open}){
    return(
        <>
        
        <div className={`about-container ${open? "nav-active": ""}`} > 
            <div className='about-image'>
                <img src={picture} alt=''/>
            </div>
            <div className='about-text'>
                <h2>Hello! I'm Faith. </h2>
                <p>I’m a passionate and curious software developer with a background in Business Information Technology. I enjoy creating user-friendly web applications and exploring innovative ways to solve real-world problems through code. With experience in digitization, research, and front-end development, I’m always eager to learn, collaborate, and build meaningful tech solutions.</p>
            </div>
            <div className='about-button'>
              <Link to="/portfolio"> <button className='cta' >View My Projects</button></Link>
            </div>
        </div>
        </>
    )
}