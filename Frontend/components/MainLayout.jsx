import React from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { ScrollToTop } from './ScrollToTop'

const MainLayout = ({children}) => {
  return (
    <div>
        <Navbar/>
        {children}
        <ScrollToTop/>
        <Footer/>
    </div>
  )
}

export default MainLayout