import React from "react";
import { Meta, Story } from "@storybook/react";
import { Dropdown, DropdownProps, Option } from "../components";

const meta: Meta = {
  title: "components/Dropdown",
  component: Dropdown,
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

const Template: Story<DropdownProps> = (args) => (
  <Dropdown {...args}>
    <Option label="hello" />
    <Option label="hello" />
    <Option label="hello" />
  </Dropdown>
);

export const Default = Template.bind({});

Default.args = { label: "dropdown" };
