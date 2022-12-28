import { Meta, Story } from "@storybook/react";
import { InformationCard, DecapcricatedCardProps } from "../components";

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

const Template: Story<DecapcricatedCardProps> = (args) => (
  <InformationCard {...args} />
);

export const Default = Template.bind({});

Default.args = {};
