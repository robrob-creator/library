/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unknown-property */

import * as React from "react";

export interface ToggleProps {
  label?: string;
  checked?: boolean;
  disabled?: boolean;
}

export const ToggleSwitch = ({
  label,
  checked = false,
  disabled = false,
}: ToggleProps) => {
  const [isChecked, setIsChecked] = React.useState(Boolean);
  const [stylesByStatus, setStyle] = React.useState(Object);

  const getStylesByStatus = (checked: boolean, disabled: boolean) => {
    if (checked && !disabled) {
      setStyle({
        container: "bg-purple-700 hover:bg-purple-900",
        dot: "border-purple-700",
        opacity: "opacity-100",
      });
    } else if (!checked && disabled) {
      setStyle({
        container: "bg-gray-200 hover:bg-gray-400",
        dot: "border-gray-200",
        opacity: "opacity-50",
      });
    } else if (disabled) {
      setStyle({
        container: "bg-purple-700 ",
        dot: "border-purple-700",
        opacity: "opacity-50",
      });
    } else {
      setStyle({
        container: "bg-gray-200 hover:bg-gray-400",
        dot: "border-gray-200",
        opacity: "opacity-100",
      });
    }
  };

  React.useEffect(() => {
    setIsChecked(checked);
    getStylesByStatus(checked, disabled);
  }, [checked, disabled]);

  return (
    <div className="flex items-center justify-center w-full mb-12">
      <label
        htmlFor="toggleB"
        className={`flex items-center cursor-pointer ${stylesByStatus.opacity} `}
      >
        <div className="relative focus:outline-none focus:border-8 fucos:border-purple-200">
          <input
            type="checkbox"
            id="toggleB"
            disabled={disabled}
            className="sr-only"
            checked={isChecked}
            onChange={() => setIsChecked((prev) => !prev)}
          />

          <div
            className={`block ${stylesByStatus.container} h-9 w-16 rounded-full `}
          ></div>

          <div
            className={`dot absolute  -top-0 bg-white w-9 h-full border-2 ${stylesByStatus.dot}  rounded-full transition`}
          ></div>
        </div>

        {label && <div className="ml-3 text-gray-700 font-medium">{label}</div>}
      </label>
    </div>
  );
};
