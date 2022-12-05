/* eslint-disable prettier/prettier */
import imageOne from "../../../../assets/images/cover1.png";
import imagetwo from "../../../../assets/images/cover2.png";
import sampleApp from "../../../../assets/images/sampleApp.png";
import { ArrowStrokeDown, StackIcon, DownloadIcon } from "../../atoms/icons";
import { Layout } from "src/components/types";
import { Text, HeaderText } from "../../atoms/Text";
import { HorizontalCard } from "./horizontalCard";
import { VerticalCard } from "./verticalCard";

export type CardProps = {
  title?: string;
  layout?: Layout;
  imgUrl?: string;
  downloads?: string;
  description?: string;
  rating?: string;
  platforms?: { name: string; icon: string }[];
  className?: string;
  stacks?: { name: string }[];
  onClick?: () => void;
};

export const Card = <PROPS extends CardProps>({
  imgUrl,
  title,
  downloads,
  rating,
  platforms,
  stacks,
  className,
  layout,
  onClick,
}: PROPS): JSX.Element => {
  return layout == "vertical" ? (
    <VerticalCard
      title={title}
      imgUrl={imgUrl}
      downloads={downloads}
      platforms={platforms}
      rating={rating}
      stacks={stacks}
      className={className}
    />
  ) : (
    <HorizontalCard />
  );
};

export const CardTwo = <PROPS extends CardProps>({}: PROPS): JSX.Element => {
  return (
    <div>
      <div className="relative" style={{ width: 1280, height: 540 }}>
        <div
          className="relative bg-gray-300"
          style={{ width: 1280, height: 540 }}
        >
          <div
            className="bg-gradient-to-b from-black to-black"
            style={{ width: 1280, height: 540 }}
          />
          <div
            className="inline-flex flex-col space-y-6 items-center justify-end w-72 h-24 absolute"
            style={{ left: 62, top: 294 }}
          >
            <p className="w-72 h-1/5 text-5xl font-semibold leading-tight text-white">
              Point of Sale
            </p>
            <p className="text-lg leading-relaxed text-white">
              Set-up in minutes, sell in seconds.
              <br />
              Compatible with any device.
            </p>
          </div>
          <div
            className="inline-flex items-center justify-center w-36 px-5 py-2 absolute bg-blue-700 rounded-lg"
            style={{ left: 61, top: 440 }}
          >
            <p className="text-xs font-semibold leading-snug text-center text-gray-50">
              Install
            </p>
          </div>
          <div
            className="inline-flex items-center justify-center w-36 px-5 py-2 absolute bg-gray-900 border rounded-lg border-gray-300"
            style={{ left: 226, top: 440 }}
          >
            <p className="text-xs font-semibold leading-snug text-center text-gray-50">
              Demo
            </p>
          </div>
        </div>
        <img
          className="absolute left-0 top-0"
          style={{ width: 1280, height: 1920 }}
          src="https://via.placeholder.com/1280x1920"
        />
      </div>
      <div className="bg-gray-300" style={{ width: 1280, height: 173 }} />
      <div
        className="inline-flex space-x-20 items-start justify-start"
        style={{ width: 1013, height: 117 }}
      >
        <div className="inline-flex flex-col space-y-96 items-end justify-end flex-1">
          <div className="flex flex-col items-center justify-end w-16 flex-1">
            <p className="w-full text-base font-bold leading-10 text-center text-gray-700">
              Ratings
            </p>
            <p className="text-3xl font-semibold leading-10 text-center text-gray-700">
              4.5
            </p>
            <div className="inline-flex space-x-0.5 items-start justify-start">
              <img
                className="w-1/6 h-full rounded-full"
                src="https://via.placeholder.com/10x10"
              />
              <img
                className="w-1/6 h-full rounded-full"
                src="https://via.placeholder.com/10x10"
              />
              <img
                className="w-1/6 h-full rounded-full"
                src="https://via.placeholder.com/10x10"
              />
              <img
                className="w-1/6 h-full rounded-full"
                src="https://via.placeholder.com/10x10"
              />
              <img
                className="w-1/6 h-full rounded-full"
                src="https://via.placeholder.com/10x10"
              />
            </div>
          </div>
          <div className="transform -rotate-90 w-16 h-0.5 border-black" />
        </div>
        <div className="inline-flex flex-col space-y-96 items-end justify-end flex-1">
          <div className="relative" style={{ width: 81, height: 117 }}>
            <p className="w-16 absolute right-0 top-0 text-base font-bold leading-10 text-center text-gray-700">
              Chart
            </p>
            <p className="absolute right-0 bottom-0 text-xs leading-10 text-center text-gray-700">
              Point of sale
            </p>
            <p
              className="absolute text-3xl font-semibold leading-10 text-center text-gray-700"
              style={{ left: 219, top: 40 }}
            >
              No. 5
            </p>
          </div>
          <div className="transform -rotate-90 w-16 h-0.5 border-black" />
        </div>
        <div className="inline-flex flex-col space-y-96 items-end justify-end w-1/6">
          <div className="relative" style={{ width: 128, height: 117 }}>
            <p className="absolute right-0 top-0 text-base font-bold leading-10 text-center text-gray-700">
              Developer
            </p>
            <p className="absolute right-0 bottom-0 text-xs leading-10 text-center text-gray-700">
              Project Moonshot Inc.
            </p>
            <img
              className="w-10 h-10 absolute inset-y-0 right-0 my-auto rounded-lg"
              src="https://via.placeholder.com/40x40"
            />
          </div>
          <div className="transform -rotate-90 w-16 h-0.5 border-black" />
        </div>
        <div className="inline-flex flex-col space-y-96 items-end justify-end flex-1">
          <div className="relative" style={{ width: 83, height: 117 }}>
            <p className="absolute right-0 top-0 text-base font-bold leading-10 text-center text-gray-700">
              Language
            </p>
            <p className="absolute right-0 bottom-0 text-xs leading-10 text-center text-gray-700">
              +5 More
            </p>
            <p
              className="absolute text-3xl font-semibold leading-10 text-center text-gray-700"
              style={{ left: 718, top: 34 }}
            >
              EN
            </p>
          </div>
          <div className="transform -rotate-90 w-16 h-0.5 border-black" />
        </div>
        <div className="inline-flex flex-col space-y-96 items-end justify-end flex-1">
          <div className="relative" style={{ width: 88, height: 117 }}>
            <p className="absolute right-0 top-0 text-base font-bold leading-10 text-center text-gray-700">
              Size
            </p>
            <p className="absolute right-0 bottom-0 text-xs leading-10 text-center text-gray-700">
              MB
            </p>
            <p
              className="absolute text-3xl font-semibold leading-10 text-center text-gray-700"
              style={{ left: 925, top: 34 }}
            >
              235.5
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export const DescriptionCard = <
  PROPS extends CardProps
>({}: PROPS): JSX.Element => {
  return (
    <div className="px-6 sm:px-12 border-b-2 border-gray-200 py-10 w-screen">
      <div className="sm:grid sm:grid-cols-2 gap-2 flex overflow-x-auto">
        <img className="sm:w-full w-96 h-full mx-2" src={imageOne} />
        <img className="sm:w-full w-96 h-full mx-2" src={imagetwo} />
      </div>
      <div className="flex justify-between sm:flex-nowrap flex-wrap pt-8 pb-16 ">
        <p className="text-lg w-screen leading-loose text-justify text-gray-900">
          Set up new stores quickly and easily with just an internet connection.
          Then use your Point of Sale everywhere, anytime. While an internet
          connection is required to start the Point of Sale, it will stay
          operational even after complete disconnection.
        </p>
        <div className="sm:inline-flex sm:flex-col sm:w-1/3 sm:space-y-1.5 sm:items-end sm:justify-start flex w-full justify-between">
          <p className="text-lg font-medium text-justify text-blue-700">
            Project Moonshot Inc.
          </p>
          <div className="ml-20 inline-flex space-x-2.5 items-center justify-center">
            <p className="text-xl font-medium text-justify text-gray-700">
              Support
            </p>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.5999 9.99999C19.5999 15.3019 15.3018 19.6 9.9999 19.6C4.69797 19.6 0.399902 15.3019 0.399902 9.99999C0.399902 4.69806 4.69797 0.399994 9.9999 0.399994C15.3018 0.399994 19.5999 4.69806 19.5999 9.99999ZM9.99992 6.39999C9.55726 6.39999 9.16902 6.63905 8.95972 7.00087C8.62787 7.57454 7.8938 7.77057 7.32013 7.43872C6.74645 7.10687 6.55042 6.3728 6.88227 5.79912C7.50292 4.72621 8.6659 3.99999 9.99992 3.99999C11.9881 3.99999 13.5999 5.61177 13.5999 7.59999C13.5999 9.16746 12.5981 10.5009 11.1999 10.9951V11.2C11.1999 11.8627 10.6627 12.4 9.99992 12.4C9.33718 12.4 8.79992 11.8627 8.79992 11.2V9.99999C8.79992 9.33725 9.33718 8.79999 9.99992 8.79999C10.6627 8.79999 11.1999 8.26274 11.1999 7.59999C11.1999 6.93725 10.6627 6.39999 9.99992 6.39999ZM9.9999 16C10.6626 16 11.1999 15.4627 11.1999 14.8C11.1999 14.1373 10.6626 13.6 9.9999 13.6C9.33716 13.6 8.7999 14.1373 8.7999 14.8C8.7999 15.4627 9.33716 16 9.9999 16Z"
                fill="#3C4043"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
export const WhatsNewCard = <
  PROPS extends CardProps
>({}: PROPS): JSX.Element => {
  return (
    <div className="px-4 sm:px-12 border-b-2 border-gray-200 py-4 w-screen">
      <div className="sm:inline-flex flex w-full justify-between flex-wrap s sm:items-start  pt-8 pb-16">
        <div className="sm:text-justify text-gray-900 ">
          <span className="font-bold text-2xl">What’s New</span>
          <br /> <br />
          <span className="text-lg">Updates:</span>
          <br />
          <ul className="ml-10 list-disc">
            <li className="text-lg">
              Set up new stores quickly and easily with just an internet
              connection.
            </li>

            <li className="text-lg">
              Set up new stores quickly and easily with just an internet
              connection.
            </li>

            <li className="text-lg">
              Set up new stores quickly and easily with just an internet
              connection.
            </li>

            <li className="text-lg">
              Set up new stores quickly and easily with just an internet
              connection.
            </li>
          </ul>
        </div>
        <div className="sm:inline-flex sm:w-1/3 w-full sm:flex-col sm:space-y-1.5 mt-8 sm:items-end sm:justify-start flex justify-between">
          <p className="text-lg font-medium text-right text-blue-700">
            Version History
          </p>
          <p className="text-lg font-medium text-right text-gray-600">
            1w ago
            <br className="sm:inline hidden" />
            Version 7.1.1
          </p>
        </div>
      </div>
    </div>
  );
};
export const InformationCard = <
  PROPS extends CardProps
>({}: PROPS): JSX.Element => {
  return (
    <div className="px-6 sm:px-4 border-b-2 border-gray-200 py-10">
      <div className="relative w-full ">
        <p className=" text-2xl font-semibold leading-10 text-justify text-gray-900">
          Information
        </p>
        <div className="sm:inline-flex flex flex-wrap sm:space-x-32 items-start justify-between mr-14 ">
          <div className="inline-flex flex-col space-y-12 items-start justify-start">
            <div className="relative">
              <p className="sm:text-xl text-base leading-10 text-justify text-gray-600">
                Developer
              </p>
              <p className="sm:text-xl text-base font-medium leading-10 text-justify text-gray-900">
                Project Moonshot Inc.
              </p>
            </div>
            <div className="relative">
              <p className="sm:text-xl text-base leading-10 text-justify text-gray-600">
                Compatibility
              </p>
              <p className="sm:text-xl text-base font-medium leading-10 text-justify text-gray-900">
                Windows, MacOS
              </p>
            </div>
            <div className="relative">
              <p className="sm:text-xl text-base leading-10 text-justify text-gray-600">
                Copyright
              </p>
              <p className="sm:text-xl text-base font-medium leading-10 text-justify text-gray-900">
                © Project Moonshot Inc.
              </p>
            </div>
          </div>
          <div className="inline-flex flex-col space-y-12 items-start justify-start">
            <div className="relative">
              <p className="sm:text-xl text-base leading-10 text-justify text-gray-600">
                Size
              </p>
              <p className="sm:text-xl text-base font-medium leading-10 text-justify text-gray-900">
                235.5 MB
              </p>
            </div>
            <div className="relative">
              <p className="sm:text-xl text-base leading-10 text-justify text-gray-600">
                Language
              </p>
              <p className="sm:text-xl text-base font-medium leading-10 text-justify text-gray-900">
                English and 4 more
              </p>
            </div>
            <div className="relative">
              <p className="sm:text-xl text-base leading-10 text-justify text-gray-600">
                Category
              </p>
              <p className="sm:text-xl text-base font-medium leading-10 text-justify text-gray-900">
                Point of Sale
              </p>
            </div>
          </div>
          <div className="inline-flex flex-col space-y-12 items-start justify-start">
            <div className="relative">
              <p className="sm:text-xl text-base leading-10 text-justify text-gray-600">
                Rating
              </p>
              <p className="sm:text-xl text-base font-medium leading-10 text-justify text-gray-900">
                4.5
              </p>
            </div>
            <div className="relative">
              <p className="sm:text-xl text-base leading-10 text-justify text-gray-600">
                Release date
              </p>
              <p className="sm:text-xl text-base font-medium leading-10 text-justify text-gray-900">
                January 01, 2022
              </p>
            </div>
            <div className="relative">
              <p className="sm:text-xl text-base leading-10 text-justify text-gray-600">
                Build Version
              </p>
              <p className="sm:text-xl text-base font-medium leading-10 text-justify text-gray-900">
                7.1.1
              </p>
            </div>
          </div>
          <div className="inline-flex flex-col space-y-12 items-start justify-start">
            <div className="relative">
              <p className="sm:text-xl text-base leading-10 text-justify text-gray-600">
                Downloads
              </p>
              <p className="sm:text-xl text-base font-medium leading-10 text-justify text-gray-900">
                405
              </p>
            </div>
            <div className="relative">
              <p className="sm:text-xl text-base leading-10 text-justify text-gray-600">
                Technology Stacks
              </p>
              <p className="sm:text-xl text-base font-medium leading-10 text-justify text-gray-900">
                React, React Native
                <br />
                C#
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export const MoreCard = <PROPS extends CardProps>({}: PROPS): JSX.Element => {
  return (
    <div className="p-4 sm:px-12 border-b-2 border-gray-200 py-10 bg-gray-300 w-screen">
      <div className="flex justify-between">
        <div>
          <p className="sm:text-2xl text-base font-semibold leading-10 text-justify text-gray-900">
            More by Project Moonshoot Inc.
          </p>
          <div className="inline-flex space-x-8 items-center justify-end w-80 h-36">
            <img className="w-1/2 h-full rounded-lg" src={sampleApp} />
            <div className="inline-flex flex-col space-y-2 items-start justify-start w-32 h-32">
              <p className="text-xl font-semibold leading-10 text-justify">
                App name
              </p>
              <p className="text-base leading-10 text-justify text-gray-900">
                Description
              </p>
              <div className="inline-flex items-center justify-center w-full h-9 px-4 py-2 bg-blue-700 rounded-full">
                <p className="text-xs font-semibold leading-snug text-center text-gray-50">
                  ₱ 2,000.00
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="inline-flex sm:space-x-96 items-start ">
          <div className="inline-flex space-x-2.5 items-center sm:w-36 w-28 ">
            <p className="sm:text-2xl text-base font-medium leading-10 text-right text-blue-700">
              See All
            </p>
            <ArrowStrokeDown width="2px" />
          </div>
        </div>
      </div>
    </div>
  );
};
export const SimilarCard = <
  PROPS extends CardProps
>({}: PROPS): JSX.Element => {
  return (
    <div className="px-4 sm:px-12 border-b-2 border-gray-200 py-10 ">
      <div className="text-left space-y-6 w-screen ">
        <p className=" text-2xl font-semibold leading-10 text-left text-gray-900">
          Similar Apps
        </p>
        <div className="inline-flex w-screen space-x-12 items-start justify-start overflow-x-auto">
          <div className="inline-flex flex-col space-y-3 items-start justify-start ">
            <img
              className="w-96 h-56 rounded-lg"
              src="https://via.placeholder.com/355x225"
            />
            <div className="flex flex-col space-y-0.5 items-center justify-end w-96 h-32">
              <p className="text-2xl font-semibold leading-10 text-justify">
                App Name
              </p>
              <p className="w-full h-2/3 text-xs text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
          <div className="inline-flex flex-col space-y-3 items-start justify-start">
            <img
              className="w-96  h-56 rounded-lg"
              src="https://via.placeholder.com/355x225"
            />
            <div className="flex flex-col space-y-0.5 items-center justify-end  w-96  h-32">
              <p className="text-2xl font-semibold leading-10 text-justify">
                App Name
              </p>
              <p className="w-full h-2/3 text-xs text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
          <div className="inline-flex flex-col space-y-3 items-start justify-start">
            <img
              className="w-96 h-56 rounded-lg"
              src="https://via.placeholder.com/355x225"
            />
            <div className="flex flex-col space-y-0.5 items-center justify-end  w-96  h-32">
              <p className="text-2xl font-semibold leading-10 text-justify">
                App Name
              </p>
              <p className="w-full h-2/3 text-xs text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
//polishing naming convention
export const StatusCard = <PROPS extends CardProps>({}: PROPS): JSX.Element => {
  return (
    <div className="flex justify-between pb-14 border-b-2 border-opacity-5 border-gray-800 px-14 pt-14">
      <div
        className="inline-flex items-center justify-end space-x-9"
        style={{ width: "437.32px", height: "159px" }}
      >
        <img
          className="h-full w-52 rounded-lg"
          src="https://f4.bcbits.com/img/a2964941556_16.jpg"
        />
        <div className="inline-flex h-36 w-48 flex-col items-center justify-end space-y-8">
          <div className="relative w-full h-14">
            <HeaderText size="sm" fontStyle="medium" color="gray-600">
              Point of Sale
            </HeaderText>
            <Text size="md" color="gray-600">
              Project Moonshot Inc.
            </Text>
          </div>
          <div className="flex flex-col items-start justify-start w-full">
            <div className="inline-flex items-start justify-start space-x-5">
              <div className="flex items-center justify-start space-x-1">
                <StackIcon />
                <p className="text-xs leading-7 text-gray-600">Windows</p>
              </div>
              <div className="flex items-center justify-start space-x-1">
                <StackIcon />
                <p className="text-xs leading-7 text-gray-600">Mac</p>
              </div>
              <div className="flex items-center justify-start space-x-1">
                <StackIcon />
                <p className="text-xs leading-7 text-gray-600">Web</p>
              </div>
            </div>
            <div className="inline-flex items-center justify-start space-x-1">
              <StackIcon />
              <p className="text-xs leading-7 text-gray-600">
                Stack: Linux, MySQL, C#
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between w-60">
        <div className="inline-flex space-x-32 items-center justify-start">
          <p className="text-base font-semibold leading-snug text-gray-600">
            Status:
          </p>
          <p className="text-base font-semibold leading-snug text-green-600">
            Active
          </p>
        </div>
        <div className="inline-flex space-x-8 items-center justify-start">
          <div className="flex items-center justify-center w-36 px-5 py-2 border rounded-lg border-gray-600">
            <p className="text-xs font-semibold leading-snug text-center text-gray-600">
              Deactivate
            </p>
          </div>
          <p className="text-base font-medium text-red-700">Remove</p>
        </div>
      </div>
    </div>
  );
};
//component name subject for change
export const ListCard = <PROPS extends CardProps>({}: PROPS): JSX.Element => {
  return (
    <div
      className="inline-flex flex-col items-start justify-start w-full"
      style={{ height: 500 }}
    >
      <div
        className="inline-flex items-start justify-start w-full"
        style={{ height: 50 }}
      >
        <div
          className="flex items-center justify-start pl-5 w-full"
          style={{ height: 50 }}
        >
          <p className="text-xl font-medium leading-10 text-gray-600">
            Active User
          </p>
        </div>
        <div
          className="flex items-center justify-end pr-5 w-full"
          style={{ height: 50 }}
        >
          <p className="text-xl font-medium leading-10 text-right text-gray-600">
            5000
          </p>
        </div>
      </div>
      <div
        className="inline-flex items-start justify-start bg-gray-200 w-full"
        style={{ height: 50 }}
      >
        <div
          className="flex items-center justify-start pl-5 w-full"
          style={{ height: 50 }}
        >
          <p className="text-xl font-medium leading-10 text-gray-600">
            Active session
          </p>
        </div>
        <div
          className="flex items-center justify-end pr-5 w-full"
          style={{ height: 50 }}
        >
          <p className="text-xl font-medium leading-10 text-right text-gray-600">
            345
          </p>
        </div>
      </div>
    </div>
  );
};
//subject for change
export const DataCard = <PROPS extends CardProps>({
  className,
}: PROPS): JSX.Element => {
  return (
    <div className={`${className} shadow rounded-lg`} style={{ height: 307 }}>
      <div
        className=" flex flex-col relative bg-white rounded-lg "
        style={{ height: 307 }}
      >
        <div className="inline-flex space-x-44 items-center justify-between mx-6 mt-10">
          <p className="text-base font-medium text-gray-800">Data Name</p>
          <div className="flex space-x-2 items-center justify-start p-2 border rounded-lg border-gray-400 border-opacity-25">
            <p className="text-xs font-medium text-gray-400">This month</p>
            <img
              className="w-2 h-2 rounded-full"
              src="https://via.placeholder.com/9x9"
            />
          </div>
        </div>
        <div className="inline-flex flex-col space-y-6 items-end justify-end w-full px-10 h-32 mt-4                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 ">
          <div className="flex flex-col space-y-4 items-start justify-end w-11 h-14">
            <div className="inline-flex space-x-2 items-center justify-end w-full h-4">
              <div className="w-3 h-3/4 bg-purple-800 rounded-full" />
              <p className="text-xs text-gray-400">Sold</p>
            </div>
            <p className="text-base font-semibold text-gray-800">10K</p>
          </div>
          <div className="flex flex-col space-y-4 items-start justify-end w-11 h-14">
            <div className="inline-flex space-x-2 items-center justify-end w-full h-4">
              <div className="w-3 h-3/4 bg-green-600 rounded-full" />
              <p className="text-xs text-gray-400">Sold</p>
            </div>
            <p className="text-base font-semibold text-gray-800">10K</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export const BasicCard = <PROPS extends CardProps>({
  imgUrl,
  title,
  description,
}: PROPS): JSX.Element => {
  return (
    <div className="inline-flex flex-col space-y-2.5 items-start justify-start">
      <img
        className="w-full h-20 rounded-lg"
        src={imgUrl ? imageOne : "https://via.placeholder.com/100x80"}
      />
      <p className="text-base leading-normal text-gray-600">{title}</p>
      <p className="text-sm leading-normal text-gray-600">{description}</p>
    </div>
  );
};

export const BasicDataCard = <PROPS extends CardProps>({
  className,
}: PROPS): JSX.Element => {
  return (
    <div
      className={`${className} inline-flex space-x-80 items-end justify-end  shadow rounded-lg`}
    >
      <div className="inline-flex flex-col space-y-11 items-center justify-end flex-1 h-full pb-14 bg-white rounded-lg">
        <div className="inline-flex items-center justify-start w-full h-1/5 px-6 py-2.5 border border-gray-200">
          <p className="text-base font-semibold text-gray-700">Entity by</p>
        </div>
        <div className="flex flex-col space-y-6 items-center justify-end w-32 h-36">
          <img
            className="w-28 h-28 rounded-lg"
            src="https://via.placeholder.com/108x108"
          />
          <div className="inline-flex space-x-8 items-start justify-start">
            <div className="flex space-x-1 items-center justify-start">
              <div className="w-1/5 h-2.5 bg-green-400 rounded-full" />
              <p className="text-xs text-gray-900">Entity</p>
            </div>
            <div className="flex space-x-1 items-center justify-start">
              <div className="w-1/5 h-2.5 bg-purple-500 rounded-full" />
              <p className="text-xs text-gray-900">Entity</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
