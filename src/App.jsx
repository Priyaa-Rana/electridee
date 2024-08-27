import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Features from './components/Features'
import Services from './components/Services'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import { BrowserRouter  } from 'react-router-dom';



function App() {
  

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    
        <Home/>
        
       <Features/>
  <Services/>
   <ContactUs/>
       
      
      <Footer/>    
      </BrowserRouter>
      
    
     
    </>
  )
}

export default App
