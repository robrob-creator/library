import React from "react";
import { Meta, Story } from "@storybook/react";
import { StatusCard } from "../components";
import {
  WhiteNavBar,
  NavigationProps,
  SideBar,
  BasicCard,
} from "../components";
import { List } from "../components";
const meta: Meta = {
  title: "pages/My Apps",
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
          {/** 
          <div className="flex items-center justify-start w-full h-full">
            <ArrowLeft />
            <p className="text-2xl"></p>
          </div> */}
        </div>

        <div className="sm:py-8 sm:px-16 sm:mx-0 mx-8 ">
          <div className="inline-flex flex-col space-y-11 items-start justify-start w-full ">
            <p className="text-base font-medium leading-normal">
              New installed
            </p>
            <div className="flex flex-col space-y-12 items-start justify-start  bg ">
              <div className="flex flex-wrap gap-14 items-start justify-start ">
                <BasicCard title="App Name" />
                <BasicCard title="App Name" />
                <BasicCard title="App Name" />
                <BasicCard title="App Name" />
                <BasicCard title="App Name" />
                <BasicCard title="App Name" />
                <BasicCard title="App Name" />
                <BasicCard title="App Name" />
                <BasicCard title="App Name" />
                <BasicCard title="App Name" />
                <BasicCard title="App Name" />
                <BasicCard title="App Name" />
                <BasicCard title="App Name" />
                <BasicCard title="App Name" />
                <BasicCard title="App Name" />
                <BasicCard title="App Name" />
                <BasicCard title="App Name" />
                <BasicCard title="App Name" />
              </div>
            </div>
          </div>
          <div className="inline-flex flex-col space-y-11 mt-14 items-start justify-start w-full ">
            <p className="text-base font-medium leading-normal">
              New installed
            </p>
            <div className="flex flex-col space-y-12 items-start justify-start  bg ">
              <div className="flex flex-wrap gap-14 items-start justify-start ">
                <BasicCard title="App Name" />
                <BasicCard title="App Name" />
                <BasicCard title="App Name" />
                <BasicCard title="App Name" />
                <BasicCard title="App Name" />
                <BasicCard title="App Name" />
                <BasicCard title="App Name" />
                <BasicCard title="App Name" />
                <BasicCard title="App Name" />
                <BasicCard title="App Name" />
                <BasicCard title="App Name" />
                <BasicCard title="App Name" />
                <BasicCard title="App Name" />
                <BasicCard title="App Name" />
                <BasicCard title="App Name" />
                <BasicCard title="App Name" />
                <BasicCard title="App Name" />
                <BasicCard title="App Name" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
