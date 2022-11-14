/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unknown-property */
import { Size } from "../types";
export interface InputProps {
  type?: string;
  message?: string;
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
  placeholder,
  size = "lg",
  className,
  style,
}: InputProps) => {
  const stylesBySize = getStylesBySize(size);

  return (
    <div
      className={`relative flex flex-col items-start ${className}`}
      style={style}
    >
      <input
        type={type}
        id="inputField"
        placeholder=""
        className={`inline-flex peer px-4 py-2 w-full ${stylesBySize.input}
   bg-gray-100 rounded-2xl  placeholder-transparent`}
      />
      <label
        htmlFor="inputField"
        className={`ml-4 ${stylesBySize.label} text-base text-gray-500  
    peer-placeholder-shown:text-gray-400 
    peer-placeholder-shown:text-base 
    duration-300`}
      >
        {placeholder}
      </label>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="peer-focus:visible invisible pointer-events-none w-8 h-8 absolute top-10 transform -translate-y-1/2 right-3"
      >
        <path stroke="black" strokeWidth="2" d="M1 11L11 1"></path>
        <path stroke="black" strokeWidth="2" d="M1 1L11 11"></path>
      </svg>
    </div>
  );
};
