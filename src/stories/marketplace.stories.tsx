import { Meta, Story } from "@storybook/react";
import {
  OutlinedForm,
  FormProps,
  Tabs,
  Card,
  Banner,
  NavigationBar,
  Dropdown,
  Search,
  Option,
  DownloadIcon,
  Footer,
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
  title: "pages/marketplace",
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
    <NavigationBar
      rightElements={
        <div className="flex sm:space-x-6 items-center justify-end">
          <Search size="sm" className="lg:block hidden" />
          <p className="text-sm font-medium leading-tight text-blue-700 w-24 cursor-pointer">
            Sign in
          </p>

          <div
            className="sm:inline-flex hidden relative"
            style={{ width: "100%", height: 40 }}
          >
            <div
              className="inline-flex items-center justify-center px-5 py-2 bg-blue-700 rounded-lg"
              style={{ width: "100%", height: 40 }}
            >
              <p className="text-xs font-semibold leading-snug text-center text-gray-50">
                Try it free
              </p>
            </div>
          </div>
        </div>
      }
      centerElements={
        <div className="text-sm lg:flex-grow lg:flex lg:items-center lg:justify-center">
          <span className="flex  items-center lg:mt-0 text-black hover:text-blue-400 mr-4">
            <Dropdown label="Apps">
              <Option label="Apps" />
            </Dropdown>
          </span>
          <span className="flex  items-center mt-4 lg:mt-0 text-black hover:text-blue-400  mr-4">
            <Dropdown label="Community">
              <Option label="Community" />
            </Dropdown>
          </span>
          <span className="flex  items-center mt-4 lg:mt-0 text-black hover:text-blue-400  mr-4">
            <Dropdown label="Pricing">
              <Option label="Pricing" />
            </Dropdown>
          </span>
        </div>
      }
    />

    <Banner />
    <div className="grid content-center">
      <Tabs />
      {/**third */}
      <div className="lg:grid lg:grid-cols-4  flex flex-wrap  lg:place-items-center justify-center mx-auto">
        {data.map((item, index) => {
          return (
            <Card
              layout="vertical"
              title="POS"
              subtitle={<Subtitle />}
              content={<Content />}
              className="mb-4 "
              imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png"
            />
          );
        })}
      </div>
      {/**fourth */}
      <div
        className="flex justify-center mt-8 mb-14
      "
      >
        <div className="sm:inline-flex  block sm:space-x-20 items-center justify-center">
          <div className="flex items-center justify-center sm:w-56 w-full h-8 px-5 py-2 bg-blue-700 rounded-lg">
            <p className="text-xs font-semibold leading-snug text-center text-gray-50">
              Sign up to view more
            </p>
          </div>
          <p className="text-sm text-center leading-tight">
            Already a member? Sign In
          </p>
        </div>
      </div>
      {/**end offourth */}
      <Footer />
    </div>
  </div>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
const Content = () => {
  return (
    <div className="left-3 flex flex-col items-start justify-start">
      <div className="float-left inline-flex space-x-5 items-start justify-start">
        <div className=" flex space-x-1 items-center justify-start">
          {/*<img className="w-3 h-3 rounded-full" src={item?.icon} />*/}
          <p className="text-xs leading-7 text-gray-600">IOS Android</p>
        </div>
      </div>

      <div className="inline-flex space-x-1 items-center justify-start">
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.77639 0.0527864C4.91716 -0.0175955 5.08284 -0.0175955 5.22361 0.0527864L9.22361 2.05279C9.393 2.13748 9.5 2.31061 9.5 2.5V7.5C9.5 7.68939 9.393 7.86252 9.22361 7.94721L5.22361 9.94721C5.08284 10.0176 4.91716 10.0176 4.77639 9.94721L0.776393 7.94721C0.607001 7.86252 0.5 7.68939 0.5 7.5V2.5C0.5 2.31061 0.607001 2.13748 0.776393 2.05279L4.77639 0.0527864ZM1.5 3.30902L4.5 4.80902V8.69098L1.5 7.19098V3.30902ZM5.5 8.69098L8.5 7.19098V3.30902L5.5 4.80902V8.69098ZM5 3.94098L7.88197 2.5L5 1.05902L2.11803 2.5L5 3.94098Z"
            fill="#5C5C5C"
          />
        </svg>

        <p className="text-xs leading-7 text-gray-600">Stack:React, C#</p>
      </div>
    </div>
  );
};
const Subtitle = () => {
  return (
    <div className="flex space-x-2.5 items-start justify-start">
      <div className="flex space-x-0.5 items-center justify-start">
        <DownloadIcon />

        <p className="text-xs font-medium leading-7 text-gray-600">100</p>
      </div>

      <div className="flex space-x-0.5 items-center justify-start">
        <svg
          width="12"
          height="11"
          viewBox="0 0 12 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.04896 1.30881C5.34834 0.387542 6.65168 0.387545 6.95105 1.30881L7.71047 3.64576L10.1677 3.64585C11.1364 3.64589 11.5392 4.88544 10.7555 5.45485L8.7676 6.89926L9.52684 9.23627C9.82615 10.1576 8.77172 10.9236 7.98802 10.3543L6.00001 8.91003L4.012 10.3543C3.22829 10.9236 2.17387 10.1576 2.47317 9.23627L3.23242 6.89926L1.24451 5.45485C0.460853 4.88544 0.863609 3.64589 1.83229 3.64585L4.28954 3.64576L5.04896 1.30881ZM6.00001 1.61786L5.24059 3.95481C5.10671 4.3668 4.72278 4.64574 4.28958 4.64576L1.83233 4.64585L3.82023 6.09026C4.17069 6.3449 4.31733 6.79624 4.18348 7.20824L3.42424 9.54525L5.41225 8.10099C5.76273 7.84638 6.23729 7.84638 6.58776 8.10099L8.57577 9.54525L7.81653 7.20824C7.68268 6.79624 7.82933 6.3449 8.17978 6.09026L10.1677 4.64585L7.71043 4.64576C7.27724 4.64574 6.89331 4.3668 6.75943 3.95481L6.00001 1.61786Z"
            fill="#5C5C5C"
          />
        </svg>

        <p className="text-xs font-medium leading-7 text-gray-600">4.5</p>
      </div>
    </div>
  );
};
