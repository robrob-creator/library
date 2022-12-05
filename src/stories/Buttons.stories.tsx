import React from "react";
import { Meta, Story } from "@storybook/react";
import { Button, ButtonProps, CogIcon } from "../components";

const meta: Meta = {
  title: "components/Button",
  component: Button,
  argTypes: {
    color: { control: "color" },
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

const Template: Story<ButtonProps> = (args) => (
  <Button {...args}>
    word <CogIcon color="white" />
  </Button>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Primary = Template.bind({});
export const text = Template.bind({});
export const Secondary = Template.bind({});
export const Subtle = Template.bind({});
export const Danger = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  type: "primary",
  text: "Button",
};
text.args = {
  type: "text",
  text: "Button",
};
Secondary.args = {
  type: "secondary",
  text: "Button",
};
Subtle.args = {
  type: "subtle",
  text: "Button",
};

Danger.args = {
  type: "danger",
  text: "Button",
};
