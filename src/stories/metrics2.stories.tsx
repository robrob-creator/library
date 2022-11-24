import { Meta, Story } from "@storybook/react";
import {
  WhiteNavBar,
  NavigationProps,
  SideBar,
  InformationCard,
  DataCard,
  ArrowLeft,
  AppCard,
  Table,
} from "../components";
import { List } from "../components";

const meta: Meta = {
  title: "pages/Main Metrics 2",
  component: WhiteNavBar,
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

const Template: Story<NavigationProps> = (args) => (
  <div>
    <WhiteNavBar {...args} />
    <div className="flex">
      <SideBar />
      <div className="flex-auto bg-gray-100">
        <div
          className="flex items-center justify-start  pr-96 pt-5 pb-4 bg-white border border-gray-200 w-full"
          style={{ height: 75 }}
        >
          <div className="flex items-center justify-start w-full h-full">
            <ArrowLeft />
            <p className="text-2xl">My apps / Point of Sale</p>
          </div>
        </div>
        <AppCard />
        <div className="sm:py-8 sm:px-16 sm:mx-0 mx-8 ">
          <div className="flex sm:flex-nowrap flex-wrap justify-between  gap-4 pb-14 border-b-2 border-gray-800 border-opacity-5">
            <DataCard />
            <DataCard />
          </div>
          {/**table start */}
          <table className="w-full table-auto">
            <thead>
              <tr>
                <th className="flex justify-start text-xl font-semibold">
                  Services
                </th>
                <th className="text-base font-medium w-14">Active</th>
                <th className="text-base font-medium w-12">Down</th>
                <th className="text-base font-medium w-1">Inactive</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="">Service</td>
                <td className="px-10 py-4">
                  <div className="w-16 h-4 bg-green-600 rounded-full " />
                </td>
                <td className="px-10 py-4">
                  <div className="w-16 h-4 border rounded-full border-gray-400" />
                </td>
                <td className="px-10 py-4">
                  <div className="w-16 h-4 border rounded-full border-gray-400" />
                </td>
              </tr>
              <tr>
                <td className="">Service</td>
                <td className="px-10 py-4">
                  <div className="w-16 h-4 bg-green-600 rounded-full" />
                </td>
                <td className="px-10 py-4">
                  <div className="w-16 h-4 border rounded-full border-gray-400" />
                </td>
                <td className="px-10 py-4">
                  <div className="w-16 h-4 border rounded-full border-gray-400" />
                </td>
              </tr>
              <tr>
                <td className="">Service</td>
                <td className="px-10 py-4">
                  <div className="w-16 h-4 bg-green-600 rounded-full" />
                </td>
                <td className="px-10 py-4">
                  <div className="w-16 h-4 border rounded-full border-gray-400" />
                </td>
                <td className="px-10 py-4">
                  <div className="w-16 h-4 border rounded-full border-gray-400" />
                </td>
              </tr>
            </tbody>
          </table>
          {/**table end */}
          <div className="border-b-2 border-gray-800 py-8 border-opacity-5">
            <List
              data={[
                { label: "Active User", value: "5000" },
                { label: "Active session", value: "345" },
                { label: "Last activity", value: "342" },
                { label: "Number of microservices", value: "3" },
                { label: "Number of instances", value: "123" },
                { label: "Sample", value: "5000" },
                { label: "Sample", value: "5000" },
                { label: "Sample", value: "5000" },
                { label: "Sample", value: "5000" },
                { label: "Sample", value: "5000" },
              ]}
            />
          </div>
          <InformationCard />
        </div>
      </div>
    </div>
  </div>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
