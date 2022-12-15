import React from "react";
import { Meta, Story } from "@storybook/react";
import { List, ListProps, CogIcon } from "../components";

const meta: Meta = {
  title: "components/List",
  component: List,
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

const Template: Story<ListProps> = (args) => <List {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  data: [
    { label: "string1", value: "string1", rightIcon: <CogIcon /> },
    { label: "string1", value: "string2" },
  ],
};
