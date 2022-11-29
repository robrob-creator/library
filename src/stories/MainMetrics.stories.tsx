import React from "react";
import { Meta, Story } from "@storybook/react";
import { StatusCard } from "../components";
import {
  WhiteNavBar,
  NavigationProps,
  SideBar,
  InformationCard,
  DataCard,
  ArrowLeft,
  CogIcon,
  Puzzle,
  GridIcon,
} from "../components";
import { List } from "../components";
const meta: Meta = {
  title: "pages/Main Metrics",
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
      <SideBar
        items={[
          {
            name: "Account Settings",
            icon: <CogIcon />,
            notification: 48,
            handleClick: () => {
              console.log("hello 1");
            },
          },
          {
            name: "Dashboards",
            icon: <GridIcon />,
            notification: 48,
            handleClick: () => {
              console.log("hello 2");
            },
          },
          {
            name: "My Apps",
            icon: <Puzzle />,
            notification: 44,
            handleClick: () => {
              console.log("hello 3");
            },
          },
        ]}
      />
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
        <StatusCard />
        <div className="sm:py-8 sm:px-16 sm:mx-0 mx-8 ">
          <div className="flex sm:flex-nowrap flex-wrap justify-between  gap-4 pb-14 border-b-2 border-gray-800 border-opacity-5">
            <DataCard className="w-1/2" />
            <DataCard className="w-1/2" />
          </div>
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
