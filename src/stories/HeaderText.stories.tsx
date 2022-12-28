import React from "react";
import { Meta, Story } from "@storybook/react";
import { HeaderText, TextProps } from "../components";

const meta: Meta = {
  title: "components/Header Text",
  component: HeaderText,
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

const Template: Story<TextProps> = (args) => <HeaderText {...args} />;

export const Default = Template.bind({});

Default.args = {};
