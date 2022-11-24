/* eslint-disable prettier/prettier */
/* eslint-disable no-empty-pattern */
/* eslint-disable prettier/prettier */
import logo from "../../../assets/images/logo-white.svg";
import background from "../../../assets/images/bg.png";
import { Puzzle, GridIcon, CogIcon } from "../atoms/logo";

export type SideDisplayProps = {
  header?: string;
  content?: string;
  className?: string;
};

export const SideDisplay = <
  PROPS extends SideDisplayProps
>({}: PROPS): JSX.Element => {
  return (
    <div
      className={`invisible md:invisible lg:visible xl:visible  md:h-0 lg:h-screen xl:h-screen h-0 flex  font-Poppins justify-center bg-cover`}
      style={{
        width: "550px",
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="flex-row mt-20 ">
        <img className="w-80 h-20" src={logo} />
        <div
          className="flex flex-col mt-12 space-y-2 items-center justify-end"
          style={{ width: "432px", height: "206px" }}
        >
          <p
            className={`text-4xl font-bold tracking-wider text-white mb-4`}
            style={{ width: "432px" }}
          >
            Welcome guest!
          </p>
          <p
            className={`text-xl tracking-wider text-white`}
            style={{ width: "432px", height: "143px" }}
          >
            ut eu sem integer vitae justo eget magna fermentum iaculis eu non
            diam phasellus vestibulum lorem sed risus ultricies tristique
          </p>
        </div>
      </div>
    </div>
  );
};
export const SideBar = <PROPS extends SideDisplayProps>({
  className,
}: PROPS): JSX.Element => {
  return (
    <div className="inline-flex items-start justify-start w-60">
      <div className="inline-flex flex-col items-start justify-start flex-1 py-8 bg-white h-screen border border-gray-200">
        <div className="inline-flex  items-center justify-between w-full h-20 px-5 py-10 rounded-full">
          <div className="flex space-x-2.5 items-center justify-start px-2.5 py-1 rounded-full">
            <CogIcon />
            <p className="text-xs text-gray-600 w-full sm:inline-block hidden">
              Account Settings
            </p>
          </div>
          <div className="inline-flex flex-col items-center justify-center w-7 h-4 bg-indigo-700 rounded-full">
            <p className="text-xs font-medium text-center text-white">34</p>
          </div>
        </div>
        <div className="inline-flex space-x-2.5 items-center justify-between w-full h-20 px-5 py-10">
          <div className="flex space-x-2.5 items-center justify-start w-3/4 px-2.5 py-1 rounded-full">
            <GridIcon />
            <p className="text-xs text-gray-600 sm:inline-block hidden">
              Dashboards
            </p>
          </div>
          <div className="inline-flex flex-col items-center justify-center w-7 h-4 bg-indigo-700 rounded-full">
            <p className="text-xs font-medium text-center text-white">34</p>
          </div>
        </div>
        <div className="inline-flex space-x-2.5 items-center justify-between w-full h-20 px-5 py-10">
          <div className="inline-flex space-x-2.5 items-center justify-start py-1 sm:pl-2.5 sm:pr-14 pr-4 pl-2 bg-blue-100 rounded-full">
            <Puzzle />
            <p className="text-xs font-semibold text-blue-700 w-full sm:inline-block hidden">
              My Apps
            </p>
          </div>
          <div className="inline-flex flex-col items-center justify-center w-7 h-4 bg-indigo-700 rounded-full">
            <p className="text-xs font-medium text-center text-white">34</p>
          </div>
        </div>
      </div>
    </div>
  );
};
