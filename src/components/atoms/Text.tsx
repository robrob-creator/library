/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unknown-property */
import React from "react";
import { Size, FontStyle } from "../types";

export interface TextProps {
  text?: string;
  color?: string;
  size?: Size;
  className?: string;
  children?: React.ReactNode;
  style?: object;
  fontStyle?: FontStyle;
  onClick?: () => void;
}

function getHeaderBySize(type: Size) {
  switch (type) {
    case "xl":
      return "laptop:text-5xl tablet:max-laptop:text-4xl text-3xl";
    case "lg":
      return "text-4xl";
    case "md":
      return "text-3xl";
    case "sm":
      return "text-2xl";
    default:
      return "text-2xl";
  }
}
function getTextBySize(type: Size) {
  switch (type) {
    case "xl":
      return "laptop:text-xl tablet:max-laptop:text-base text-sm";
    case "lg":
      return "text-lg";
    case "md":
      return "text-base";
    case "sm":
      return "text-sm";
    case "xs":
      return "text-xs";
    default:
      return "text-sm";
  }
}
export const Text = ({
  color = "white",
  text,
  size = "md",
  className,
  children,
  fontStyle,
  style,
  onClick,
}: TextProps) => {
  const stylesBySize = getTextBySize(size);
  return (
    <p
      className={`${stylesBySize} font-${
        fontStyle && fontStyle
      } tracking-wider text-${color} ${className}`}
      style={style}
      onClick={onClick}
    >
      {text && text}
      {children}
    </p>
  );
};

export const HeaderText = ({
  color,
  text,
  size = "lg",
  className,
  children,
  fontStyle = "bold",
  onClick,
}: TextProps) => {
  const stylesBySize = getHeaderBySize(size);
  return (
    <p
      className={`${stylesBySize} ${fontStyle} tracking-wider text-${color} ${className}`}
      onClick={onClick}
    >
      {text && text}
      {children}
    </p>
  );
};
