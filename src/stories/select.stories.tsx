import React from "react";
import { Meta, Story } from "@storybook/react";
import { Dropdown, DropdownProps, Option } from "../components";

const meta: Meta = {
  title: "Dropdown",
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
  </Dropdown>
);
// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
