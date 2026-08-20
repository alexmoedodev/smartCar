interface ButtonProps {
    children: React.ReactNode
    title: string
    onClick?: () => void
    ariaLabel: string
    type: "button" | "submit" | "reset"
    variant: "primary" | "secondary" | "outline" | "ghost" | "danger"
}

const Button = ({ children, title, onClick, ariaLabel, type, variant, ...props }: ButtonProps) => {

    const buttonStylesDefaut = `px-2 py-1 border-0 rounded-md text-sm cursor-pointer`

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
            className={`${buttonVariant[variant]} ${buttonStylesDefaut}`}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button