/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unknown-property */
import React, { Children, ReactChild } from "react";
import countries from "../../../assets/data/countries.json";
import Flag from "react-world-flags";
export interface SelectProps {
  label?: string;
  disabled?: boolean;
  children?: React.ReactNode;
}
type Country = {
  name: string;
  code: string;
  phone: string;
};
export const Select = ({}: SelectProps) => {
  return (
    <div className="country">
      {countries &&
        countries.map((item: Country, index: any) => {
          return (
            <div>
              <Flag code={item.code} width={44} />
            </div>
          );
        })}
    </div>
  );
};
