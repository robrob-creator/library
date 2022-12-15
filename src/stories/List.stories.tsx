import React from "react";
import { Meta, Story } from "@storybook/react";
import { List, ListProps, CogIcon } from "../components";

const meta: Meta = {
  title: "components/List",
  component: List,
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

const Template: Story<ListProps> = (args) => <List {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  layout: "horizontal",
  data: [
    {
      value: (
        <div className="inline-flex justify-items-center px-4 sm:px-24 flex-col  sm:space-y-96 border-r-2 border-gray-400">
          <div className="inline-flex flex-col items-center justify-end sm:w-16 sm:h-24">
            <p className="w-full text-xs sm:text-base font-bold  text-center text-gray-700">
              Ratings
            </p>
            <p className="text-2xl sm:text-3xl font-semibold leading-10 text-center text-gray-700">
              4.5
            </p>
            <div className="inline-flex space-x-0.5 items-start justify-start">
              <img
                className="w-1/6 h-full rounded-full"
                src="https://via.placeholder.com/10x10"
              />
              <img
                className="w-1/6 h-full rounded-full"
                src="https://via.placeholder.com/10x10"
              />
              <img
                className="w-1/6 h-full rounded-full"
                src="https://via.placeholder.com/10x10"
              />
              <img
                className="w-1/6 h-full rounded-full"
                src="https://via.placeholder.com/10x10"
              />
              <img
                className="w-1/6 h-full rounded-full"
                src="https://via.placeholder.com/10x10"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      value: (
        <div className="inline-flex justify-items-center px-4 sm:px-24 flex-col  sm:space-y-96 border-r-2 border-gray-400">
          <div className="inline-flex flex-col items-center justify-end sm:w-16 sm:h-24">
            <p className="w-full text-xs sm:text-base font-bold  text-center text-gray-700">
              Ratings
            </p>
            <p className="text-2xl sm:text-3xl font-semibold leading-10 text-center text-gray-700">
              4.5
            </p>
            <div className="inline-flex space-x-0.5 items-start justify-start">
              <img
                className="w-1/6 h-full rounded-full"
                src="https://via.placeholder.com/10x10"
              />
              <img
                className="w-1/6 h-full rounded-full"
                src="https://via.placeholder.com/10x10"
              />
              <img
                className="w-1/6 h-full rounded-full"
                src="https://via.placeholder.com/10x10"
              />
              <img
                className="w-1/6 h-full rounded-full"
                src="https://via.placeholder.com/10x10"
              />
              <img
                className="w-1/6 h-full rounded-full"
                src="https://via.placeholder.com/10x10"
              />
            </div>
          </div>
        </div>
      ),
    },
  ],
};
