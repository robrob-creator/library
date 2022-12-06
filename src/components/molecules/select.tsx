/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unknown-property */
import React, { useState } from "react";
import { InputField } from "../atoms/inputs";
import { ArrowStrokeDown } from "../atoms/icons";
import countries from "../../assets/data/countries.json";
import Flag from "react-world-flags";
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
}: PROPS): JSX.Element => {
  const [selected, setSelected] = useState<Country | undefined>();

  return (
    <div className="p-2 relative w-96">
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
        <InputField size="md" placeholder={label} />
      </div>
    </div>
  );
};
