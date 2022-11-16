import { Meta, Story } from "@storybook/react";
import {
  ProductBanner,
  BannerProps,
  Bannesr,
  DescriptionCard,
  WhatsNewCard,
  InformationCard,
  SimilarCard,
  Footer,
  ArrowLeft,
  MoreCard,
} from "../components";

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

const Template: Story<BannerProps> = (args) => (
  <div>
    <div className="flex justify-between  py-4 w-full">
      <ArrowLeft className="w-12 h-6  px-2  " />
      <p className="text-base  justify-center font-semibold leading-snug text-center text-gray-700">
        Point of Sale
      </p>
      <div className="px-4">
        <div className="inline-flex items-center justify-center  h-9 px-4 py-2 bg-blue-700 rounded-full">
          <p className="text-xs font-semibold leading-snug text-center text-gray-50">
            ₱ 2,000.00
          </p>
        </div>
      </div>
    </div>
    <ProductBanner
      {...args}
      extra={
        <div className="flex flex-wrap  w-26">
          {" "}
          <div
            className="inline-flex items-center justify-center w-36 px-5 py-2 absolute bg-blue-700 rounded-lg"
            style={{ left: 61, top: 440 }}
          >
            <p className="text-xs font-semibold leading-snug text-center text-gray-50">
              ₱ 2,000.00
            </p>
          </div>
          <div
            className="inline-flex items-center justify-center w-36 px-5 py-2 absolute bg-gray-900 border rounded-lg border-gray-300"
            style={{ left: 226, top: 440 }}
          >
            <p className="text-xs font-semibold leading-snug text-center text-gray-50">
              Demo
            </p>
          </div>
        </div>
      }
    />
    <Bannesr />
    <DescriptionCard />
    <WhatsNewCard />
    <InformationCard />
    <SimilarCard />
    <MoreCard />
    <Footer />
  </div>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
