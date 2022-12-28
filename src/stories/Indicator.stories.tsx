import { Meta, Story } from "@storybook/react";
import { Indicator, IndicatorProps } from "../components/molecules/indicator";
const meta: Meta = {
  title: "components/Indicator",
  component: Indicator,
  argTypes: {
    color: { control: "color" },
    children: {},
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<IndicatorProps> = (args) => (
  <Indicator {...args}> </Indicator>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Success = Template.bind({});
export const Warning = Template.bind({});
export const Danger = Template.bind({});
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Success.args = {
  Status: "success",
  Text: "This is a success notification!",
};
Warning.args = {
  Status: "warning",
  Text: "This is a warning notification!",
};

Danger.args = {
  Status: "danger",
  Text: "This is  a danger notification!",
};

Default.args = {
  Status: "default",
  Text: "This is a default notification!",
};
