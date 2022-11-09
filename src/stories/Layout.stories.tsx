import React from "react";
import { Meta, Story } from "@storybook/react";
import {
  OutlinedForm,
  FormProps,
  BlueIsaacLogo,
  InputField,
} from "../components";

const meta: Meta = {
  title: "Layout",
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
  <div className="flex flex-col justify-center items-center">
    <BlueIsaacLogo className="my-4" />
    <OutlinedForm>
      <div
        className="inline-flex flex-col space-y-11 items-center justify-end"
        style={{ width: "402px", height: "323px" }}
      >
        <div className="flex flex-col space-y-1.5 items-center justify-start">
          <p className="text-2xl font-bold tracking-wider">Forgot password?</p>
          <p className="text-sm tracking-wider text-gray-500">
            No worries, we’ll send you reset instructions.
          </p>
        </div>
        <div
          className="flex flex-col space-y-12 items-center justify-end"
          style={{ width: "402px", height: "146px" }}
        >
          <div className="flex flex-col items-start justify-center px-5 py-1 rounded-xl">
            <InputField
              className=""
              placeholder="Email"
              style={{ width: "400px", height: "56px" }}
            />
          </div>
          <div className="relative" style={{ width: "400px", height: "40px" }}>
            <div
              className="inline-flex items-center justify-center px-5 py-2 bg-blue-700 rounded-lg"
              style={{ width: "400px ", height: "40px" }}
            >
              <p className="text-xs font-semibold leading-snug text-center text-gray-50">
                Submit
              </p>
            </div>
          </div>
        </div>
        <div className="inline-flex space-x-2.5 items-center justify-start">
          <img
            className="w-1/6 h-full rounded-lg"
            src="https://via.placeholder.com/24x24"
          />
          <p className="text-sm tracking-wider text-gray-700">
            Back to sign in
          </p>
        </div>
      </div>
    </OutlinedForm>
  </div>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
