import { Meta, Story } from "@storybook/react";
import {
  Layout,
  LayoutProps,
  Form,
  HeaderText,
  InputField,
  BlueIsaacLogo,
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
      <div className="sm:invisible flex flex-col justify-center items-center">
        <BlueIsaacLogo className="sm:h-0" />
      </div>
      <HeaderText
        text="Sign In"
        fontStyle="medium"
        color="black"
        size="md"
        className="mt-10 "
      />
      <Form bordered={false}>
        <div className="sm:w-full w-80  gap-2">
          <InputField
            name="email"
            placeholder="Email"
            type="text"
            className="my-4"
          />
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
      <div className="flex flex-wrap items-center mt-16 xl:justify-between ">
        <Button
          type="primary"
          text="Sign In"
          className="mt-8"
          onClick={() => {}}
        />

        <div className="flex mt-8">
          Not a member yet ?{" "}
          <a className="text-blue-700 ml-2 cursor-pointer" onClick={() => {}}>
            Sign Up
          </a>
        </div>
      </div>
    </div>
  </Layout>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
