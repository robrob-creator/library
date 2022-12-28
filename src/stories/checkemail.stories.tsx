import React from "react";
import { Meta, Story } from "@storybook/react";
import {
  OutlinedForm,
  FormProps,
  BlueIsaacLogo,
  InputField,
  ArrowLeft,
  HeaderText,
  Form,
  Text,
  Button,
} from "../components";

const meta: Meta = {
  title: "pages/Checkmail",
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
    <Form bordered={true}>
      <div className="inline-flex flex-col space-y-16 items-center justify-end flex-1 h-full">
        <div className="flex flex-col space-y-1.5 items-center justify-start bg-white">
          <HeaderText
            text="Check your email"
            className="text-center"
            color="black"
            size="sm"
          />
          <Text size="sm" color="gray-500" className="text-center">
            We sent a password reset link to
            <br />
            grill.moonshot@gmail.com
          </Text>
        </div>
        <Text size="sm" className="text-center" color="black">
          Didn’t receive the email?{" "}
          <span className="text-blue-700 font-semibold">Click to resend</span>
        </Text>
        <div className="inline-flex space-x-2.5 items-center justify-start bg-white">
          <ArrowLeft />
          <Text size="sm" color="gray-700" text="  Back to sign in" />
        </div>
      </div>
    </Form>
  </div>
);

export const Default = Template.bind({});

Default.args = {};
