import { Meta, Story } from "@storybook/react";
import { ProductBanner, BannerProps } from "../components";

const meta: Meta = {
  title: "Product Banner",
  component: ProductBanner,
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

const Template: Story<BannerProps> = (args) => <ProductBanner {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
