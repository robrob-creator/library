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
  title: "pages/Sign up two",
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
      <Form className="w-full">
        <div className="grid grid-cols-2 gap-2">
          <div>
            <InputField placeholder="First Name" className="my-14" />
            <InputField
              placeholder="Mobile Phone Number"
              className="my-10"
              type="tel"
            />
            <InputField placeholder="Country" className="my-14" />
            <InputField placeholder="City/Town" className="my-14" />
          </div>
          <div>
            <InputField placeholder="Last Name" className="my-14" />
            <InputField placeholder="Company Name" className="my-14" />
            <InputField placeholder="Province/State" className="my-10" />
          </div>
        </div>
        <div className="flex justify-between mt-16">
          <div className="w-48">
            <Button
              type="primary"
              text="NEXT"
              className="mt-8 "
              onClick={() => {}}
            />
          </div>
          <div className="flex mt-8">
            Already a member ? <a className="text-blue-700 ml-2"> Sign In</a>
          </div>
        </div>
      </Form>
    </div>
  </Layout>
);

export const Default = Template.bind({});

Default.args = {};
