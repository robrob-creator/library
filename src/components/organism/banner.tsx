/* eslint-disable prettier/prettier */
import { HeaderText, Text } from "../atoms/Text";
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
      <div
        className="inline-flex flex-col h-full space-y-10 items-center justify-start"
        style={{ width: "66%", height: 309 }}
      >
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
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6.42132 2.08333C5.16154 2.08333 3.95336 2.58378 3.06256 3.47458C2.17176 4.36537 1.67132 5.57356 1.67132 6.83333C1.67132 7.45711 1.79418 8.07478 2.03289 8.65108C2.2716 9.22738 2.62148 9.75101 3.06256 10.1921C3.50364 10.6332 4.02727 10.9831 4.60357 11.2218C5.17987 11.4605 5.79754 11.5833 6.42132 11.5833C7.04509 11.5833 7.66277 11.4605 8.23906 11.2218C8.81536 10.9831 9.33899 10.6332 9.78007 10.1921C10.2212 9.75101 10.571 9.22738 10.8097 8.65108C11.0485 8.07478 11.1713 7.45711 11.1713 6.83333C11.1713 5.57356 10.6709 4.36537 9.78007 3.47458C8.88927 2.58378 7.68109 2.08333 6.42132 2.08333ZM1.94297 2.35499C3.1307 1.16726 4.74161 0.5 6.42132 0.5C8.10102 0.5 9.71193 1.16726 10.8997 2.35499C12.0874 3.54272 12.7546 5.15363 12.7546 6.83333C12.7546 7.66504 12.5908 8.4886 12.2726 9.257C12.0558 9.78035 11.7702 10.2711 11.4243 10.7168L15.6894 14.9819C15.9986 15.291 15.9986 15.7923 15.6894 16.1015C15.3803 16.4106 14.879 16.4106 14.5699 16.1015L10.3047 11.8363C9.85912 12.1822 9.36834 12.4678 8.84498 12.6846C8.07658 13.0029 7.25302 13.1667 6.42132 13.1667C5.58961 13.1667 4.76605 13.0029 3.99765 12.6846C3.22926 12.3663 2.53108 11.8998 1.94297 11.3117C1.35487 10.7236 0.888358 10.0254 0.570079 9.257C0.251799 8.4886 0.0879822 7.66504 0.0879822 6.83333C0.0879822 5.15363 0.755242 3.54272 1.94297 2.35499Z"
                  fill="#687782"
                />
              </svg>

              <input
                type="search"
                id="default-search"
                className="block p-4 pl-10 w-full text-sm text-gray-900   dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Mockups, Logos..."
                required
              />
            </div>
          </div>
          <div
            className="inline-flex space-x-4 items-center justify-start"
            style={{ width: 596, height: 30 }}
          >
            <p className="text-base leading-normal text-center text-white">
              Top searches
            </p>
            <div
              className="flex space-x-2.5 items-start justify-start"
              style={{ width: 470, height: 30 }}
            >
              <div className="flex items-center justify-center h-full px-5 bg-purple-400 bg-opacity-25 border rounded-full border-white">
                <p className="text-sm font-light leading-normal text-center text-white">
                  Landing page
                </p>
              </div>
              <div className="flex items-center justify-center h-full px-5 bg-purple-400 bg-opacity-25 border rounded-full border-white">
                <p className="text-sm font-light leading-normal text-center text-white">
                  ios
                </p>
              </div>
              <div className="flex items-center justify-center h-full px-5 bg-purple-400 bg-opacity-25 border rounded-full border-white">
                <p className="text-sm font-light leading-normal text-center text-white">
                  food
                </p>
              </div>
              <div className="flex items-center justify-center h-full px-5 bg-purple-400 bg-opacity-25 border rounded-full border-white">
                <p className="text-sm font-light leading-normal text-center text-white">
                  POS
                </p>
              </div>
              <div className="flex items-center justify-center h-full px-5 bg-purple-400 bg-opacity-25 border rounded-full border-white">
                <p className="text-sm font-light leading-normal text-center text-white">
                  Cashier
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
