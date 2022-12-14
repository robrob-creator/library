/* eslint-disable prettier/prettier */
import { EllipsesIcon } from "../../atoms/icons";
import { CardProps } from "./index";
import { Text } from "../../atoms/Text";

export const HorizontalCard = <PROPS extends CardProps>({
  imgUrl,
  title,
  content,
  subtitle,
}: PROPS): JSX.Element => {
  return (
    <div className="px-14 py-12 border-b-2 border-gray-800 border-opacity-5">
      <div className="flex w-full">
        <img
          className="w-64 h-44  rounded-lg"
          src={imgUrl || "https://via.placeholder.com/250x183"}
        />
        <div className="flex  w-full justify-between px-8">
          <div>
            <Text color="black" size="xl" fontStyle="semibold">
              {title && title}
            </Text>
            <div className="text-base leading-loose text-justify text-gray-600 w-10/12">
              {content && content}
            </div>
          </div>
          <EllipsesIcon width="8" className="flex " />
        </div>
      </div>
      <div className="inline-flex space-x-2  items-center justify-start">
        {subtitle && subtitle}
      </div>
    </div>
  );
};
