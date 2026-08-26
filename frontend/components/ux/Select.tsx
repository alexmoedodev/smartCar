type Props = {
    label?: string;
    htmlFor?: string;

    selectSize?: "xs" | "sm" | "md" | "lg" | "fit" | "full";
} & React.SelectHTMLAttributes<HTMLSelectElement>;

/**
 * Componente responsável por manter o layout padrão nos campos de `Select` da aplicação.
 * 
 * ATENÇÃO:
 * Alteração desse arquivo pode refletir em todo os componentes que utilizam.
 * 
 * @param label - Responsável por exibir o texto acima do select.
 * Propriedade é opcional, ao não utilizar a propriedade o texto não será exibido.
 * @param htmlFor - Responsável por acossiar a label ao ID do select. 
 * @param selectSize - Responsável por definir o tamanho do select a ser renderizado. 
 */
const Select = ({ label, htmlFor, selectSize = "fit", ...props }: Props) => {

    /**
     * Responsável por definir qual tamanho será aplicado ao select.
     */
    const variantSize = {
        xs: "w-xs",
        sm: "w-sm",
        md: "w-md",
        lg: "w-lg",
        fit: "w-fit",
        full: "w-full",
    };

    return (
        <div className={`${selectSize === "full" ? "w-full" : "w-auto"} flex flex-col gap-1`}>
            {label &&
                <label htmlFor={htmlFor} className="text-sm text-gray">
                    {label}
                </label>}
            <select
                className={`${variantSize[selectSize]} rounded-lg border-0 bg-gray-100 py-1 px-2 sm:py-2 sm:px-3 cursor-pointer`}
                {...props}>
            </select>
        </div>
    )
};

export default Select
