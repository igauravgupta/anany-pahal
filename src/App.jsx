  import React, { useState } from 'react'
  import Navbar from './components/Shared/Navbar'
  import Footer from './components/Shared/Footer'
  import { Outlet } from 'react-router'


  function App() {
    
    return (
      <>
        <Navbar />
        <Outlet/>
        <Footer />
      </>
    )
  }

  export default App
