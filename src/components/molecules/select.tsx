/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unknown-property */
import React from "react";
import { Text } from "../atoms/Text";

export interface SelectProps {
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  min?: number;
  max?: number;
  value: number;
  Options: React.ReactNode;
}

export const Select = ({ Options }: SelectProps) => {
  return (
    <div className="p-10">
      <div className="dropdown inline-block relative">
        <button className="femibold py-2 px-4 rounded inline-flex items-center">
          <Text color="black" size="sm" className="mr-1">
            Dropdown
          </Text>
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
          </svg>
        </button>
        <ul className="dropdown-menu absolute hidden text-gray-700 pt-1 shadow-md">
          {Options}
        </ul>
      </div>
    </div>
  );
};
