/* eslint-disable prettier/prettier */
/* eslint-disable no-empty-pattern */
/* eslint-disable prettier/prettier */
import logo from "../../../assets/images/logo-white.svg";
import background from "../../../assets/images/bg.png";
import { Puzzle, GridIcon, CogIcon } from "../atoms/logo";

export type SideDisplayProps = {
  header?: string;
  content?: string;
};

export const SideDisplay = <
  PROPS extends SideDisplayProps
>({}: PROPS): JSX.Element => {
  return (
    <div
      className={`flex  font-Poppins justify-center bg-cover`}
      style={{
        width: "550px",
        height: "832px",
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
export const SideBar = <
  PROPS extends SideDisplayProps
>({}: PROPS): JSX.Element => {
  return (
    <div className="w-48 shadow-md">
      <div className="flex items-start justify-center flex-1 pb-96 bg-white ">
        <div className="inline-flex flex-col items-center justify-start flex-1 pb-96">
          <div className="inline-flex space-x-2.5 items-center justify-start w-full h-1/3 px-5 py-10  text-gray-600 hover:font-semibold hover:bg-gray-200 hover:text-blue-700">
            <CogIcon />
            <p className="text-xs  ">Account Settings</p>
          </div>
          <div className="inline-flex space-x-2.5 items-center justify-start w-full h-1/3 px-5 py-10  text-gray-600 hover:font-semibold hover:bg-gray-200 hover:text-blue-700">
            <GridIcon />
            <p className="text-xs">Dashboards</p>
          </div>
          <div className="inline-flex space-x-2.5 items-center justify-start w-full h-1/3 px-5 py-10  text-gray-600 hover:font-semibold hover:bg-gray-200 hover:text-blue-700">
            <Puzzle />
            <p className="text-xs">My Apps</p>
          </div>
        </div>
      </div>
    </div>
  );
};
