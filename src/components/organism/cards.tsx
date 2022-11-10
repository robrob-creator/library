/* eslint-disable prettier/prettier */

export type CardProps = {
  title?: string;
  imgUrl?: string;
  downloads?: string;
  rating?: string;
  platforms?: { name: string; icon: string }[];
  stacks?: { name: string }[];
};

export const Card = <PROPS extends CardProps>({
  imgUrl,
  title,
  downloads,
  rating,
  platforms,
  stacks,
}: PROPS): JSX.Element => {
  return (
    <div className="inline-flex m-4 flex-col justify-end w-64 h-72 pl-0.5 pb-2">
      <div
        className="relative bg-gray-300 rounded-2xl"
        style={{ width: "258px", height: "193px" }}
      >
        <img className="w-64 h-48 rounded-2xl" src={imgUrl} />
      </div>
      <div className="inline-flex space-x-8 items-center justify-start">
        <p className="w-36 h-6 text-sm font-semibold leading-normal">{title}</p>
        <div className="flex space-x-2.5 items-start justify-start">
          {downloads && (
            <div className="flex space-x-0.5 items-center justify-start">
              <img
                className="w-3 h-3 rounded-full"
                src="https://via.placeholder.com/12x12"
              />
              <p className="text-xs font-medium leading-7 text-gray-600">
                {downloads}
              </p>
            </div>
          )}
          {rating && (
            <div className="flex space-x-0.5 items-center justify-start">
              <img
                className="w-3 h-3 rounded-full"
                src="https://via.placeholder.com/12x12"
              />
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
            <img
              className="w-3 h-3 rounded-full"
              src="https://via.placeholder.com/12x12"
            />
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
