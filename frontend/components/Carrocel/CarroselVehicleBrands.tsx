import React from "react"
import Image from "next/image"

import { vehicleBrandLogos } from "@/constants/vehicleBrandLogos"

/**
 * Componente responsável por aplicar um carrosel na imagens SVG das marcas do veiculos.
 * 
 * As classes CSS utilizadas neste componente são definidas
 * no arquivo global `globals.css` e são responsáveis pela
 * estilização e pelo layout de cada elemento.
 * 
 */

const CarroselVehicleBrands = () => {
    return (
        /** Container princial da sessão */
        <section className="my-8 w-full bg-gray-50 py-8 overflow-hidden ">

            {/* Conteudo responsavel pela animação do carrosel */}
            <div className="flex w-max gap-12 animate-brands-scroll overflow-hidden">

                {vehicleBrandLogos.map((brand) => (
                    <div
                        key={brand.name}
                        className="flex flex-col  gap-4 w-32 shrink-0 items-center justify-center"
                    >
                        <Image
                            src={brand.icon}
                            alt={brand.name}
                            width={50}
                            height={50}
                        />
                        <span>{brand.name}</span>
                    </div>
                ))}

                {vehicleBrandLogos.map((brand) => (
                    <div
                        key={`duplicate-${brand.name}`}
                        className="flex flex-col gap-4 w-32 shrink-0 items-center justify-center"
                    >
                        <Image
                            src={brand.icon}
                            alt={brand.name}
                            width={50}
                            height={50}
                        />
                        <span>{brand.name}</span>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default CarroselVehicleBrands
