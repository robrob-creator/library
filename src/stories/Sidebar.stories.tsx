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
    {
      name: "Account Settings",
      icon: <CogIcon />,
      rightIcon: <CogIcon />,
      notification: 48,
      handleClick: () => {
        console.log("hello 1");
      },
    },
    {
      name: "Dashboards",
      icon: <GridIcon />,
<<<<<<< HEAD
      notification: 48,
=======
      fontStyle: "bold",
>>>>>>> origin
      handleClick: () => {
        console.log("hello 2");
      },
    },
    {
      name: "My Apps",
      icon: <Puzzle />,
      notification: 44,
      className: " border-t-2 ",
      handleClick: () => {
        console.log("hello 3");
      },
    },
  ],
};
