interface ButtonProps {
    children: React.ReactNode
    title: string
    onClick?: () => void
    ariaLabel: string
    type: "button" | "submit" | "reset"
    variant: "primary" | "secondary" | "outline" | "ghost" | "danger"
}

/**
 * Botão reutilizável com estilos e variantes padronizados.
 *
 * @param children - Conteúdo exibido dentro do botão, como texto ou ícones.
 * @param title - Texto exibido como tooltip ao passar o cursor sobre o botão.
 * @param onClick - Função executada quando o botão é acionado.
 * @param ariaLabel - Nome acessível do botão para tecnologias assistivas.
 * @param type - Define o comportamento do botão dentro de um formulário.
 * @param variant - Define a variação visual do botão.
 *
 * @returns Um elemento HTML <button> estilizado conforme a variante selecionada.
 */
const Button = ({ children, title, onClick, ariaLabel, type, variant, ...props }: ButtonProps) => {
    /**
     * Estilos base definidos e compartilhados por todas as variantes do botão.
     */
    const baseButtonStyles = `px-2 py-1 border-0 rounded-md text-sm cursor-pointer`

    /**
     * Mapeia cada variante do botão para sua classe CSS.
     *
     * As classes utilizadas são definidas no arquivo global
     * `globals.css`.
     */
    const buttonVariant = {
        primary: "button__primary",
        secondary: "",
        outline: "",
        ghost: "",
        danger: "",
    }

    return (
        <button
            type={type}
            title={title}
            aria-label={ariaLabel}
            onClick={onClick}
            className={`${buttonVariant[variant]} ${baseButtonStyles}`}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button