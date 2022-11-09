/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unknown-property */

import * as React from "react";

export interface CheckboxProps {
  label?: string;
  checked?: boolean;
}

export const Checkbox = ({ label, checked = false }: CheckboxProps) => {
  const [isChecked, setIsChecked] = React.useState(Boolean);

  React.useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  return (
    <div>
      <input
        type="checkbox"
        className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
        checked={isChecked}
        onChange={() => setIsChecked((prev) => !prev)}
      />
      {label && (
        <label
          className="form-check-label mx-2 text-base inline-block text-gray-800"
          htmlFor="flexCheckDefault"
        >
          {label}
        </label>
      )}
    </div>
  );
};
