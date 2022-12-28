import React from "react";
import { Meta, Story } from "@storybook/react";
import { RadioButton, RadioProps } from "../components";

const meta: Meta = {
  title: "components/RadioButton",
  component: RadioButton,
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

const Template: Story<RadioProps> = (args) => <RadioButton {...args} />;

export const Default = Template.bind({});

Default.args = {};
