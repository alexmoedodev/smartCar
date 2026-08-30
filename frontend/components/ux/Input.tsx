import React from "react";

type Props = {
  label?: string;
  htmlFor?: string;
  inputSize?: "xs" | "sm" | "md" | "lg" | "fit" | "full";
  
} & React.InputHTMLAttributes<HTMLInputElement>;

/**
 * Componente responsável por manter um layout padrão do `input` da aplicação.
 * 
 * ATENÇÃO:
 * Alteração desse arquivo pode refletir em todo os componentes que utilizam.
 * 
 * @param label - Responsável por exibir o texto acima do input.
 * Propriedade é opcional, ao não utilizar a propriedade o texto não será exibido.
 * @param htmlFor - Responsável por acossiar a label ao ID do input. 
 * @param selectinput
 *
 */
 
const Input = ({ label, htmlFor, inputSize = "fit", ...props }: Props) => {

  /**
   * Responsável por definir qual tamanho do input a ser renderizado.
   */
  const variantSize = {
    xs: "w-xs",
    sm: "w-sm",
    md: "w-md",
    lg: "w-full sm:w-lg",
    fit: "w-fit",
    full:"w-full"
  }; 

  return (
    <div className={`flex flex-col gap-1 ${inputSize === "full" ? "w-full" : "sm:w-auto"}`}>
      {label && (
        <label className="text-sm text-black" htmlFor={htmlFor}>
          {label}
        </label>
      )}
      <input
        className={`${variantSize[inputSize]}  border-0 rounded-lg bg-gray-100 py-2 px-3`}
        {...props}
      />
    </div>
  );
};

export default Input;
