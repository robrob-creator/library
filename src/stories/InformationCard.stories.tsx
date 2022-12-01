import { Meta, Story } from "@storybook/react";
import { InformationCard, CardProps } from "../components";

const meta: Meta = {
  title: "components/Card/Information Card",
  component: InformationCard,
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

const Template: Story<CardProps> = (args) => <InformationCard {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};