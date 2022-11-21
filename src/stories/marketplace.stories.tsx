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
        <div className="flex space-x-6 items-center justify-start">
          <Search size="sm" className="lg:visible invisible" />
          <p className="text-sm font-medium leading-tight text-blue-700 w-24 cursor-pointer">
            Sign in
          </p>

          <div className="relative" style={{ width: "100%", height: 40 }}>
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
      <div className="mt-8">
        {data.map((item, index) => {
          return (
            <Card
              title="eCommerce"
              className="mb-4"
              downloads="4k"
              rating="4.5"
              stacks={[{ name: "Android" }]}
              platforms={[
                { name: "Android", icon: "hr" },
                { name: "Windows", icon: "hr" },
              ]}
              imgUrl="https://www.91-cdn.com/hub/wp-content/uploads/2022/07/Top-laptop-brands-in-India.jpg"
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
