/* eslint-disable prettier/prettier */
/* eslint-disable no-empty-pattern */
/* eslint-disable prettier/prettier */

import React, { useRef } from "react";
import { HeaderText, Text } from "../atoms/Text";
import { Button } from "../atoms/button";
import { Position, Size } from "../types";

export type FormProps = {
  children?: React.ReactNode;
  className?: string;
  bordered?: boolean;
  style?: object;
  columns?: number;
  title?: string;
  submitButtonPosition?: Position;
};
export type FormInputProps = {
  type?: string;
  name?: string;
  errorMessage?: string;
  width?: String;
  placeholder?: string;
  size?: Size;
  style?: object;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function getStylesByPosition(position: Position) {
  switch (position) {
    case "left":
      return "justify-start ml-4";
    case "right":
      return "justify-end mr-4";
    case "center":
      return "justify-center";
    default:
      return "justify-center";
  }
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
export const Form = <PROPS extends FormProps>({
  children,
  className,
  style,
  columns = 1,
  submitButtonPosition = "center",
  title,
}: PROPS): JSX.Element => {
  const stylesByPosition = getStylesByPosition(submitButtonPosition);
  return (
    <div
      className={`${className} sm:w-full md:w-11/12 xl:w-screen w-11/12 max-w-xl`}
      style={style}
    >
      <HeaderText size="md">{title}</HeaderText>
      <div className={`grid grid-cols-${columns} w-full `}>{children}</div>
      <div className={`flex ${stylesByPosition}`}>
        <Button>Submit</Button>
      </div>
    </div>
  );
};
export const OutlinedForm = <PROPS extends FormProps>({
  children,
  className,
}: PROPS): JSX.Element => {
  return (
    <form
      className={`flex items-center justify-center sm:px-24 pt-10 pb-9 bg-white sm:border sm:rounded-3xl sm:border-gray-300 ${className}`}
    >
      {children}
    </form>
  );
};

export const FormItem = <PROPS extends FormProps>({
  children,
  style,
}: PROPS): JSX.Element => {
  return (
    <div className="mx-4 my-4" aria-live="polite" style={style}>
      {children}
    </div>
  );
};

export const FormInput = <PROPS extends FormInputProps>({
  className,
  type,
  onChange,
  errorMessage,
  placeholder,
  style,
  size = "lg",
  name,
}: PROPS): JSX.Element => {
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
