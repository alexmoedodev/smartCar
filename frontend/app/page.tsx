import React from 'react'
import  NavBar  from '@/components/NavBar/NavBar'
import  Hero  from '@/components/Hero/Hero'
import Footer from '@/components/Footer/Footer'
import FilterCar from '@/components/FilterCatalogue/FilterCar'

function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <FilterCar/>
      <Footer />
    </>
  )
}

export default Home
