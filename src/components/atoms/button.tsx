/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import { Size, Type } from "../types";

export interface ButtonProps {
  text?: string;
  disabled?: boolean;
  size?: Size;
  type?: Type;
  className?: string;
  onClick: () => void;
}

function getStylesBySize(size: Size) {
  switch (size) {
    case "xl":
      return "w-full px-8 py-3.5 leading-7 text-base ";
    case "lg":
      return "w-48 px-8 py-3.5 leading-7 text-base ";
    case "md":
      return "h-12 w-48 px-8 py-3.5 leading-7 text-base ";
    case "sm":
      return "w-28 px-6 py-2 leading-normal text-sm ";
    default:
      return "h-12 w-48 px-8 py-3.5 leading-7 text-base ";
  }
}
function getStylesByfullSize(size: Size) {
  switch (size) {
    case "xl":
      return "px-8 py-3.5 leading-7 text-base ";
    case "lg":
      return "px-8 py-3.5 leading-7 text-base ";
    case "md":
      return "h-12 px-8 py-3.5 leading-7 text-base ";
    case "sm":
      return "px-6 py-2 leading-normal text-sm ";
    default:
      return "h-12 x-8 py-3.5 leading-7 text-base ";
  }
}
function getStylesByType(type: Type) {
  switch (type) {
    case "primary":
      return "bg-blue-700 hover:bg-blue-900 text-gray-50 hover:bg-violet-600 active:bg-gray-900 focus:outline-none focus:ring-8 focus:ring-blue-200";
    case "secondary":
      return " border-2 border-blue-700 hover:border-blue-900 text-blue-700 hover:text-blue-900 active:bg-violet-700  focus:outline-none focus:ring-8 focus:ring-gray-100";
    case "subtle":
      return " border-2 border-gray-200 text-blue-700 hover:text-blue-900 active:bg-violet-700  focus:outline-none focus:ring-8 focus:ring-gray-100";
    case "text":
      return "focus:bg-gray-100 border-2 border-gray-50 border-opacity-0 text-blue-700";
    default:
      return "bg-blue-700 hover:bg-blue-900 text-gray-50 hover:bg-violet-600 active:bg-gray-900 focus:outline-none focus:ring-8 focus:ring-blue-200";
  }
}

export const Button = ({
  size = "md",
  text,
  type = "primary",
  className = "",
  onClick,
}: ButtonProps) => {
  const stylesBySize = getStylesByfullSize(size);
  const stylesByType = getStylesByType(type);
  return (
    <button
      onClick={onClick}
      className={`${className} ${stylesBySize} ${stylesByType} font-poppins inline-flex items-center justify-center font-semibold tracking-wider  text-center rounded-lg`}
    >
      {text}
    </button>
  );
};
export const fullButton = ({
  size = "md",
  text,
  type = "primary",
  className = "",
  onClick,
}: ButtonProps) => {
  const stylesBySize = getStylesBySize(size);
  const stylesByType = getStylesByType(type);
  return (
    <button
      onClick={onClick}
      className={`${className}${stylesBySize} ${stylesByType} w-full font-poppins inline-flex items-center justify-center font-semibold tracking-wider  text-center rounded-lg`}
    >
      {text}
    </button>
  );
};
