/* eslint-disable prettier/prettier */
/* eslint-disable no-empty-pattern */

import { Shape, Size } from "../types";
import { Text } from "../atoms/Text";
export type BadgeProps = {
  count: number;
  shape?: Shape;
  color?: string;
};
function getStylesByShape(shape: Shape) {
  switch (shape) {
    case "rectangle":
      return "w-10 h-6";
    case "square":
      return "w-10 h-10";
    case "circle":
      return "w-10 h-10 rounded-full";
    case "oval":
      return "w-10 h-6 rounded-full";
    default:
      return "w-10 h-6 rounded-full";
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
      <Text size="sm">{count > 99 ? "99+" : count}</Text>
    </div>
  );
};
