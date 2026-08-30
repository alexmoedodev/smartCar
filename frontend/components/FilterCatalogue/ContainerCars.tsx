import React from 'react'
import CardCars from '@/components/Cards/CardCars'
import cars from '@/components/Map/cars'


/**
 * Componente responsável por rednerizar um layout que se adapta
 * a diferentes dispositivos. 
 * 
 * Utiliza o componente `CardCars` e suas propriedades para mapear e renderizar os veiculo registrados.
 * 
 */
const ContainerCars = () => {
    return (
        <section className='flex items-center justify-center w-full my-6 px-6'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl gap-y-6 w-full justify-items-center gap-12'>
                {cars.map((car) => (
                    <CardCars
                        key={car.id}
                        car={{
                            id: car.id,
                            model: car.model,
                            price: car.price,
                            km: car.km,
                            year: car.year,
                            fuel: car.fuel,
                            mark: car.mark,
                            occupants: car.occupants,
                            transmission: car.transmission,
                            description: car.description,
                            image: car.image
                        }}
                    />
                ))}

            </div>
        </section>
    )
}

export default ContainerCars