import { Meta, Story } from "@storybook/react";
import { AppCard, DecapcricatedCardProps } from "../components";

const meta: Meta = {
  title: "components/Card/App Card",
  component: AppCard,
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

const Template: Story<DecapcricatedCardProps> = (args) => <AppCard {...args} />;

export const Default = Template.bind({});

Default.args = {};
