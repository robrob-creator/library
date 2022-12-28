import React from "react";
import { Meta, Story } from "@storybook/react";
import { SideDisplay, SideDisplayProps } from "../components";

const meta: Meta = {
  title: "components/Side Display",
  component: SideDisplay,
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

const Template: Story<SideDisplayProps> = (args) => <SideDisplay {...args} />;

export const Default = Template.bind({});

Default.args = {};
