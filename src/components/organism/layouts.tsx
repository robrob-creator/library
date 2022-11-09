/* eslint-disable prettier/prettier */
/* eslint-disable no-empty-pattern */
/* eslint-disable prettier/prettier */
import { ReactChild } from "react";
import { SideDisplay } from "./sideDisplay";

export type LayoutProps = {
  children?: ReactChild;
};

export const Layout = <PROPS extends LayoutProps>({
  children,
}: PROPS): JSX.Element => {
  return (
    <div className="flex flex-wrap">
      <SideDisplay /> <div className="px-5 py-1 mt-12 mx-auto">{children}</div>
    </div>
  );
};
