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
    <FormInput placeholder="please enter an input..."/>
    <FormInput placeholder="please enter an input..."/>
    <FormInput placeholder="please enter an input..."/>
    <FormInput placeholder="please enter an input..."/>
  </Form>
);

export const Default = Template.bind({});

Default.args = {};
