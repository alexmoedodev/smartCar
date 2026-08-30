import React from 'react'
import NavBar from '@/components/NavBar/NavBar'
import Hero from '@/components/Hero/Hero'
import Footer from '@/components/Footer/Footer'
import FilterCar from '@/components/FilterCatalogue/FilterCar'
import ContainerCars from '@/components/FilterCatalogue/ContainerCars'
import CarroselVehicleBrands from '@/components/Carrocel/CarroselVehicleBrands'

function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <CarroselVehicleBrands />
      <FilterCar />
      <ContainerCars />
      <Footer />
    </>
  )
}

export default Home
