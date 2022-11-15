import { Meta, Story } from "@storybook/react";
import {
  Layout,
  LayoutProps,
  Form,
  HeaderText,
  InputField,
  Button,
  Checkbox,
} from "../components";

const meta: Meta = {
  title: "pages/login",
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
      <HeaderText text="Sign In" color="black" className="mt-10" />
      <Form className="space-y-4 mt-7">
        <div className="relative z-0 w-full mb-5">
          <InputField placeholder="Email" className="my-12" name="email" />
          <InputField
            placeholder="Password"
            className="my-6"
            type="password"
            name="password"
          />
        </div>
      </Form>
      <div className="flex mt-10 justify-between">
        <Checkbox label="Remember me?" />
        <a className="flex text-blue-700 cursor-pointer">forgot password?</a>
      </div>
      <div className="flex items-center mt-16 justify-between ">
        <div className="w-48">
          <Button
            type="primary"
            text="Sign In"
            className="mt-8"
            onClick={() => {}}
          />
        </div>
        <div className="flex mt-8">
          Not a member yet ?{" "}
          <a className="text-blue-700 ml-2 cursor-pointer">Sign Up</a>
        </div>
      </div>
    </div>
  </Layout>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
