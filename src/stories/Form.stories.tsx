import { Meta, Story } from "@storybook/react";
import { Form, FormProps, FormItem,FormInput } from "../components";

const meta: Meta = {
  title: "components/Form",
  component: Form,
  argTypes: {
    children: {
      control: {
        type: "text",
        title: "text",
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<FormProps> = (args) => (
  <Form {...args}>
    <FormItem>
      <input
        placeholder="placholder"
        className="bg-gray-200 w-full px-4 py-4 rounded-xl"
      />
    </FormItem>{" "}
    <FormInput/>
    <FormItem>
      <input
        placeholder="placeholder"
        className="bg-gray-200 w-full px-4 py-4 rounded-xl"
      />
    </FormItem>{" "}
    <FormItem>
      <input
        placeholder="hello"
        className="bg-gray-200 w-full px-4 py-4 rounded-xl"
      />
    </FormItem>{" "}
    <FormItem>
      <input
        placeholder="hello"
        className="bg-gray-200 w-full px-4 py-4 rounded-xl"
      />
    </FormItem>
  </Form>
);

export const Default = Template.bind({});

Default.args = {};
