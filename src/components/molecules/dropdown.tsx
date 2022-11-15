/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unknown-property */
import React, { Children, ReactChild } from "react";
import { Text } from "../atoms/Text";
import { ArrowStrokeDown } from "../atoms/logo";
import { Option } from "../atoms/option";

export interface DropdownProps {
  label?: string;
  disabled?: boolean;
  children: React.ReactNode;
}

export const Dropdown = ({ label, children }: DropdownProps) => {
  return (
    <div className="p-2">
      <div className="dropdown inline-block relative">
        <button className="femibold py-2 px-4 rounded inline-flex items-center">
          <Text color="black" size="sm" className="mr-1">
            {label}
          </Text>

          <ArrowStrokeDown className="mx-2 lg:visible invisible" />
        </button>
        <ul className="dropdown-menu absolute hidden text-gray-700 pt-1 shadow-md">
          {children}
        </ul>
      </div>
    </div>
  );
};
