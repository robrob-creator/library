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

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
