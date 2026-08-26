"use client";

import GroupFields from "../Layouts/GroupFields";
import Input from "../ux/Input";
import Select from "../ux/Select";


/**
 * Componente responsável por renderizar o layout onde aplica os filtros e pegar os valores digitados
 * no input e selecionados no select para realizar o filtro de forma 
 * dinamamica do lado do ``client``
 */
const FilterCar = () => {
  return (
    <div className="flex flex-col w-full ">
      <div className="flex flex-col w-full max-w-6xl mx-auto p-2 gap-6">

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
            inputSize="lg"
            title="Digite o nome do veiculo que deseja realizar a busca..."
            placeholder={"Digite o nome do veiculo..."}
            value={""}
            onChange={() => { }}
          />

          <Select
            title="Selecione a marca do veiculo que deseja realizar a busca..."
            name=""
            value={""}
            onChange={() => { }}
          >
            <option>Selecione uma Marca</option>
          </Select>

          <Select
            title="Selecione o ano de fabricação do veiculo que deseja realizar a busca..."
            name=""
            value={""}
            onChange={() => { }}
          >
            <option>Ano de Fabricação</option>
          </Select>

        </GroupFields>

      </div>
    </div>

  );
};

export default FilterCar;
