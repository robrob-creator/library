import React from "react";
import { Meta, Story } from "@storybook/react";
import {
  NavigationBar,
  NavigationProps,
  Dropdown,
  Search,
  Option,
} from "../components";

const meta: Meta = {
  title: "components/Navbar",
  component: NavigationBar,
  argTypes: {
    children: {
      control: {
        type: "ReactNode",
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<NavigationProps> = (args) => (
  <NavigationBar
    rightElements={
      <div className="flex sm:space-x-6 items-center justify-end">
        <Search size="sm" className="lg:block hidden" />
        <p className="text-sm font-medium leading-tight text-blue-700 w-24 cursor-pointer">
          Sign in
        </p>

        <div
          className="sm:inline-flex hidden relative"
          style={{ width: "100%", height: 40 }}
        >
          <div
            className="inline-flex items-center justify-center px-5 py-2 bg-blue-700 rounded-lg"
            style={{ width: "100%", height: 40 }}
          >
            <p className="text-xs font-semibold leading-snug text-center text-gray-50">
              Try it free
            </p>
          </div>
        </div>
      </div>
    }
    centerElements={
      <div className="text-sm lg:flex-grow lg:flex lg:items-center lg:justify-center">
        <span className="flex  items-center lg:mt-0 text-black hover:text-blue-400 mr-4">
          <Dropdown label="Apps">
            <Option label="Apps" />
          </Dropdown>
        </span>
        <span className="flex  items-center mt-4 lg:mt-0 text-black hover:text-blue-400  mr-4">
          <Dropdown label="Community">
            <Option label="Community" />
          </Dropdown>
        </span>
        <span className="flex  items-center mt-4 lg:mt-0 text-black hover:text-blue-400  mr-4">
          <Dropdown label="Pricing">
            <Option label="Pricing" />
          </Dropdown>
        </span>
      </div>
    }
  />
);

export const Default = Template.bind({});

Default.args = {};
