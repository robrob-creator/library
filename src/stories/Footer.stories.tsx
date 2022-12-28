import React from "react";
import { Meta, Story } from "@storybook/react";
import { Footer, FooterProps } from "../components";

const meta: Meta = {
  title: "components/Footer",
  component: Footer,
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

const Template: Story<FooterProps> = (args) => <Footer {...args} />;

export const Default = Template.bind({});

Default.args = {};
