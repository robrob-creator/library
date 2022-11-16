/* eslint-disable prettier/prettier */
import imageOne from "../../../assets/images/cover1.png";
import imagetwo from "../../../assets/images/cover2.png";
export type CardProps = {
  title?: string;
  imgUrl?: string;
  downloads?: string;
  rating?: string;
  platforms?: { name: string; icon: string }[];
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
  onClick,
}: PROPS): JSX.Element => {
  return (
    <div
      className="inline-flex lg:m-4 flex-col justify-end lg:w-64 md:w-38 md:mx-4  h-72 pl-0.5 pb-2"
      onClick={onClick}
    >
      <div
        className="relative bg-gray-300 rounded-2xl"
        style={{ width: "100%", height: "193px" }}
      >
        <img className="w-full lg:w-64 h-48 rounded-2xl" src={imgUrl} />
      </div>
      <div className="inline-flex space-x-8 items-center justify-start">
        <p className="w-full lg:w-36 h-6 text-sm font-semibold leading-normal">
          {title}
        </p>
        <div className="flex space-x-2.5 items-start justify-start">
          {downloads && (
            <div className="flex space-x-0.5 items-center justify-start">
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1.5 7.5C1.5 8.05228 1.94772 8.5 2.5 8.5L7.5 8.5C8.05228 8.5 8.5 8.05228 8.5 7.5L8.5 7C8.5 6.72386 8.72386 6.5 9 6.5C9.27614 6.5 9.5 6.72386 9.5 7L9.5 7.5C9.5 8.60457 8.60457 9.5 7.5 9.5L2.5 9.5C1.39543 9.5 0.5 8.60457 0.5 7.5L0.5 7C0.5 6.72386 0.723857 6.5 1 6.5C1.27614 6.5 1.5 6.72386 1.5 7L1.5 7.5ZM2.64645 4.64645C2.84171 4.45118 3.15829 4.45118 3.35355 4.64645L4.5 5.79289L4.5 1C4.5 0.723858 4.72386 0.5 5 0.5C5.27614 0.5 5.5 0.723858 5.5 1L5.5 5.79289L6.64645 4.64645C6.84171 4.45118 7.15829 4.45118 7.35355 4.64645C7.54882 4.84171 7.54882 5.15829 7.35355 5.35355L5.35355 7.35355C5.15829 7.54882 4.84171 7.54882 4.64645 7.35355L2.64645 5.35355C2.45118 5.15829 2.45118 4.84171 2.64645 4.64645Z"
                  fill="#5C5C5C"
                />
              </svg>

              <p className="text-xs font-medium leading-7 text-gray-600">
                {downloads}
              </p>
            </div>
          )}
          {rating && (
            <div className="flex space-x-0.5 items-center justify-start">
              <svg
                width="12"
                height="11"
                viewBox="0 0 12 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.04896 1.30881C5.34834 0.387542 6.65168 0.387545 6.95105 1.30881L7.71047 3.64576L10.1677 3.64585C11.1364 3.64589 11.5392 4.88544 10.7555 5.45485L8.7676 6.89926L9.52684 9.23627C9.82615 10.1576 8.77172 10.9236 7.98802 10.3543L6.00001 8.91003L4.012 10.3543C3.22829 10.9236 2.17387 10.1576 2.47317 9.23627L3.23242 6.89926L1.24451 5.45485C0.460853 4.88544 0.863609 3.64589 1.83229 3.64585L4.28954 3.64576L5.04896 1.30881ZM6.00001 1.61786L5.24059 3.95481C5.10671 4.3668 4.72278 4.64574 4.28958 4.64576L1.83233 4.64585L3.82023 6.09026C4.17069 6.3449 4.31733 6.79624 4.18348 7.20824L3.42424 9.54525L5.41225 8.10099C5.76273 7.84638 6.23729 7.84638 6.58776 8.10099L8.57577 9.54525L7.81653 7.20824C7.68268 6.79624 7.82933 6.3449 8.17978 6.09026L10.1677 4.64585L7.71043 4.64576C7.27724 4.64574 6.89331 4.3668 6.75943 3.95481L6.00001 1.61786Z"
                  fill="#5C5C5C"
                />
              </svg>

              <p className="text-xs font-medium leading-7 text-gray-600">
                {rating}
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="left-3 flex flex-col items-start justify-start">
        {platforms && (
          <div className="float-left inline-flex space-x-5 items-start justify-start">
            {platforms?.map((item, index) => {
              return (
                <div
                  key={index}
                  className=" flex space-x-1 items-center justify-start"
                >
                  <img className="w-3 h-3 rounded-full" src={item?.icon} />
                  <p className="text-xs leading-7 text-gray-600">
                    {item?.name}
                  </p>
                </div>
              );
            })}
          </div>
        )}
        {stacks && (
          <div className="inline-flex space-x-1 items-center justify-start">
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.77639 0.0527864C4.91716 -0.0175955 5.08284 -0.0175955 5.22361 0.0527864L9.22361 2.05279C9.393 2.13748 9.5 2.31061 9.5 2.5V7.5C9.5 7.68939 9.393 7.86252 9.22361 7.94721L5.22361 9.94721C5.08284 10.0176 4.91716 10.0176 4.77639 9.94721L0.776393 7.94721C0.607001 7.86252 0.5 7.68939 0.5 7.5V2.5C0.5 2.31061 0.607001 2.13748 0.776393 2.05279L4.77639 0.0527864ZM1.5 3.30902L4.5 4.80902V8.69098L1.5 7.19098V3.30902ZM5.5 8.69098L8.5 7.19098V3.30902L5.5 4.80902V8.69098ZM5 3.94098L7.88197 2.5L5 1.05902L2.11803 2.5L5 3.94098Z"
                fill="#5C5C5C"
              />
            </svg>

            <p className="text-xs leading-7 text-gray-600">
              Stack:{" "}
              {stacks
                ?.map((item) => {
                  return item.name;
                })
                .join(", ")}
            </p>
          </div>
        )}
      </div>
    </div>
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
    <div className="px-12 border-b-2 border-gray-200 py-10">
      <div className="grid sm:grid-cols-2 gap-2 ">
        <img className="w-full h-72 mx-2" src={imageOne} />
        <img className="w-full h-72 mx-2" src={imagetwo} />
      </div>
      <div
        className="inline-flex space-x-24 items-start justify-start pt-8 pb-16 w-11/12"
        style={{ height: "179px" }}
      >
        <p
          className="text-lg leading-loose text-justify text-gray-900"
          style={{ width: "879px", height: " 89px" }}
        >
          Set up new stores quickly and easily with just an internet connection.
          Then use your Point of Sale everywhere, anytime. While an internet
          connection is required to start the Point of Sale, it will stay
          operational even after complete disconnection.
        </p>
        <div className="inline-flex flex-col space-y-1.5 items-end justify-start">
          <p className="text-lg font-medium text-justify text-blue-700">
            Project Moonshot Inc.
          </p>
          <div className="inline-flex space-x-2.5 items-center justify-center">
            <p className="text-xl font-medium text-justify text-gray-700">
              Support
            </p>
            <img
              className="w-6 h-6 rounded-lg"
              src="https://via.placeholder.com/24x24"
            />
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
    <div className="px-12 border-b-2 border-gray-200 py-10">
      <div
        className="inline-flex space-x-96 items-start justify-start pt-8 pb-16 w-screen"
        style={{ height: 308 }}
      >
        <p className="text-justify text-gray-900">
          What’s New
          <br />
          Updates:
          <br />
          Set up new stores quickly and easily with just an internet connection.
          <br />
          Set up new stores quickly and easily with just an internet connection.
          <br />
          Set up new stores quickly and easily with just an internet connection.
          <br />
          Set up new stores quickly and easily with just an internet connection.
        </p>
        <div className="inline-flex flex-col space-y-1.5 items-end justify-start">
          <p className="text-lg font-medium text-right text-blue-700">
            Version History
          </p>
          <p className="text-lg font-medium text-right text-gray-600">
            1w ago
            <br />
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
    <div className="px-12 border-b-2 border-gray-200 py-10">
      <div className="relative w-screen" style={{ height: 507 }}>
        <p
          className="absolute text-2xl font-semibold leading-10 text-justify text-gray-900"
          style={{ left: 0, top: 30 }}
        >
          Information
        </p>
        <div
          className="inline-flex space-x-32 items-start justify-start absolute"
          style={{ width: 1157, height: 316, left: 0, top: 87 }}
        >
          <div className="inline-flex flex-col space-y-12 items-start justify-start">
            <div className="relative" style={{ width: 213, height: 72 }}>
              <p className="absolute left-0 top-0 text-xl leading-10 text-justify text-gray-600">
                Developer
              </p>
              <p className="absolute left-0 bottom-0 text-xl font-medium leading-10 text-justify text-gray-900">
                Project Moonshot Inc.
              </p>
            </div>
            <div className="relative" style={{ width: 171, height: 72 }}>
              <p className="absolute left-0 top-0 text-xl leading-10 text-justify text-gray-600">
                Compatibility
              </p>
              <p className="absolute left-0 bottom-0 text-xl font-medium leading-10 text-justify text-gray-900">
                Windows, MacOS
              </p>
            </div>
            <div className="relative" style={{ width: 234, height: 72 }}>
              <p className="absolute left-0 top-0 text-xl leading-10 text-justify text-gray-600">
                Copyright
              </p>
              <p className="absolute left-0 bottom-0 text-xl leading-10 text-justify text-gray-900">
                © Project Moonshot Inc.
              </p>
            </div>
          </div>
          <div className="inline-flex flex-col space-y-12 items-start justify-start">
            <div className="relative" style={{ width: 89, height: 72 }}>
              <p className="absolute left-0 top-0 text-xl leading-10 text-justify text-gray-600">
                Size
              </p>
              <p className="absolute left-0 bottom-0 text-xl font-medium leading-10 text-justify text-gray-900">
                235.5 MB
              </p>
            </div>
            <div className="relative" style={{ width: 192, height: 72 }}>
              <p className="absolute left-0 top-0 text-xl leading-10 text-justify text-gray-600">
                Language
              </p>
              <p className="absolute left-0 bottom-0 text-xl font-medium leading-10 text-justify text-gray-900">
                English and 4 more
              </p>
            </div>
            <div className="relative" style={{ width: 123, height: 72 }}>
              <p className="absolute left-0 top-0 text-xl leading-10 text-justify text-gray-600">
                Category
              </p>
              <p className="absolute left-0 bottom-0 text-xl font-semibold leading-10 text-justify text-gray-900">
                Point of Sale
              </p>
            </div>
          </div>
          <div className="inline-flex flex-col space-y-12 items-start justify-start">
            <div className="relative" style={{ width: 64, height: 72 }}>
              <p className="absolute left-0 top-0 text-xl leading-10 text-justify text-gray-600">
                Rating
              </p>
              <p className="absolute left-0 bottom-0 text-xl font-medium leading-10 text-justify text-gray-900">
                4.5
              </p>
            </div>
            <div className="relative" style={{ width: 165, height: 72 }}>
              <p className="absolute left-0 top-0 text-xl leading-10 text-justify text-gray-600">
                Release date
              </p>
              <p className="absolute left-0 bottom-0 text-xl font-medium leading-10 text-justify text-gray-900">
                January 01, 2022
              </p>
            </div>
            <div className="relative" style={{ width: 127, height: 72 }}>
              <p className="absolute left-0 top-0 text-xl leading-10 text-justify text-gray-600">
                Build Version
              </p>
              <p className="absolute left-0 bottom-0 text-xl font-medium leading-10 text-justify text-gray-900">
                7.1.1
              </p>
            </div>
          </div>
          <div className="inline-flex flex-col space-y-12 items-start justify-start">
            <div className="relative" style={{ width: 111, height: 72 }}>
              <p className="absolute left-0 top-0 text-xl leading-10 text-justify text-gray-600">
                Downloads
              </p>
              <p className="absolute left-0 bottom-0 text-xl font-medium leading-10 text-justify text-gray-900">
                405
              </p>
            </div>
            <div className="relative" style={{ width: 194, height: 92 }}>
              <p className="absolute left-0 top-0 text-xl leading-10 text-justify text-gray-600">
                Technology Stacks
              </p>
              <p className="absolute left-0 bottom-0 text-xl font-medium text-justify text-gray-900">
                React, React Native
                <br />
                C#
              </p>
            </div>
          </div>
        </div>
        <img
          className="w-32 h-20 absolute rounded-lg"
          style={{ left: 1022, top: 30 }}
          src="https://via.placeholder.com/134x87"
        />
      </div>
    </div>
  );
};
export const MoreCard = <PROPS extends CardProps>({}: PROPS): JSX.Element => {
  return (
    <div className="px-12 border-b-2 border-gray-200 py-10 bg-gray-300">
      <div className="" style={{ height: 365 }}>
        <div
          className="inline-flex space-x-96 w-screen items-start justify-start"
          style={{ height: 40 }}
        >
          <p className="text-2xl font-semibold leading-10 text-justify text-gray-900">
            More by Project Moonshoot Inc.
          </p>
          <div className="flex space-x-2.5 items-center justify-start">
            <p className="text-2xl font-medium leading-10 text-right text-blue-700">
              See All
            </p>
            <img
              className="w-6 h-6 rounded-lg"
              src="https://via.placeholder.com/24x24"
            />
          </div>
        </div>
        <div className="inline-flex space-x-8 items-center justify-end w-80 h-36">
          <img
            className="w-1/2 h-full rounded-lg"
            src="https://via.placeholder.com/157.74647521972656x140"
          />
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
    </div>
  );
};
export const SimilarCard = <
  PROPS extends CardProps
>({}: PROPS): JSX.Element => {
  return (
    <div className="px-12 border-b-2 border-gray-200 py-10 ">
      <div
        className="inline-flex flex-col space-y-6 items-center w-screen justify-start"
        style={{ height: 427 }}
      >
        <p className="text-2xl font-semibold leading-10 text-justify text-gray-900">
          Similar Apps
        </p>
        <div
          className="inline-flex w-screen space-x-12 items-start justify-start"
          style={{ height: 362 }}
        >
          <div className="inline-flex flex-col space-y-3 items-start justify-start overflow-x-auto">
            <img
              className="w-10/12 h-56 rounded-lg"
              src="https://via.placeholder.com/355x225"
            />
            <div className="flex flex-col space-y-0.5 items-center justify-end w-10/12 h-32">
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
              className="w-10/12 h-56 rounded-lg"
              src="https://via.placeholder.com/355x225"
            />
            <div className="flex flex-col space-y-0.5 items-center justify-end  w-10/12 h-32">
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
              className="w-10/12 h-56 rounded-lg"
              src="https://via.placeholder.com/355x225"
            />
            <div className="flex flex-col space-y-0.5 items-center justify-end  w-10/12 h-32">
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
