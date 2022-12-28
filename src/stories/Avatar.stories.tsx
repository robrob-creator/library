import React from "react";
import { Meta, Story } from "@storybook/react";
import { Avatar, AvatarProps } from "../components";

const meta: Meta = {
  title: "components/Avatar",
  component: Avatar,
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

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});

Default.args = {};
