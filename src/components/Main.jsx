import React from 'react'
import './styles/Main.css'
import {Instagram, GitHub, Twitter, LinkedIn} from '@mui/icons-material'
import Profile from '../assets/download.jpeg'

export default function Main ({open}){
    return(
        <>
        <div className={`main-container ${open? "nav-active": ""}`}>

         <div className='main-content'>
            <h1>HEY THERE!</h1>
            <p>I AM FAITH KIMUTAI</p>
            <h1>FRONT END DEVELOPER</h1>
         

         <div className='main-icon'>
         <a href=''> <Instagram className='icon'/></a>
          <a href=''><GitHub className='icon'/></a>
           <a href=''> <Twitter className='icon'/></a>
          < a href="https://www.linkedin.com/in/faith-chepkemoi-75b07720b"> <LinkedIn className='icon'/></a>
         </div></div>

         <div className='main-image'>
            <img src={Profile} alt='' />
         </div>

        </div>
        </>
    )
}