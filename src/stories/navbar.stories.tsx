import React from "react";
import { Meta, Story } from "@storybook/react";
import { NavigationBar, NavigationProps } from "../components";

const meta: Meta = {
  title: "components/Navbar",
  component: NavigationBar,
  argTypes: {
    children: {
      control: {
        type: "ReactNode",
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<NavigationProps> = (args) => <NavigationBar />;

export const Default = Template.bind({});

Default.args = {};
