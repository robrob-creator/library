import { Meta, Story } from "@storybook/react";
import { DataCard, DecapcricatedCardProps } from "../components";

const meta: Meta = {
  title: "components/Card/Data Card",
  component: DataCard,
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
  <DataCard {...args} />
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
