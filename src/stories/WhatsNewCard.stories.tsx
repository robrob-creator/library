import React from "react";
import { Meta, Story } from "@storybook/react";
import { WhatsNewCard, DecapcricatedCardProps } from "../components";

const meta: Meta = {
  title: "components/Card/WhatsNewCard",
  component: WhatsNewCard,
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
  <WhatsNewCard {...args} />
);

export const Default = Template.bind({});

Default.args = {};
