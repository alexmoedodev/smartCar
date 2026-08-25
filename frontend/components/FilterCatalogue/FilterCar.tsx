import React from 'react'
import Input from '../ux/Input'

const FilterCar = () => {
  return (
    <div className='flex w-full flex-col bg-amber-100'>
      <div className='flex flex-col w-full max-w-5xl mx-auto p-2 gap-1 border'>
        <h2 className='text-3xl font-semibold text-black'>Explore nossos Carros</h2>
        <p className='text-sm text-gray'>Confira carros de que você pode gostar</p>
      </div>

      <div className='flex items-center justify-center w-full border'>
        <Input 
        inputSize='full'
        
        />
      </div>
    </div>
  )
}

export default FilterCar
