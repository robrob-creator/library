/* eslint-disable prettier/prettier */
/* eslint-disable no-empty-pattern */
/* eslint-disable prettier/prettier */

import React from "react";

export type FormProps = {
  children?: React.ReactNode;
  className?: string;
  style?: object;
};

export const Form = <PROPS extends FormProps>({
  children,
  className,
  style,
}: PROPS): JSX.Element => {
  return (
    <form className={`${className} w-full max-w-lg `} style={style}>
      {children}
    </form>
  );
};
export const OutlinedForm = <PROPS extends FormProps>({
  children,
  className,
}: PROPS): JSX.Element => {
  return (
    <form
      className={`flex items-center justify-center px-24 pt-10 pb-9 bg-white border rounded-3xl border-gray-300 ${className}`}
    >
      {children}
    </form>
  );
};
