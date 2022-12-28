import React from "react";
import { Meta, Story } from "@storybook/react";
import { Checkbox, CheckboxProps } from "../components";

const meta: Meta = {
  title: "components/Checkbox",
  component: Checkbox,
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

const Template: Story<CheckboxProps> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});

Default.args = {};
