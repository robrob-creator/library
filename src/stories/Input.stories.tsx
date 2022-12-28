import React from "react";
import { Meta, Story } from "@storybook/react";
import { InputField, InputProps } from "../components";

const meta: Meta = {
  title: "components/Input",
  component: InputField,
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

const Template: Story<InputProps> = (args) => (
  <InputField onChange={(e) => {}} {...args} />
);

export const Default = Template.bind({});

Default.args = {};
