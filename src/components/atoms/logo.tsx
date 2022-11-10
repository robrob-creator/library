/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unknown-property */
import { Size } from "../types";
import logo from "../../../assets/images/blue-logo.png";
import arrowLeft from "../../../assets/images/arrow-left.svg";

export interface LogoProps {
  size?: Size;
  className?: string;
  color?: string;
}

function getStylesBySize(type: Size) {
  switch (type) {
    case "lg":
      return "w-3/6 h-full";
    case "md":
      return "w-2/6 h-full";
    case "sm":
      return "w-1/6 h-full";
    default:
      return "w-1/6 h-full";
  }
}

export const BlueIsaacLogo = ({ size, className }: LogoProps) => {
  return <img className={`w-44 h-10 ${className}`} src={logo} />;
};

export const ArrowLeft = ({
  size = "sm",
  className,
  color = "#626365",
}: LogoProps) => {
  const stylesBySize = getStylesBySize(size);
  return (
    <svg
      className={`${stylesBySize}  ${className}`}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 19L3 12M3 12L10 5M3 12L21 12"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
