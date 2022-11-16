/* eslint-disable prettier/prettier */
/* eslint-disable no-empty-pattern */
/* eslint-disable prettier/prettier */

import React from "react";

export type FormProps = {
  children?: React.ReactNode;
  className?: string;
  bordered?: boolean;
  style?: object;
};

export const Form = <PROPS extends FormProps>({
  children,
  className,
  style,
  bordered = false,
}: PROPS): JSX.Element => {
  return (
    <form
      className={`${className}  ${
        bordered
          ? "flex items-center justify-center sm:px-24 pt-10 pb-9 bg-white sm:border sm:rounded-3xl sm:border-gray-300"
          : "sm:w-screen md:w-11/12  xl:w-screen w-11/12 max-w-xl"
      }`}
      style={style}
    >
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
      className={`flex items-center justify-center sm:px-24 pt-10 pb-9 bg-white sm:border sm:rounded-3xl sm:border-gray-300 ${className}`}
    >
      {children}
    </form>
  );
};
