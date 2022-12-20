/* eslint-disable prettier/prettier */
/* eslint-disable no-empty-pattern */
/* eslint-disable prettier/prettier */
import { BlueIsaacLogo, FilterIcon, UserAvatar } from "../atoms/icons";
import React, { useState } from "react";
export type NavigationProps = {
  logo?: string;
  profileImage?: string;
  centerElements?: React.ReactNode;
  rightElements?: React.ReactNode;
  leftElements?: React.ReactNode;
  className?: string;
};
type TabProps = {
  width?: string;
};
export const NavigationBar = <PROPS extends NavigationProps>({
  logo,
  rightElements,
  leftElements,
  centerElements,
  className,
}: PROPS): JSX.Element => {
  const [showlist, setShowList] = useState(false);
  return (
    <>
      <nav
        className={`${className} flex items-center justify-between flex-wrap  py-3.5 pl-11 sm:pr-14 fixed w-screen bg-white  z-20 left-0 top-0`}
      >
        {showlist ? (
          <button
            className="tablet:hidden items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white"
            onClick={() => setShowList(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="fill-current h-3 w-3"
            >
              <path stroke="black" strokeWidth="2" d="M1 11L11 1"></path>
              <path stroke="black" strokeWidth="2" d="M1 1L11 11"></path>
            </svg>
          </button>
        ) : (
          <button
            className="tablet:hidden items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white"
            onClick={() => setShowList(true)}
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        )}
        <div className="flex items-center flex-shrink-0 text-white sm:mr-6">
          {logo ? (
            <img className="w-15 h-10" src={logo} />
          ) : (
            <BlueIsaacLogo className="w-32 h-3/4" />
          )}
        </div>

        <div className="flex justify-start">{leftElements && leftElements}</div>
        <div
          className={`w-full hidden sm:block flex-grow lg:flex lg:items-center lg:justify-center lg:w-auto`}
        >
          {centerElements && centerElements}
        </div>
        <div className="flex justify-end">{rightElements && rightElements}</div>
      </nav>
      <div className="bg-white w-screen h-screen fixed left-0 z-10">
        {centerElements}
      </div>
    </>
  );
};

export const Tabs = <PROPS extends TabProps>({
  width = "1280",
}: PROPS): JSX.Element => {
  return (
    <div>
      <div className="flex mb-4 py-4 sm:px-4 sm:w-full w-screen items-center sm:space-x-12  sm:justify-between sm:border-0 border-b-2 border-b-gray-200 ">
        <div className="flex space-x-2 sm:relative absolute sm:w-22 left-4 w-18 items-center justify-start flex-1 px-3 py-2.5 bg-gray-100 border rounded-lg border-gray-600">
          <p className="flex-1 text-sm leading-tight text-gray-600">Popular</p>
          <div className="flex items-center justify-center  h-4 px-0.5 pt-1.5 pb-1">
            <svg
              width="14"
              height="9"
              viewBox="0 0 14 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-1 h-full rounded-full"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.582029 0.910765C0.907466 0.585328 1.4351 0.585328 1.76054 0.910765L7.00462 6.15484L12.2487 0.910765C12.5741 0.585328 13.1018 0.585328 13.4272 0.910765C13.7526 1.2362 13.7526 1.76384 13.4272 2.08928L7.59387 7.92261C7.26844 8.24805 6.7408 8.24805 6.41536 7.92261L0.582029 2.08928C0.256592 1.76384 0.256592 1.2362 0.582029 0.910765Z"
                fill="#9699AE"
              />
            </svg>
          </div>
        </div>
        <div className="flex space-x-2.5 sm:visible invisible  sm:w-96 w-18 lg:w-full h-full items-start overflow-x-auto">
          <div className="flex items-center justify-center h-full px-5 py-1 bg-gray-300 rounded-full">
            <p className="text-xs font-semibold tracking-wider leading-normal text-center">
              Discover
            </p>
          </div>
          <div className="flex items-center justify-center h-full px-5 py-1 border rounded-full border-gray-200">
            <p className="text-xs tracking-wider leading-normal text-center text-gray-600">
              Web
            </p>
          </div>
          <div className="flex items-center justify-center h-full px-5 py-1 border rounded-full border-gray-200">
            <p className="text-xs tracking-wider leading-normal text-center text-gray-600">
              Mobile app
            </p>
          </div>
          <div className="flex items-center justify-center h-full px-5 py-1 border rounded-full border-gray-200">
            <p className="text-xs tracking-wider leading-normal text-center text-gray-600">
              Smart Devices
            </p>
          </div>
          <div className="flex items-center justify-center h-full px-5 py-1 border rounded-full border-gray-200">
            <p className="text-xs tracking-wider leading-normal text-center text-gray-600">
              IOT
            </p>
          </div>
          <div className="flex items-center justify-center h-full px-5 py-1 border rounded-full border-gray-200">
            <p className="text-xs tracking-wider leading-normal text-center text-gray-600">
              Payments
            </p>
          </div>
          <div className="flex items-center justify-center h-full px-5 py-1 border rounded-full border-gray-200">
            <p className="text-xs tracking-wider leading-normal text-center text-gray-600">
              Logistics
            </p>
          </div>
          <div className="flex items-center justify-center h-full px-5 py-1 border rounded-full border-gray-200">
            <p className="text-xs tracking-wider leading-normal text-center text-gray-600">
              Systems
            </p>
          </div>
        </div>
        <div className="flex sm:relative absolute space-x-2 items-center justify-center sm:w-24  right-4 px-5 py-2.5 bg-gray-100 border rounded-lg border-gray-600">
          <FilterIcon />
          <p className="text-sm leading-tight text-gray-600">Filter</p>
        </div>
      </div>
      <div
        className={`flex space-x-2.5 sm:invisible visible sm:hidden sm:h-0 h4 overflow-x-auto mr-8 ml-2`}
        style={{ width: width }}
      >
        <div className="flex items-center justify-center h-full px-5 py-1 bg-gray-300 rounded-full">
          <p className="text-xs font-semibold tracking-wider leading-normal text-center">
            Discover
          </p>
        </div>
        <div className="flex items-center justify-center h-full px-5 py-1 border rounded-full border-gray-200">
          <p className="text-xs tracking-wider leading-normal text-center text-gray-600">
            Web
          </p>
        </div>
        <div className="flex items-center justify-center h-full px-5 py-1 border rounded-full border-gray-200">
          <p className="text-xs tracking-wider leading-normal text-center text-gray-600">
            Mobile app
          </p>
        </div>
        <div className="flex items-center justify-center h-full px-5 py-1 border rounded-full border-gray-200">
          <p className="text-xs tracking-wider leading-normal text-center text-gray-600">
            Smart Devices
          </p>
        </div>
        <div className="flex items-center justify-center h-full px-5 py-1 border rounded-full border-gray-200">
          <p className="text-xs tracking-wider leading-normal text-center text-gray-600">
            IOT
          </p>
        </div>
        <div className="flex items-center justify-center h-full px-5 py-1 border rounded-full border-gray-200">
          <p className="text-xs tracking-wider leading-normal text-center text-gray-600">
            Payments
          </p>
        </div>
        <div className="flex items-center justify-center h-full px-5 py-1 border rounded-full border-gray-200">
          <p className="text-xs tracking-wider leading-normal text-center text-gray-600">
            Logistics
          </p>
        </div>
        <div className="flex items-center justify-center h-full px-5 py-1 border rounded-full border-gray-200">
          <p className="text-xs tracking-wider leading-normal text-center text-gray-600">
            Systems
          </p>
        </div>
      </div>
    </div>
  );
};
export const WhiteNavBar = <PROPS extends NavigationProps>({
  profileImage,
  logo,
}: PROPS): JSX.Element => {
  return (
    <div
      className="flex items-center justify-center py-2.5 px-16 bg-white drop-shadow-md"
      style={{ width: "100%", height: 60 }}
    >
      {logo ? (
        <img className="w-15 h-10" src={logo} />
      ) : (
        <BlueIsaacLogo className="w-32 h-3/4" />
      )}
      <div
        className="flex space-x-96 items-center justify-end"
        style={{ width: "100%", height: 40 }}
      >
        {profileImage ? (
          <img className="w-10 h-full rounded-full" src={profileImage} />
        ) : (
          <UserAvatar className="w-10 h-full rounded-full" />
        )}
      </div>
    </div>
  );
};
