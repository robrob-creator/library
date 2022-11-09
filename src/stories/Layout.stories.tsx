import React from "react";
import { Meta, Story } from "@storybook/react";
import {
  Layout,
  LayoutProps,
  Form,
  InputField,
  HeaderText,
  Checkbox,
  Button,
} from "../components";

const meta: Meta = {
  title: "Layout",
  component: Layout,
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

const Template: Story<LayoutProps> = (args) => (
  <Layout {...args}>
    <div>
      <HeaderText text="Sign In" color="black" className="mt-10" />
      <Form>
        <InputField placeholder="Email" className="my-12" />
        <InputField placeholder="Password" className="my-6" type="password" />
        <div className="flex justify-between">
          <Checkbox label="Remember me?" />
          <a className="flex text-blue-700">forgot password?</a>
        </div>
        <div className="flex justify-between">
          <Button
            type="primary"
            text="Sign In"
            className="mt-8"
            onClick={() => {}}
          />
          <div className="flex mt-8">
            Not a member yet ? <a className="text-blue-700 ml-2"> Sign Up</a>
          </div>
        </div>
      </Form>
    </div>
  </Layout>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
