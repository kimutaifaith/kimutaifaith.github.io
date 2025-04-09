import React from 'react'
import './styles/Header.css'
import {  Link }  from 'react-router-dom'
import {FiMenu, FiX} from 'react-icons/fi'

export default function Header({open, setOpen, isOpen}){
    function closeMenu(){
        setOpen(false)
    }
    
    return(
        <>
        <header className="header">
            <div className='header-container'>
<div className="header-icon">
 <button className='header-toggle' onClick={isOpen}> { open ? <FiX size={40}/> : <FiMenu size={40}/>}</button>
</div>
<div >
                <ul className={`nav-links ${open? "nav-active": ""}`}>
                <li><Link onClick={closeMenu} to='/'>Home</Link></li>
                <li><Link onClick={closeMenu} to='/about'>About</Link></li>
                <li><Link onClick={closeMenu} to='/portfolio'>My Portfolio</Link></li>
                <li><Link onClick={closeMenu} to='/contact'>Contact</Link></li>
                </ul>
                </div>
            </div>
        </header>
        </>
    )
} 