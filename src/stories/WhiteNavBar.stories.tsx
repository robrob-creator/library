import React from "react";
import { Meta, Story } from "@storybook/react";
import { ToggleSwitch, ToggleProps,WhiteNavBar,NavigationProps } from "../components";

const meta: Meta = {
  title: "components/WhiteNavBar",
  component: WhiteNavBar,
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

const Template: Story<NavigationProps> = (args) => <WhiteNavBar {...args} />;

export const Default = Template.bind({});

Default.args = {};
