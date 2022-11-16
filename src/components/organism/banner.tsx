/* eslint-disable prettier/prettier */
import { HeaderText, Text } from "../atoms/Text";
import { Search } from "../atoms/logo";
import background from "../../../assets/images/bg-full.png";
import dummyProduct from "../../../assets/images/dummyProduct.png";
import React from "react";

export type BannerProps = {
  imgURL?: string;
  title?: string;
  description?: string;
  extra?: React.ReactNode;
};

export const ProductBanner = <PROPS extends BannerProps>({
  title,
  description,
  extra,
  imgURL,
}: PROPS): JSX.Element => {
  return (
    <div className="relative w-screen" style={{ height: 540 }}>
      <div
        className="relative bg-cover w-screen bg-gray-300"
        style={{
          height: 540,
          backgroundImage: `url(${imgURL || dummyProduct})`,
        }}
      >
        <div
          className="w-screen   opacity-50 bg-gradient-to-b from-black to-black"
          style={{
            height: 540,
            width: "100vw",
          }}
        />

        <div
          className="inline-flex  flex-col space-y-6 items-center justify-end w-80 h-36 absolute"
          style={{ left: 62, top: 150 }}
        >
          <p className="w-80 h-1/5 text-5xl font-semibold leading-tight text-white">
            {title}
          </p>
        </div>
        <div
          className="inline-flex flex-col space-y-6 items-center  justify-end w-72 h-24 absolute"
          style={{ left: 62, top: 294 }}
        >
          <p className="text-lg sm:text-left text-center leading-relaxed text-white">
            {description}
          </p>
        </div>
        {extra}
        {/* <div
          className="inline-flex items-center justify-center w-36 px-5 py-2 absolute bg-blue-700 rounded-lg"
          style={{ left: 61, top: 440 }}
        >
          <p className="text-xs font-semibold leading-snug text-center text-gray-50">
            ₱ 2,000.00
          </p>
        </div>
        <div
          className="inline-flex items-center justify-center w-36 px-5 py-2 absolute bg-gray-900 border rounded-lg border-gray-300"
          style={{ left: 226, top: 440 }}
        >
          <p className="text-xs font-semibold leading-snug text-center text-gray-50">
            Demo
          </p>
  </div>*/}
      </div>
    </div>
  );
};

export const Banner = <PROPS extends BannerProps>({}: PROPS): JSX.Element => {
  return (
    <div
      className="flex justify-center py-44 bg-cover w-full"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="sm:h-60 sm:w-7/12 inline-flex flex-col h-80 space-y-10 items-center justify-start">
        <div className="flex flex-col space-y-4 items-center justify-start text-center">
          <HeaderText size="xl" color="white">
            Welcome to ISAAC Marketplace!
          </HeaderText>
          <Text size="xl" className="text-center">
            Ut eu sem integer vitae justo eget magna fermentum iaculis eu non
            diam phasellus vestibulum lorem sed risus ultricies tristique
          </Text>
        </div>
        <div
          className="flex flex-col space-y-8 items-center justify-start"
          style={{ width: "47%", height: 120 }}
        >
          <div
            className="inline-flex items-center justify-start py-10 pl-10 pr-5 bg-white rounded-full"
            style={{ width: "140%", height: 60 }}
          >
            <div className="w-full flex space-x-4 items-center justify-start">
              <Search className="sm:w-1/12" />
              <input
                type="search"
                id="default-search"
                className="block p-4 pl-10 w-full text-sm text-gray-900   dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Mockups, Logos..."
                required
              />
            </div>
          </div>
        </div>
        <div className="w-full sm:inline-flex  h-8 space-x-4  items-center justify-start ">
          <p className="text-base leading-normal text-center text-white">
            Top searches
          </p>
          <div className="flex items-center">
            <div className="h-8 w-80 sm:w-auto  flex sm:space-x-2.5 items-start justify-start sm:overflow-x-visible overflow-x-scroll">
              <div className=" inline-flex items-center justify-center h-8 px-5 bg-purple-400 bg-opacity-25 border rounded-full border-white">
                <Text
                  color="white"
                  size="sm"
                  className="font-light text-center"
                >
                  Landing page
                </Text>
              </div>
              <div className="flex items-center justify-center h-full px-5 bg-purple-400 bg-opacity-25 border rounded-full border-white">
                <Text
                  color="white"
                  size="sm"
                  className="font-light text-center"
                >
                  ios
                </Text>
              </div>
              <div className="flex items-center justify-center h-full px-5 bg-purple-400 bg-opacity-25 border rounded-full border-white">
                <Text
                  color="white"
                  size="sm"
                  className="font-light text-center"
                >
                  food
                </Text>
              </div>
              <div className="flex items-center justify-center h-full px-5 bg-purple-400 bg-opacity-25 border rounded-full border-white">
                <Text
                  color="white"
                  size="sm"
                  className="font-light text-center"
                >
                  POS
                </Text>
              </div>
              <div className="flex items-center justify-center h-full px-5 bg-purple-400 bg-opacity-25 border rounded-full border-white">
                <Text
                  color="white"
                  size="sm"
                  className="font-light text-center"
                >
                  Cashier
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export const Bannesr = <PROPS extends BannerProps>({}: PROPS): JSX.Element => {
  return (
    <div
      className="flex items-center justify-content-center w-screen  bg-gray-300 overflow-x-auto"
      style={{ height: "173px" }}
    >
      {/**new */}
      <div className="inline-flex justify-items-center w-36 px-28 flex-col  space-y-96 border-r-2 border-gray-400">
        <div className="inline-flex flex-col items-center justify-end w-16 h-24">
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
      </div>
      {/**new */}
      {/**new */}
      <div className="inline-flex flex-col  space-y-96 w-36 px-28 border-r-2 border-gray-400">
        <div className="relative h-24" style={{ width: "81px" }}>
          <p className="absolute right-0 top-0 w-16 text-center text-base font-bold leading-10 text-gray-700">
            Chart
          </p>
          <p
            className="absolute w-full text-3xl font-semibold leading-10 text-gray-700"
            style={{ left: " 9px", top: "35px" }}
          >
            No. 5
          </p>
          <p className="absolute right-0 w-16 bottom-0 text-center mt-2 text-xs leading-10 text-gray-700">
            Point of sale
          </p>
        </div>
      </div>
      {/**new */}
      {/**new */}
      <div className="w-36 px-28 border-r-2 border-gray-400 flex justify-center space-y-96">
        <div
          className="flex justify-center relative h-24"
          style={{ width: "81px" }}
        >
          <p className="absolute top-0 w-16 text-center text-base font-bold leading-10 text-gray-700">
            Developer
          </p>
          <img
            className="absolute a w-8 h-8 text-3xl font-semibold leading-10 text-gray-700"
            style={{ top: "35px" }}
            src="https://via.placeholder.com/40x40"
          />
          <p className="absolute bottom-0 text-center mt-2 text-xs leading-10 text-gray-700">
            Point of sale
          </p>
        </div>
      </div>
      {/**new */}
      {/**new */}
      <div className="inline-flex flex-col  space-y-96 w-36 px-28 border-r-2 border-gray-400">
        <div className="relative h-24" style={{ width: "81px" }}>
          <p className="absolute right-0 top-0 w-16 text-center text-base font-bold leading-10 text-gray-700">
            Language
          </p>
          <p
            className="absolute w-full text-3xl font-semibold leading-10 text-gray-700"
            style={{ left: " 30px", top: "35px" }}
          >
            EN
          </p>
          <p className="absolute right-0 bottom-0  w-16 text-center mt-2 text-xs leading-10 text-gray-700">
            +5 more
          </p>
        </div>
      </div>
      {/**new */}
      {/**new */}
      <div className="inline-flex w-36 px-28  flex-col  space-y-96">
        <div className="relative h-24" style={{ width: "81px" }}>
          <p className="absolute right-0 top-0 w-16 text-center text-base font-bold leading-10 text-gray-700">
            Size
          </p>
          <p
            className="absolute w-full text-3xl font-semibold leading-10 text-gray-700"
            style={{ left: " 9px", top: "35px" }}
          >
            235.5
          </p>
          <p className="absolute right-0 bottom-0 w-16 text-center mt-2 text-xs leading-10 text-gray-700">
            MB
          </p>
        </div>
      </div>
      {/**new */}
    </div>
  );
};
