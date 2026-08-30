"use client";

import { titlteMessage } from "@/constants/messages/tittleMessage";
import GroupFields from "../Layouts/GroupFields";
import Input from "../ux/Input";
import Select from "../ux/Select";
import yearFabricationVehicle from "@/utils/yearFabricationVehicle";
import { placeholderMessage } from "@/constants/messages/placeholderMessage";
import { vehicleBrands } from "@/constants/vehicleBrands";


/**
 * Componente responsável por renderizar o layout onde aplica os filtros e pegar os valores digitados
 * no input e selecionados no select para realizar o filtro de forma 
 * dinamamica do lado do `client`
 * 
 */
const FilterCar = () => {
  return (
    /** Containar principal  */
    <div className="flex flex-col w-full ">

      {/* Conteudo */}
      <div className="flex flex-col w-full sm:max-w-6xl mx-auto px-6 gap-6">

        {/* Titulo  e subtitulo da seção. */}
        <div className="flex flex-col gap-1">
          <h2 className="text-3xl font-semibold text-black">
            Explore nossos Carros
          </h2>
          <p className="text-sm text-gray">
            Confira carros de que você pode gostar
          </p>
        </div>

        {/* Filtros */}
        <GroupFields>
          <Input
            inputSize="full"
            title={titlteMessage.search.nameVehicle}
            placeholder={placeholderMessage.search.nameVehicle}
            value={""}
            onChange={() => { }}
          />

          <Select
            title={titlteMessage.search.markVehicle}
            selectSize="fit"
            name=""
            value={""}
            onChange={() => { }}
          >
            <option>Selecione uma Marca</option>
            {vehicleBrands.map((mark) => (
              <option
                key={mark.value}
                value={mark.value}
              >
                {mark.label}
              </option>
            ))}
          </Select>

          <Select
            title={titlteMessage.search.yearFabricationVehicle}
            selectSize="fit"
            name=""
            value={""}
            onChange={() => { }}
          >
            <option>Ano de Fabricação</option>
            {yearFabricationVehicle.map((year) => (
              <option key={year}>{year}</option>
            ))}
          </Select>

        </GroupFields>

      </div>
    </div>

  );
};

export default FilterCar;
