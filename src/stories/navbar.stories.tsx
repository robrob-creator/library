import React from "react";
import { Meta, Story } from "@storybook/react";
import { NavigationBar, NavigationProps } from "../components";

const meta: Meta = {
  title: "Navbar",
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

const Template: Story<NavigationProps> = (args) => (
  <NavigationBar
    centerElements={<p>hellos</p>}
    rightElements={
      <div>
        <p>hello</p>
        <p>hello</p>
      </div>
    }
    {...args}
  />
);

export const Default = Template.bind({});

Default.args = {};
