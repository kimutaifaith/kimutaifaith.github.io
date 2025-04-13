import React from 'react'
import './styles/Header.css'
import {  NavLink }  from 'react-router-dom'
import {FiMenu, FiX} from 'react-icons/fi'

export default function Header({open, setOpen, isOpen}){
    function closeMenu(){
        setOpen(false)
    }
    
    const activeStyle= {
        color: 'white',
        fontWeight: 'bold',
        textDecoration: 'underline',

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
                <li><NavLink style={({isActive}) => isActive? activeStyle: null}  onClick={closeMenu} to='/'>Home</NavLink></li>
                <li><NavLink style={({isActive}) => isActive? activeStyle: null} onClick={closeMenu} to='/about'>About</NavLink></li>
                <li><NavLink style={({isActive}) => isActive? activeStyle: null} onClick={closeMenu} to='/portfolio'>My Portfolio</NavLink></li>
                <li><NavLink style={({isActive}) => isActive? activeStyle: null} onClick={closeMenu} to='/contact'>Contact</NavLink></li>
                </ul>
                </div>
            </div>
        </header>
        </>
    )
} 