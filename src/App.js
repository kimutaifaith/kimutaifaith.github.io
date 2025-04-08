import React from 'react'
import Header from "./components/Header"
import Main from "./components/Main"
import Section from "./components/Section"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from "./components/About"
import Contact from "./components/Contact"

export default function App(){
  const [open, setOpen] = React.useState(false)
      
      function isOpen(){
          setOpen(!open)
      }
  
  return(
    <>
    <BrowserRouter>
    <Header open={open} setOpen={setOpen} isOpen={isOpen}/>
        <Routes>
          <Route path='/' element={<><Main open={open}/><Section/></>}></Route>
          <Route path='/about' element={<About open={open}/>}></Route>
          <Route path='/contact' element={<Contact open={open}/>}></Route>
        </Routes>
        </BrowserRouter>,
    
    </>
  )
}