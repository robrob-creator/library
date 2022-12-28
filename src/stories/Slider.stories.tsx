import React from "react";
import { Meta, Story } from "@storybook/react";
import { Slider, SliderProps } from "../components";

const meta: Meta = {
  title: "components/Slider",
  component: Slider,
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

const Template: Story<SliderProps> = (args) => <Slider {...args} />;

export const Default = Template.bind({});

Default.args = {};
