/* eslint-disable prettier/prettier */
import { HeaderText, Text } from "../atoms/Text";
import { Search } from "../atoms/logo";
import background from "../../../assets/images/bg-full.png";

export type BannerProps = {
  title?: string;
  imgUrl?: string;
  downloads?: string;
  rating?: string;
  platforms?: { name: string; icon: string }[];
  stacks?: { name: string }[];
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
