import React from 'react'
import Header from "./components/Header"
import Main from "./components/Main"
import Section from "./components/Section"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from "./components/About"
import Contact from "./components/Contact"
import Portfolio from "./components/Portfolio"

export default function App(){
  const [open, setOpen] = React.useState(false)
      
      function isOpen(){
          setOpen(!open)
      }
  
  return(
    <>
    
    <Header open={open} setOpen={setOpen} isOpen={isOpen}/>
        <Routes>
          <Route path='/' element={<><Main open={open}/><Section/></>}></Route>
          <Route path='/about' element={<About open={open}/>}></Route>
          <Route path='/contact' element={<Contact open={open}/>}></Route>
          <Route path='/home' element={<Portfolio open={open}/>}></Route>
          
        </Routes>
    
    </>
  )
}