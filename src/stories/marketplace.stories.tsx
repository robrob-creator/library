import { Meta, Story } from "@storybook/react";
import {
  OutlinedForm,
  FormProps,
  Tabs,
  Card,
  Banner,
  NavigationBar,
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

    <Banner />
    <div className="grid content-center">
      <Tabs />
      {/**third */}
      <div className="lg:grid lg:gap-2 grid-cols-2 lg:grid-cols-4 mx-2 ">
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
      <Footer />
    </div>
  </div>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
