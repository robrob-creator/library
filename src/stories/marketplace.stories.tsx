import background from "../../assets/images/bg-full.png";
import { Meta, Story } from "@storybook/react";
import {
  OutlinedForm,
  FormProps,
  Search,
  Card,
  Footer,
  BlueIsaacLogo,
  ArrowStrokeDown,
  InputField,
  ArrowLeft,
  HeaderText,
  Text,
  Button,
  NavigationBar,
} from "../components";
const data = [
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
];
const meta: Meta = {
  title: "marketplace",
  component: OutlinedForm,
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<FormProps> = (args) => (
  <div>
    <NavigationBar logo="" />

    {/**navbar */}
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
    <div className="grid content-center w-full">
      {/*second part */}
      <div className="flex p-8 items-center">
        <div
          className="inline-flex space-x-12 items-center justify-center "
          style={{ width: "100%", height: 40, overflowX: "scroll" }}
        >
          <div className="flex space-x-2 items-center justify-start flex-1 px-3 py-2.5 bg-gray-100 border rounded-lg border-gray-600">
            <p className="flex-1 text-sm leading-tight text-gray-600">
              Popular
            </p>
            <div className="flex items-center justify-center w-1/6 h-4 px-0.5 pt-1.5 pb-1">
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
          <div className="flex space-x-2.5 items-start justify-start">
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
          <div className="flex space-x-2 items-center justify-center w-24 h-full px-5 py-2.5 bg-gray-100 border rounded-lg border-gray-600">
            <img
              className="w-6 h-6 rounded-lg"
              src="https://via.placeholder.com/24x24"
            />
            <p className="text-sm leading-tight text-gray-600">Filter</p>
          </div>
        </div>
      </div>
      {/**third */}
      <div className="grid  lg:gap-2   lg:grid-cols-4 grid-cols-2 lg:mx-8">
        {data.map((item, index) => {
          return (
            <Card
              title="eCommerce"
              downloads="4k"
              rating="4.5"
              stacks={[{ name: "Android" }]}
              platforms={[
                { name: "Android", icon: "hr" },
                { name: "Windows", icon: "hr" },
              ]}
              imgUrl="data:image/jpeg;base64,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"
            />
          );
        })}
      </div>
      {/**fourth */}
      <div
        className="grid justify-center mt-8 mb-14
      "
      >
        <div className="inline-flex space-x-20 items-center justify-center">
          <div className="flex items-center justify-center w-56 px-5 py-2 bg-blue-700 rounded-lg">
            <p className="text-xs font-semibold leading-snug text-center text-gray-50">
              Sign up to view more
            </p>
          </div>
          <p className="text-sm leading-tight">Already a member? Sign In</p>
        </div>
      </div>
      {/**end offourth */}
      {/* /*<Footer />** */}
    </div>
  </div>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
