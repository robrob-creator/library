import React from "react";
import { Meta, Story } from "@storybook/react";
import { NavigationBar, NavigationProps } from "../components";

const meta: Meta = {
  title: "Navigation Bar",
  component: NavigationBar,
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

const Template: Story<NavigationProps> = (args) => <NavigationBar {...args} />;

export const Default = Template.bind({});

Default.args = {};
