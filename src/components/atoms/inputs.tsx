/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unknown-property */
import React, { useRef } from "react";
import { Size } from "../types";
import { Text } from "./Text";

export interface InputProps {
  type?: string;
  name?: string;
  errorMessage?: string;
  width: String;
  placeholder?: string;
  size?: Size;
  style?: object;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
  onChange,
}: InputProps) => {
  const inputRef = useRef<HTMLFormElement | null>(null);
  const stylesBySize = getStylesBySize(size);

  const handleClick = () => {
    inputRef.current && inputRef.current.reset();
  };
  return (
    <form ref={inputRef} className={`relative ${className}`}>
      <div
        className={`flex flex-col items-start mb-2 z-0 ${stylesBySize.input} `}
        style={style}
      >
        <input
          type={type}
          id={name}
          placeholder={placeholder}
          onChange={onChange}
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
export const SearchField = ({ width, onChange }: InputProps) => {
  return (
    <form className="flex items-center">
      <label htmlFor="simple-search" className="sr-only">
        Search
      </label>
      <div className={`relative  sm:w-126`}>
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-10 pr-5">
          <svg
            aria-hidden="true"
            className="h-8 w-8  text-gray-500 dark:text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <input
          type="text"
          id="simple-search"
          className="block w-full  rounded-full border border-gray-300 bg-gray-50 pl-20 pr-5 sm:py-8 py-4 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="Search"
          onChange={onChange}
        />
      </div>
    </form>
  );
};
