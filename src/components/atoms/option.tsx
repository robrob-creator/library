/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unknown-property */

export interface OptionProps {
  label?: string;
  onClick?: () => void;
}

export const Option = ({ label, onClick }: OptionProps) => {
  return (
    <li className="">
      <a
        className="rounded-t bg-white hover:bg-gray-200 py-2 px-4 block whitespace-no-wrap"
        onClick={onClick}
      >
        {label}
      </a>
    </li>
  );
};
