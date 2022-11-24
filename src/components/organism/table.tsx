/* eslint-disable prettier/prettier */
/* eslint-disable no-empty-pattern */
/* eslint-disable prettier/prettier */
import { ReactChild } from "react";
import { SideDisplay } from "./sideDisplay";

export type TableProps = {
  data: { title: string; columnData: {}[] }[];
};

export const Table = <PROPS extends TableProps>({
  data,
}: PROPS): JSX.Element => {
  return (
    <table>
      <thead>
        <tr>
          {data.map((item, index) => {
            return <th>{item.title}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => {
          return (
            <tr>
              {item?.columnData?.map(() => {
                return <td>N/A</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
