import React from 'react'
import Image from 'next/image'
import { CalendarDays, Fuel, Gauge, SlidersVertical } from 'lucide-react'
import formattedCurrency from '@/utils/formattedCurrency'
import { CarsTypes } from '@/types/carsTypes'
import formattedKm from '@/utils/formattedKm'

type Props = {
    car: CarsTypes
}

/**
 * Componente responsável por criar um card com layout padrão onde
 * renderiza os veiculos e detalhes.
 * 
 * A class de estilizações estão no arquivo `globlas.css`.
 * 
 * 
 * @param car - Recebe a tipagem do arquivo `CarsTypes.ts`
 * @param car.id - ID do veiculo.
 * @param car.model - Modelo do veiculo.`
 * @param car.mark  - Marca do veiculo.`
 * @param car.price - Valor de venda do veiculo.
 * @param car.km    - Kilometragem do veiculo.
 * @param car.fuel  - Tipo de combustivel.`
 * @param car.transmission - Transmissão do veiculo (Automatico - Manual).
 * @param car.year - Ano de fabricação do veiculo.`
 * @param car.occupants - Quantidade de ocupantes do veiculo.
 * @param car.description - Descrição  do veiculo.`
 * @param car.primage - Imagem do veiculo.
 
 */
const CardCars = ({ car }: Props) => {
    return (
        /** Card principal */
        <div className='card__car'>
            {/* Cabecalho do card - Renderizar o modelo e valor  */}
            <div className='card__car__header'>
                <div className='flex items-center justify-between'>
                    <span className='badge badge__warning'>
                        {car.model}
                    </span>

                    <span className='badge badge__light'>
                        {formattedCurrency(car.price)}
                    </span>
                </div>
            </div>

            {/* Imagem do veiculo */}
            <div className='relative w-full h-full'>
                <Image
                    src={car.image}
                    alt={car.model}
                    fill
                    className='object-contain'
                />
            </div>

            {/* Detalhes do veiculos no rodapé */}
            <div className='card__car__footer'>
                <ul className='card__car__ul'>
                    <li className='card__car__li'>
                        <span className='card__car__details'>
                            <CalendarDays size={17} /> {car.year}
                        </span>
                        <span className='card__car__details'>
                            <Gauge size={17} />{formattedKm(car.km)}
                        </span>
                    </li>

                    <li className='card__car__li'>
                        <span className='card__car__details'>
                            <Fuel size={17} /> {car.fuel}
                        </span>
                        <span className='card__car__details'>
                            <SlidersVertical size={17} /> {car.transmission}
                        </span>
                    </li>
                </ul>
            </div>
        </div>


    )
}

export default CardCars



