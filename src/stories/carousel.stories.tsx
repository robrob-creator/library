import React from "react";
import { Meta, Story } from "@storybook/react";
import { Carousel, CarouselProps } from "../components";

const meta: Meta = {
  title: "components/Carousel",
  component: Carousel,
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

const Template: Story<CarouselProps> = (args) => <Carousel {...args} />;

export const Default = Template.bind({});

Default.args = {};
