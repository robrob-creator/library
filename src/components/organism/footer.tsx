/* eslint-disable prettier/prettier */
/* eslint-disable no-empty-pattern */
/* eslint-disable prettier/prettier */
import { BlueIsaacLogo } from "../atoms/logo";
import { Text } from "../atoms/Text";
export type FooterProps = {
  title?: string;
  imgUrl?: string;
  downloads?: string;
  rating?: string;
  platforms?: { name: string; icon: string }[];
  stacks?: { name: string }[];
};

export const Footer = <PROPS extends FooterProps>({}: PROPS): JSX.Element => {
  return (
    <div
      className="relative bg-gray-100 flex-col "
      style={{ width: "100%", height: 395 }}
    >
      <div
        className="inline-flex flex-col space-y-6 items-start justify-start w-80 h-44 absolute"
        style={{ left: 59, top: 46 }}
      >
        <BlueIsaacLogo />
        <Text className="lg:w-full w-36" size="sm" color="gray">
          Ut eu sem integer vitae justo eget magna fermentum iaculis eu non diam
          phasellus vestibulum.
        </Text>
        <div className="inline-flex space-x-5 items-start justify-start">
          <div className="w-10 h-full bg-gray-300 rounded-full" />
          <div className="w-10 h-full bg-gray-300 rounded-full" />
          <div className="w-10 h-full bg-gray-300 rounded-full" />
          <div className="w-10 h-full bg-gray-300 rounded-full" />
        </div>
      </div>
      <div
        className="inline-flex space-x-16 items-start justify-start absolute"
        style={{ width: "55%", height: 176, left: "39%", top: 46 }}
      >
        <div className="inline-flex flex-col space-y-2.5 items-start justify-start">
          <p className="text-sm font-semibold text-gray-900">Title Header</p>
          <p className="text-sm text-gray-900">Subtext</p>
          <p className="text-sm text-gray-900">Subtext</p>
          <p className="text-sm text-gray-900">Subtext</p>
          <p className="text-sm text-gray-900">Subtext</p>
          <p className="text-sm text-gray-900">Subtext</p>
        </div>
        <div className="inline-flex flex-col space-y-2.5 items-start justify-start">
          <p className="text-sm font-semibold text-gray-900">Title Header</p>
          <p className="text-sm text-gray-900">Subtext</p>
          <p className="text-sm text-gray-900">Subtext</p>
          <p className="text-sm text-gray-900">Subtext</p>
          <p className="text-sm text-gray-900">Subtext</p>
          <p className="text-sm text-gray-900">Subtext</p>
        </div>
        <div className="inline-flex flex-col space-y-2.5 items-start justify-start">
          <p className="text-sm font-semibold text-gray-900">Title Header</p>
          <p className="text-sm text-gray-900">Subtext</p>
          <p className="text-sm text-gray-900">Subtext</p>
          <p className="text-sm text-gray-900">Subtext</p>
          <p className="text-sm text-gray-900">Subtext</p>
          <p className="text-sm text-gray-900">Subtext</p>
        </div>
        <div className="inline-flex flex-col space-y-2.5 items-start justify-start">
          <p className="text-sm font-semibold text-gray-900">Title Header</p>
          <p className="text-sm text-gray-900">Subtext</p>
          <p className="text-sm text-gray-900">Subtext</p>
          <p className="text-sm text-gray-900">Subtext</p>
          <p className="text-sm text-gray-900">Subtext</p>
          <p className="text-sm text-gray-900">Subtext</p>
        </div>
        <div className="inline-flex flex-col space-y-2.5 items-start justify-start">
          <p className="text-sm font-semibold text-gray-900">Title Header</p>
          <p className="text-sm text-gray-900">Subtext</p>
          <p className="text-sm text-gray-900">Subtext</p>
          <p className="text-sm text-gray-900">Subtext</p>
          <p className="text-sm text-gray-900">Subtext</p>
          <p className="text-sm text-gray-900">Subtext</p>
        </div>
      </div>
      <Text
        color="black"
        className="absolute"
        style={{ left: 59, top: 330 }}
        size="sm"
      >
        © 2022 Project ISAAC. All rights reserved.
      </Text>
      <div
        className="absolute border-gray-300"
        style={{ width: 1160, height: 1, left: 60, top: 284 }}
      />
    </div>
  );
};
