import React from 'react'
import Navbar from '../components/pages/navbar'
import Footer from '../components/pages/footer'
import { Container } from '@mui/material'

function Layout({ children }) {
  return (
  <>
  <Navbar/>
  <Container>
    <div style={{marginTop:"40px",marginBottom:"40px"}}>
  {children}
  </div>
  </Container>
  <Footer/>
  
  </>
  )
}

export default Layout