/* eslint-disable prettier/prettier */
/* eslint-disable no-empty-pattern */
/* eslint-disable prettier/prettier */
import { Button } from "../atoms/button";
import { ArrowStrokeDown, BlueIsaacLogo, Search } from "../atoms/logo";
export type NavigationProps = { logo: any };

export const NavigationBar = <
  PROPS extends NavigationProps
>({}: PROPS): JSX.Element => {
  return (
    <nav className="flex items-center justify-between flex-wrap  py-3.5 pl-11 pr-14">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <BlueIsaacLogo />
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:justify-center lg:w-auto">
        <div className="text-sm lg:flex-grow lg:flex lg:items-center lg:justify-center">
          <span className="flex  items-center lg:mt-0 text-black hover:text-blue-400 mr-4">
            <p className="text-sm font-medium">App</p>
            <ArrowStrokeDown className="mx-2 lg:visible invisible" />
          </span>
          <span className="flex  items-center mt-4 lg:mt-0 text-black hover:text-blue-400  mr-4">
            <p className="text-sm font-medium">Community</p>
            <ArrowStrokeDown className="mx-2 lg:visible invisible" />
          </span>
          <span className="flex  items-center mt-4 lg:mt-0 text-black hover:text-blue-400  mr-4">
            <p className="text-sm font-medium">Pricing</p>
            <ArrowStrokeDown className="mx-2 lg:visible invisible" />
          </span>
        </div>
        <div>
          <div className="flex space-x-6 items-center justify-start">
            <Search size="sm" className="lg:visible invisible" />
            <p className="text-sm font-medium leading-tight text-blue-700 w-24">
              Sign in
            </p>
            <Button
              type="primary"
              size="sm"
              onClick={() => {}}
              text="Try it free"
              className="h-8 w-36"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};
