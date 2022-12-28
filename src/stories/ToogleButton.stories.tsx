import React from "react";
import { Meta, Story } from "@storybook/react";
import { ToggleSwitch, ToggleProps } from "../components";

const meta: Meta = {
  title: "components/Toggle",
  component: ToggleSwitch,
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

const Template: Story<ToggleProps> = (args) => <ToggleSwitch {...args} />;

export const Default = Template.bind({});

Default.args = {};
