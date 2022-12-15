/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unknown-property */
import React from "react";
import { Text } from "../atoms/Text";
import { Layout } from "../types";
export interface ListProps {
  data?: {
    label?: React.ReactNode;
    content?: React.ReactNode;
    className?: string;
    value: React.ReactNode;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
  }[];
  className?: string;
  layout?: Layout;
  alternate?: boolean;
}

export const List = <PROPS extends ListProps>({
  data,
  alternate,
  layout = "vertical",
  className,
}: PROPS): JSX.Element => {
  return (
    <div>
      <div
        className={`${className} inline-flex ${
          layout == "vertical" ? "flex-col" : "flex-row"
        } items-start justify-start w-full gap-2`}
      >
        {data &&
          data?.map((item, index) => {
            if (!item.content)
              return (
                <div
                  className={`${
                    item?.className
                  } inline-flex items-start justify-start w-full ${
                    alternate && index % 2 != 0 && "bg-gray-200"
                  }`}
                  style={{ height: 50 }}
                >
                  <div
                    className="flex items-center justify-start pl-5 w-full"
                    style={{ height: 50 }}
                  >
                    {item?.leftIcon}
                    <Text size="xl" color="gray-600" fontStyle="medium">
                      {item?.label}
                    </Text>
                  </div>
                  <div
                    className="flex items-center justify-end pr-5 gap-2 w-full"
                    style={{ height: 50 }}
                  >
                    <Text
                      size="xl"
                      color="gray-600"
                      fontStyle="medium"
                      className="text-right"
                    >
                      {item?.value}
                    </Text>
                    {item.rightIcon}
                  </div>
                </div>
              );
            return item.content;
          })}
      </div>
    </div>
  );
};
