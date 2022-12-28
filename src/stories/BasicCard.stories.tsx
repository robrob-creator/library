import { Meta, Story } from "@storybook/react";
import { BasicCard, DecapcricatedCardProps } from "../components";

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

const Template: Story<DecapcricatedCardProps> = (args) => (
  <BasicCard {...args} />
);

export const Default = Template.bind({});

Default.args = {};
