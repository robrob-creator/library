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
  title: "pages/Set new password",
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
        className="inline-flex flex-col space-y-12 items-center justify-end"
        style={{ width: 400, height: 485 }}
      >
        <div className="flex flex-col space-y-1.5 items-center justify-start">
          <HeaderText size="sm">Set new password</HeaderText>

          <Text size="sm" color="gray-500" className="text-center">
            Your new password must be different to
            <br />
            previous used passwords.
          </Text>
        </div>
        <div
          className="flex flex-col space-y-5 items-start justify-start"
          style={{ width: 400, height: 199 }}
        >
          <div
            className="flex flex-col space-y-1.5 items-start justify-start"
            style={{ width: 400, height: 123 }}
          >
            <InputField
              placeholder="Password"
              className="w-full "
              type="password"
            />
          </div>
          <div className="inline-flex space-x-0.5 items-center justify-start relative"></div>
          <InputField
            placeholder="Confrim password"
            className="w-full "
            type="password"
          />
        </div>
        <div className="relative" style={{ width: 400, height: 40 }}>
          <Button
            text="Reset Password"
            size="xl"
            className="w-full"
            type="primary"
            onClick={() => {}}
          />
        </div>
        <div className="inline-flex space-x-2.5 items-center justify-start">
          <ArrowLeft />
          <p className="text-sm tracking-wider text-gray-700">Back to log in</p>
        </div>
      </div>
    </OutlinedForm>
  </div>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
