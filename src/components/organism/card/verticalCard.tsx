/* eslint-disable prettier/prettier */
import { CardProps } from "./index";

export const VerticalCard = <PROPS extends CardProps>({
  imgUrl,
  title,
  subtitle,
  content,
  className,
  onClick,
}: PROPS): JSX.Element => {
  return (
    <div
      className={`${className} inline-flex lg:mt-4 flex-col w-52 px-4  justify-end lg:w-72 md:w-80 md:h-72 lg:h-72 h-64 pl-0.5 pb-2 `}
      onClick={onClick}
    >
      <img
        className=" sm:w-80 w-52 sm:h-72 h-64 rounded-2xl cover "
        src={imgUrl}
      />

      <div className="inline-flex w-full space-x-8 items-center justify-start">
        <p className=" lg:w-36 h-6 text-sm font-semibold leading-normal">
          {title}
        </p>
        <div className="flex space-x-2.5 items-start justify-start">
          {subtitle && subtitle}
        </div>
      </div>
      <div className="flex flex-col items-start justify-start ">
        {content && content}
      </div>
    </div>
  );
};
