import React from "react";
import { Meta, Story } from "@storybook/react";
import {
  WhiteNavBar,
  NavigationProps,
  SideBar,
  Line,
  Form,
  InputField,
} from "../components";

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
    <div className="flex">
      <SideBar />
      <div className="flex-auto py-8 px-16">
        <div className="inline-flex space-x-3.5 items-center justify-start mx-4">
          <img
            className="w-10 h-full rounded-lg"
            src="https://via.placeholder.com/40x40"
          />
          <p className="text-base font-semibold ">
            Jun Mark Grills / Account Settings
          </p>
        </div>
        <div className="flex">
          <div className="flex flex-col space-y-5 items-start justify-start">
            <p className="text-sm text-gray-600">Edit Profile</p>
            <p className="text-sm text-gray-600">Email Address</p>
            <p className="text-sm font-semibold text-blue-700">Password</p>
          </div>

          <Line className="opacity-5" />
          <Form className="mx-8 w-full">
            <InputField placeholder="Email Address" />
          </Form>
        </div>
      </div>
    </div>
  </div>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
