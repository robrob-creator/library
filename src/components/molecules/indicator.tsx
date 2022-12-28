/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unknown-property */
import React from "react";
import { Status } from "../types";
import { InfoIcon } from "../atoms/icons";

export interface IndicatorProps {
  Text: string;
  Icon?: React.ReactNode;
  Status?: Status;
  ClassName?: string;
}

function getStylesByStatus(status: Status) {
  switch (status) {
    case "success":
      return "bg-green-100 text-green-700 inline-flex items-center justify-center";
    case "danger":
      return "bg-[#EDBCBC] text-[#7D0909] inline-flex items-center justify-center";
    case "warning":
      return "bg-yellow-100 text-yellow-700 inline-flex items-center justify-center";
    default:
      return "bg-gray-200 text-blue-700 inline-flex items-center justify-center";
  }
}

function getColorAccentByStatus(status: Status) {
  switch (status) {
    case "success":
      return "#15803D";
    case "danger":
      return "#7D0809";
    case "warning":
      return "#A16206";
    default:
      return "gray";
  }
}

export const Indicator = ({
  Text,
  Status = "default",
  Icon = (
    <InfoIcon
      className="w-[18px] my-5 mx-2"
      color={getColorAccentByStatus(Status)}
    />
  ),
  ClassName,
}: IndicatorProps) => {
  const stylesByStatus = getStylesByStatus(Status);
  return (
    <div
      className={`${stylesByStatus} ${ClassName}inline-flex items-center justify-center  text-center w-full font-Inter font-normal leading-6 tracking-wider py-[14px]`}
    >
      <div className="inline-flex items-center justify-center gap-2">
        {Icon}
        {Text}
      </div>
    </div>
  );
};
