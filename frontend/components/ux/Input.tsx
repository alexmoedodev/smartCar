import React from 'react'

interface Props {
    label?: string
    htmlFor?: string
    inputSize: "xs" | "sm" | "md" | "lg" | "fit" | "full"
}  

const Input = ({ label, htmlFor, inputSize = "sm", ...props }: Props) => {

    const variantSize = {
        xs: "w-xs",
        sm: "w-sm",
        md: "w-md",
        lg: "w-lg",
        fit: "w-fit",
        full: "w-full"
    }


    return (
        <div>
            {label && (
                <label htmlFor={htmlFor}>
                    {label}
                </label>
            )}
            <input
                className={`${variantSize[inputSize]} border-0 rounded-lg bg-gray-100 py-1 px-2`}
                {...props}
            />
        </div>
    )
}

export default Input
