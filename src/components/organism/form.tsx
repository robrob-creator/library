/* eslint-disable prettier/prettier */
/* eslint-disable no-empty-pattern */
/* eslint-disable prettier/prettier */

import React from "react";

export type FormProps = {
  children?: React.ReactNode;
};

export const Form = <PROPS extends FormProps>({
  children,
}: PROPS): JSX.Element => {
  return (
    <form
      className="w-full max-w-lg"
      style={{ width: "487px", left: "677px", top: "239px" }}
    >
      {children}
    </form>
  );
};
export const OutlinedForm = <PROPS extends FormProps>({
  children,
}: PROPS): JSX.Element => {
  return (
    <form className="flex items-center justify-center px-24 pt-10 pb-9 bg-white border rounded-3xl border-gray-300">
      {children}
    </form>
  );
};
