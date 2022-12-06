/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unknown-property */
import React, { useRef, useState } from "react";
import { ArrowStrokeDown } from "../atoms/icons";
import countries from "../../assets/data/countries.json";
import Flag from "react-world-flags";
import { Size } from "../types";
import { Text } from "../atoms/Text";

export type SelectProps = {
  label: string;
  value?: object;
  defaultValue?: Country;
  disabled?: boolean;
  children?: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
type Country = {
  name: string;
  code: string;
  phone: string;
};
export const Select = <PROPS extends SelectProps>({
  defaultValue,
  label = "Mobile Phone Number",
  onChange,
}: PROPS): JSX.Element => {
  const [selected, setSelected] = useState<Country | undefined>();

  return (
    <div className="p-2 relative w-96" onChange={onChange}>
      <div className="select inline-block absolute w-4/12 ">
        <button className="femibold py-4 px-2 rounded-xl inline-flex h-14 items-center w-28 bg-gray-100 border border-gray-300">
          <Flag code={selected?.code || defaultValue?.code} width={30} />
          <span className="px-2 truncate">
            {selected?.phone || defaultValue?.phone}
          </span>
          <ArrowStrokeDown className="mx-2 lg:visible invisible" />
        </button>
        <ul className="select-menu hidden text-gray-700 pt-1 shadow-md h-80 overflow-x-auto bg-white">
          {countries.map((item: Country, index: number) => {
            return (
              <li key={index} onClick={() => setSelected({ ...item })}>
                <button className="rounded-t bg-white hover:bg-gray-200 py-2 px-4 inline-flex">
                  <Flag code={item.code} width={30} />
                  <span className="px-2">{item.name}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="absolute w-8/12 right-0">
        <InputField size="md" value={selected?.phone} placeholder={label} />
      </div>
    </div>
  );
};
interface InputProps {
  type?: string;
  name?: string;
  errorMessage?: string;
  width?: String;
  value?: string;
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
const InputField = ({
  type,
  name = "",
  placeholder,
  size = "lg",
  className,
  style,
  errorMessage,
  value,
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
          value={value}
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
