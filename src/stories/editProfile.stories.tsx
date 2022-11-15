import React from "react";
import { Meta, Story } from "@storybook/react";
import {
  WhiteNavBar,
  NavigationProps,
  SideBar,
  Line,
  Form,
  InputField,
  UserAvatar,
  Button,
} from "../components";

const meta: Meta = {
  title: "pages/WhiteNav",
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
      <div className="flex-auto sm:py-8 sm:px-16">
        <div className="inline-flex space-x-3.5 items-center justify-start mx-4 my-8">
          <UserAvatar className="w-10 h-full rounded-lg" />
          <p className="text-base font-semibold ">
            Jun Mark Grills / Account Settings
          </p>
        </div>
        <div className="flex flex-wrap ">
          <div className="flex flex-col space-y-5 items-start justify-start">
            <p className="text-sm text-gray-600">Edit Profile</p>
            <p className="text-sm text-gray-600 w-36">Email Address</p>
            <p className="text-sm font-semibold text-blue-700">Password</p>
          </div>

          <Line height="2" className="" />
          <div className="flex lg:w-4/6">
            <Form className="lg:mx-8 lg:w-full h-96">
              <InputField placeholder="Email Address" size="lg" />
            </Form>
            <Button type="text" onClick={() => {}} text="Verify" />
          </div>
        </div>
        <div className="flex flex-row-reverse sm:mx-34 ">
          <Button
            type="primary"
            className="justify-self-end"
            onClick={() => {}}
            text="Verify"
          />
        </div>
      </div>
    </div>
  </div>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
