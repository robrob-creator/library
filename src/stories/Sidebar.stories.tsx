import React from "react";
import { Meta, Story } from "@storybook/react";
import {
  SideBar,
  SideBarProps,
  CogIcon,
  GridIcon,
  Puzzle,
} from "../components";

const meta: Meta = {
  title: "components/Sidebar",
  component: SideBar,
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

const Template: Story<SideBarProps> = (args) => <SideBar {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  items: [
    { name: "Account Settings", icon: <CogIcon />, notification: 48 },
    { name: "Dashboards", icon: <GridIcon /> },
    { name: "My Apps", icon: <Puzzle />, notification: 44 },
  ],
};
