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
  title: "components/Product Banner",
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
      <div className="px-4">
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          id="736d2dce-205b-4e1d-a8de-21d9524ba21c"
          data-name="Livello 1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>prime</title>
          <g id="6037caba-d996-4e01-a295-2e233316e41b" data-name="Arrow Left">
            <path d="M16.23,23.58l2.24-2a0.5,0.5,0,0,0,0-.71L10.57,12,18.5,3.13a0.5,0.5,0,0,0,0-.71l-2.24-2a0.5,0.5,0,0,0-.71,0L5.2,12,15.52,23.54A0.5,0.5,0,0,0,16.23,23.58Z" />
          </g>
        </svg>
      </div>
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
      title="Point of sale"
      description="here is the description,here is the description,here is the description"
      extra={
        <div className="flex flex-wrap  w-26">
          {" "}
          <div
            className="inline-flex items-center justify-center w-36 px-5 py-2 sm:top-120 top-72 absolute bg-blue-700 rounded-lg"
            style={{ left: 61 }}
          >
            <p className="text-xs font-semibold leading-snug text-center text-gray-50">
              ₱ 2,000.00
            </p>
          </div>
          <div
            className="inline-flex items-center justify-center w-36 px-5 py-2 sm:top-120 top-72 absolute bg-gray-900 border rounded-lg border-gray-300"
            style={{ left: 226 }}
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
