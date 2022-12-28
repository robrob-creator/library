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

export const Default = Template.bind({});

Default.args = {};
