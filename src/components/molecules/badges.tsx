/* eslint-disable prettier/prettier */
/* eslint-disable no-empty-pattern */

import { Shape, Size } from "../types";
import { Text } from "../atoms/Text";
export type BadgeProps = {
  count: string;
  shape?: Shape;
  color?: string;
};
function getStylesByShape(shape: Shape) {
  switch (shape) {
    case "rectangle":
      return "w-7 h-4";
    case "square":
      return "w-7 h-7";
    case "circle":
      return "w-7 h-7 rounded-full";
    case "oval":
      return "w-7 h-4 rounded-full";
    default:
      return "w-7 h-4 rounded-full";
  }
}

export const Badge = <PROPS extends BadgeProps>({
  count,
  shape = "oval",
  color = "#3D50BA",
}: PROPS): JSX.Element => {
  const stylesByShape = getStylesByShape(shape);
  return (
    <div
      className={`${stylesByShape} inline-flex flex-col items-center justify-center`}
      style={{ backgroundColor: color }}
    >
      <Text size="sm">{count}</Text>
    </div>
  );
};
