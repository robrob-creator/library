/* eslint-disable prettier/prettier */
import { HeaderText, Text } from "../atoms/Text";
import { SearchField } from "../atoms/inputs";
import { Type } from "../types";
import background from "../../../assets/images/bg-full.png";
import dummyProduct from "../../../assets/images/dummyProduct.png";
import React, { useState } from "react";

//banner props
export type BannerProps = {
  imgURL?: string;
  title?: string;
  description?: string;
  extra?: React.ReactNode;
};
//banner elements props
export type BannerElementsProps = {
  type?: Type;
};
//getting styles by type ex. secondary, primary, subtle,text
function getStylesByType(type: Type) {
  switch (type) {
    case "primary":
      return " inline-flex items-center justify-center h-8 px-5 bg-purple-400 bg-opacity-25 border rounded-full border-white font-light text-center text-white ";
    case "secondary":
      return " inline-flex items-center justify-center h-8 px-5 bg-purple-400 bg-opacity-25 border rounded-full border-white text-center text-white ";
    case "subtle":
      return " inline-flex items-center justify-center h-8 px-5 bg-purple-400 bg-opacity-25 border rounded-full border-white text-center text-white ";
    case "text":
      return " inline-flex items-center justify-center h-8 px-5 font-semibold text-center text-blue-800 ";
    default:
      return " inline-flex items-center justify-center h-8 px-5 bg-purple-400 bg-opacity-25 border rounded-full border-white text-center text-white ";
  }
}
//product banner component
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
//common banner
export const Banner = ({}: BannerElementsProps): JSX.Element => {
  const input = React.useRef<HTMLInputElement>(null);
  const [searchMode, setSearchMode] = useState(String);
  const stylesByType = getStylesByType(!searchMode ? "secondary" : "text");

  //useEffect to trigger search mode
  React.useEffect(() => {
    if (input.current) {
      console.log(input.current);
      setSearchMode(input.current.value);
    }
  }, [input]);
  return (
    <div
      className="flex justify-center sm:py-44 py-12 bg-cover bg-gray-200 w-full"
      style={{ backgroundImage: `url(${!searchMode && background})` }}
    >
      <div className="sm:h-60 sm:w-7/12 inline-flex flex-col h-70 space-y-10 items-center justify-start">
        {!searchMode && (
          <div className="flex flex-col space-y-4 items-center justify-start text-center">
            <HeaderText size="xl" color="white">
              Welcome to ISAAC Marketplace
            </HeaderText>
            <Text size="xl" className="text-center">
              Ut eu sem integer vitae justo eget magna fermentum iaculis eu non
              diam phasellus vestibulum lorem sed risus ultricies tristique
            </Text>
          </div>
        )}
        <SearchField
          width={"700px"}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setSearchMode(e.currentTarget.value);
          }}
        />
        {searchMode && <div className="flex items-center">Results for</div>}
        <HeaderText>{searchMode}</HeaderText>
        <div className="w-full sm:inline-flex  h-8 space-x-4  items-center sm:justify-center justify-start">
          <p
            className={`text-base leading-normal text-center ${
              !searchMode && "text-white"
            }`}
          >
            {!searchMode ? "Top searches" : "Related"}
          </p>
          <div className="flex items-center">
            <div className="h-8 w-80 sm:w-auto  flex sm:space-x-2.5 items-start justify-start sm:overflow-x-visible overflow-x-scroll">
              <div className={`${stylesByType}`}>Landing page</div>
              <div className={`${stylesByType}`}>ios</div>
              <div className={`${stylesByType}`}>food</div>
              <div className={`${stylesByType}`}>POS</div>
              <div className={`${stylesByType}`}>Cashier</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export const Bannesr = <PROPS extends BannerProps>({}: PROPS): JSX.Element => {
  return (
    <div className="grid place-items-center w-screen  bg-gray-300 overflow-x-auto">
      <div
        className="flex items-center center justify-content-center "
        style={{ height: "173px" }}
      >
        {/**new */}
        <div className="inline-flex justify-items-center  px-24 flex-col  space-y-96 border-r-2 border-gray-400">
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
        <div className="inline-flex flex-col  space-y-96 px-24 border-r-2 border-gray-400">
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
        <div className=" px-24 border-r-2 border-gray-400 flex justify-center space-y-96">
          <div
            className="flex justify-center relative h-24"
            style={{ width: "81px" }}
          >
            <p className="absolute top-0 w-16 text-center text-base font-bold leading-10 text-gray-700">
              Developer
            </p>

            <svg
              className="absolute a w-8 h-8 text-3xl font-semibold leading-10 text-gray-700"
              style={{ top: "35px" }}
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16ZM20 10C20 12.2091 18.2091 14 16 14C13.7909 14 12 12.2091 12 10C12 7.79086 13.7909 6 16 6C18.2091 6 20 7.79086 20 10ZM15.9999 18C11.9648 18 8.48789 20.3899 6.90747 23.8314C9.10806 26.3841 12.3653 28 16 28C19.6346 28 22.8917 26.3841 25.0923 23.8316C23.5119 20.39 20.035 18 15.9999 18Z"
                fill="#3C4043"
              />
            </svg>

            <p className="absolute bottom-0 text-center mt-2 text-xs leading-10 text-gray-700">
              Point of sale
            </p>
          </div>
        </div>
        {/**new */}
        {/**new */}
        <div className="inline-flex flex-col  space-y-96 px-28 border-r-2 border-gray-400">
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
    </div>
  );
};
