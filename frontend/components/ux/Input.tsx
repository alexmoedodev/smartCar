import React from "react";

type Props = {
  label?: string;
  htmlFor?: string;
  inputSize?: "xs" | "sm" | "md" | "lg" | "fit" | "full";
  
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = ({ label, htmlFor, inputSize = "fit", ...props }: Props) => {
  const variantSize = {
    xs: "w-xs",
    sm: "w-sm",
    md: "w-md",
    lg: "w-full sm:w-lg",
    fit: "w-fit",
    full:"w-full"
  }; 

  return (
    <div className={`flex flex-col gap-1 ${inputSize === "full" ? "w-full" : "w-auto"}`}>
      {label && (
        <label className="text-sm text-black" htmlFor={htmlFor}>
          {label}
        </label>
      )}
      <input
        className={`${variantSize[inputSize]}  border-0 rounded-lg bg-gray-100 px-2 sm:py-2 sm:px-3`}
        {...props}
      />
    </div>
  );
};

export default Input;
