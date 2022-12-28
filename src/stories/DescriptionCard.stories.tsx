import React from "react";
import { Meta, Story } from "@storybook/react";
import { DescriptionCard, DecapcricatedCardProps } from "../components";

const meta: Meta = {
  title: "components/Card/Description Card",
  component: DescriptionCard,
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

const Template: Story<DecapcricatedCardProps> = (args) => (
  <DescriptionCard {...args} />
);

export const Default = Template.bind({});

Default.args = {};
