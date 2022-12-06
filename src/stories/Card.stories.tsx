import React from "react";
import { Meta, Story } from "@storybook/react";
import { Card, CardProps } from "../components";

const meta: Meta = {
  title: "components/Card/Card",
  component: Card,
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

const Template: Story<CardProps> = (args) => (
  <Card {...args} content={<div>hello</div>} />
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  subtitle: (
    <div>
      <p>hello1</p>
    </div>
  ),
  downloads: "4k",
  rating: "4/5",
  title: "eCommerce",
  imgURL:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png",
};
