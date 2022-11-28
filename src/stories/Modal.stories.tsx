import React from "react";
import { Meta, Story } from "@storybook/react";
import { Modal, ModalProps } from "../components";

const meta: Meta = {
  title: "components/Modal",
  component: Modal,
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

const Template: Story<ModalProps> = (args) => (
  <Modal {...args}>
    <p className="bg-white h-8">Hello</p>
  </Modal>
);

export const Default = Template.bind({});

Default.args = {};
