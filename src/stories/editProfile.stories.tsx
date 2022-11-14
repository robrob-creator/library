import React from "react";
import { Meta, Story } from "@storybook/react";
import { WhiteNavBar, NavigationProps, SideBar, Line } from "../components";

const meta: Meta = {
  title: "WhiteNav",
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
    <div className="grid grid-cols-2 gap-4">
      <SideBar />
      <div className=" ">
        <p className="text-base font-semibold">
          Jun Mark Grills / Account Settings
        </p>
        <div className="w-36 bg-gray-400">
          teesfdfgdfgdfgggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggging
        </div>
      </div>
    </div>
  </div>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
