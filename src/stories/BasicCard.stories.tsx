import { Meta, Story } from "@storybook/react";
import { BasicCard, CardProps } from "../components";

const meta: Meta = {
  title: "components/Card/Basic Card",
  component: BasicCard,
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

const Template: Story<CardProps> = (args) => <BasicCard {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};