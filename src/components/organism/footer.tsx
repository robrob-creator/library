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
    <div className="bg-gray-100 w-screen py-8 px-5">
      <div className="inline-flex flex-wrap w-full relative bg-gray-100  ">
        <div className="inline-flex flex-col space-y-6 items-start justify-start sm:w-80 w-full h-44 ">
          <BlueIsaacLogo />
          <Text className="w-full" size="sm" color="gray">
            Ut eu sem integer vitae justo eget magna fermentum iaculis eu non
            diam phasellus vestibulum.
          </Text>
          <div className="inline-flex space-x-5 items-start justify-start">
            <div className="w-10 h-full bg-gray-300 rounded-full" />
            <div className="w-10 h-full bg-gray-300 rounded-full" />
            <div className="w-10 h-full bg-gray-300 rounded-full" />
            <div className="w-10 h-full bg-gray-300 rounded-full" />
          </div>
        </div>
        <div className="inline-flex flex-wrap space-x-16 items-start justify-start">
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
      </div>
      <Text color="black" className="" size="sm">
        © 2022 Project ISAAC. All rights reserved.
      </Text>
    </div>
  );
};
