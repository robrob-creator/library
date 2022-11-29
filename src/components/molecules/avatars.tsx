/* eslint-disable prettier/prettier */
/* eslint-disable no-empty-pattern */

import { Size } from "../types";
import { Text } from "../atoms/Text";
export type AvatarProps = {
  name: string;
  size: Size;
  fontColor: string;
  backgroundColor: string;
};
function getAvatarBySize(type: Size) {
  switch (type) {
    case "xl":
      return { body: "w-14 h-14", text: "xl" };
    case "lg":
      return { body: "w-12 h-12", text: "lg" };
    case "md":
      return { body: "w-10 h-10", text: "md" };
    case "sm":
      return { body: "w-8 h-8", text: "sm" };
    default:
      return { body: "w-10 h-10", text: "sm" };
  }
}
export const Avatar = <PROPS extends AvatarProps>({
  name,
  size,
  fontColor = "gray-600",
  backgroundColor = "#e8e8e8",
}: PROPS): JSX.Element => {
  const stylesBySize = getAvatarBySize(size);

  return (
    <div
      className={`${stylesBySize.body} inline-flex overflow-hidden relative justify-center items-center  bg-gray-100 rounded-full dark:bg-gray-600`}
      style={{ backgroundColor: backgroundColor }}
    >
      <Text fontStyle="semibold" color={fontColor}>
        {name && name.charAt(0)}
      </Text>
    </div>
  );
};
