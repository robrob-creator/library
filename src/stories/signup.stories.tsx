import React from "react";
import { Meta, Story } from "@storybook/react";
import {
  Layout,
  LayoutProps,
  Form,
  HeaderText,
  InputField,
  Button,
} from "../components";

const meta: Meta = {
  title: "Sign up",
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
  <Layout>
    <div>
      <HeaderText text="Sign Up" color="black" className="mt-10" size="lg" />
      <Form>
        <InputField placeholder="Name" className="my-6" />
        <InputField placeholder="Email address" className="my-6" type="email" />
        <InputField placeholder="Password" className="my-6" type="password" />
        <InputField
          placeholder="Confirm password"
          className="my-6"
          type="Confirm password"
        />

        <div className="flex justify-between mt-16">
          <Button
            type="primary"
            text="NEXT"
            className="mt-8"
            onClick={() => {}}
          />
          <div className="flex mt-8">
            Already a member ? <a className="text-blue-700 ml-2"> Sign In</a>
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
