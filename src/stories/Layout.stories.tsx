import React from "react";
import { Meta, Story } from "@storybook/react";
import {
  OutlinedForm,
  FormProps,
  BlueIsaacLogo,
  InputField,
  ArrowLeft,
  HeaderText,
  Text,
  Button,
} from "../components";

const meta: Meta = {
  title: "pages/Layout",
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
          <HeaderText color="black" text="Forgot password?" size="sm" />

          <Text
            size="sm"
            color="gray-500"
            text=" No worries, we’ll send you reset instructions."
          />
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
            <Button
              text="Submit"
              type="primary"
              size="md"
              onClick={() => {}}
              className="w-full text-sm"
            />
          </div>
        </div>
        <div className="inline-flex space-x-2.5 items-center justify-start">
          <ArrowLeft size="sm" />
          <Text size="sm" color="gray-700" text="  Back to sign in" />
        </div>
      </div>
    </OutlinedForm>
  </div>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
