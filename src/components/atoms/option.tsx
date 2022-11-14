/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unknown-property */

export interface OptionProps {
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  min?: number;
  max?: number;
  value: number;
}

export const Option = ({ label }: OptionProps) => {
  return (
    <li className="">
      <a
        className="rounded-t  hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap"
        href="#"
      >
        {label}
      </a>
    </li>
  );
};
