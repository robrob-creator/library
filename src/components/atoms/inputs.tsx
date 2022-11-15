/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unknown-property */
import { useRef } from "react";
import { Size } from "../types";
import { Text } from "./Text";

export interface InputProps {
  type?: string;
  name?: string;
  errorMessage?: string;
  placeholder?: string;
  size?: Size;
  style?: object;
  className?: string;
}
function getStylesBySize(size: Size) {
  switch (size) {
    case "lg":
      return { input: " h-16 ", label: "-mt-14 peer-placeholder-shown:-mt-11" };
    case "md":
      return { input: " h-14 ", label: "-mt-14 peer-placeholder-shown:-mt-10" };
    case "sm":
      return { input: "h-12", label: "-mt-12 peer-placeholder-shown:-mt-9" };
    default:
      return { input: "h-12", label: "-mt-12 peer-placeholder-shown:-mt-9" };
  }
}
export const InputField = ({
  type,
  name = "",
  placeholder,
  size = "lg",
  className,
  style,
  errorMessage,
}: InputProps) => {
  const inputRef = useRef<HTMLFormElement | null>(null);
  const stylesBySize = getStylesBySize(size);

  const handleClick = () => {
    inputRef.current && inputRef.current.reset();
  };
  return (
    <form ref={inputRef}>
      <div
        className={`flex flex-col items-start mb-2 z-0 ${stylesBySize.input} ${className}`}
        style={style}
      >
        <input
          type={type}
          id={name}
          placeholder={placeholder}
          className={`outline-none  ${
            errorMessage
              ? "border-red-700 border-2"
              : "focus:border-blue-700 border-2"
          } pt-6 inline-flex peer px-4 py-2 w-full h-full
   ${
     errorMessage ? "bg-red-100" : "bg-gray-100"
   } rounded-2xl  placeholder-transparent`}
        />
        <label
          htmlFor={name}
          className={`ml-4 ${stylesBySize.label} text-base ${
            errorMessage ? "text-red-700" : "text-gray-500"
          } 
     ${
       errorMessage
         ? "peer-placeholder-shown:text-red-700"
         : "peer-placeholder-shown:text-gray-400"
     }  
    peer-placeholder-shown:text-base 
    duration-300`}
        >
          {placeholder}
        </label>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="peer-focus:visible hover:visible invisible pointer-events-auto w-8 h-8 absolute top-10 transform -translate-y-1/2 right-3"
          onClick={handleClick}
        >
          <path stroke="black" strokeWidth="2" d="M1 11L11 1"></path>
          <path stroke="black" strokeWidth="2" d="M1 1L11 11"></path>
        </svg>
      </div>
      {errorMessage && <Text color="red-700">{errorMessage}</Text>}
    </form>
  );
};
