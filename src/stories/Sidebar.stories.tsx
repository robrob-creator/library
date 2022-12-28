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

export const Default = Template.bind({});

Default.args = {
  activeKey: "dashboard",
  items: [
    {
      name: "Account Settings",
      icon: <CogIcon />,
      rightIcon: <CogIcon />,
      key: "accountSetting",
      notification: 48,
      handleClick: () => {
        console.log("hello 1");
      },
    },
    {
      name: "Dashboards",
      icon: <GridIcon />,
      key: "dashboard",
      handleClick: () => {
        console.log("hello 2");
      },
    },
    {
      name: "My Apps",
      icon: <Puzzle />,
      notification: 44,
      key: "myApps",
      className: " border-t-2 ",
      handleClick: () => {
        console.log("hello 3");
      },
    },
  ],
};
