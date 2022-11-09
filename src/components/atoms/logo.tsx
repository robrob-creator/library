/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unknown-property */

import * as React from "react";
import { Type } from "../types";
import logo from "../../../assets/images/blue-logo.png";

export interface LogoProps {
  size?: Type;
  className: string;
}

export const BlueIsaacLogo = ({ size, className }: LogoProps) => {
  return <img className={`w-44 h-10 ${className}`} src={logo} />;
};
