/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unknown-property */
import { Size } from "../types";
import logo from "../../../assets/images/blue-logo.png";

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
export const ArrowStrokeDown = ({
  size = "sm",
  className,
  color = "#626365",
}: LogoProps) => {
  const stylesBySize = getStylesBySize(size);
  return (
    <svg
      width="14"
      height="9"
      viewBox="0 0 14 9"
      className={`${stylesBySize}  ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.582029 0.910765C0.907466 0.585328 1.4351 0.585328 1.76054 0.910765L7.00462 6.15484L12.2487 0.910765C12.5741 0.585328 13.1018 0.585328 13.4272 0.910765C13.7526 1.2362 13.7526 1.76384 13.4272 2.08928L7.59387 7.92261C7.26844 8.24805 6.7408 8.24805 6.41536 7.92261L0.582029 2.08928C0.256592 1.76384 0.256592 1.2362 0.582029 0.910765Z"
        fill={color}
      />
    </svg>
  );
};
export const Search = ({
  size = "sm",
  className,
  color = "#626365",
}: LogoProps) => {
  const stylesBySize = getStylesBySize(size);
  return (
    <svg
      width="14"
      height="9"
      viewBox="0 0 16 17"
      className={`${stylesBySize}  ${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.42132 2.08333C5.16154 2.08333 3.95336 2.58378 3.06256 3.47458C2.17176 4.36537 1.67132 5.57356 1.67132 6.83333C1.67132 7.45711 1.79418 8.07478 2.03289 8.65108C2.2716 9.22738 2.62148 9.75101 3.06256 10.1921C3.50364 10.6332 4.02727 10.9831 4.60357 11.2218C5.17987 11.4605 5.79754 11.5833 6.42132 11.5833C7.04509 11.5833 7.66277 11.4605 8.23906 11.2218C8.81536 10.9831 9.33899 10.6332 9.78007 10.1921C10.2212 9.75101 10.571 9.22738 10.8097 8.65108C11.0485 8.07478 11.1713 7.45711 11.1713 6.83333C11.1713 5.57356 10.6709 4.36537 9.78007 3.47458C8.88927 2.58378 7.68109 2.08333 6.42132 2.08333ZM1.94297 2.35499C3.1307 1.16726 4.74161 0.5 6.42132 0.5C8.10102 0.5 9.71193 1.16726 10.8997 2.35499C12.0874 3.54272 12.7546 5.15363 12.7546 6.83333C12.7546 7.66504 12.5908 8.4886 12.2726 9.257C12.0558 9.78035 11.7702 10.2711 11.4243 10.7168L15.6894 14.9819C15.9986 15.291 15.9986 15.7923 15.6894 16.1015C15.3803 16.4106 14.879 16.4106 14.5699 16.1015L10.3047 11.8363C9.85912 12.1822 9.36834 12.4678 8.84498 12.6846C8.07658 13.0029 7.25302 13.1667 6.42132 13.1667C5.58961 13.1667 4.76605 13.0029 3.99765 12.6846C3.22926 12.3663 2.53108 11.8998 1.94297 11.3117C1.35487 10.7236 0.888358 10.0254 0.570079 9.257C0.251799 8.4886 0.0879822 7.66504 0.0879822 6.83333C0.0879822 5.15363 0.755242 3.54272 1.94297 2.35499Z"
        fill={color}
      />
    </svg>
  );
};
