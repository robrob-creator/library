/* eslint-disable prettier/prettier */
import imageOne from "../../../../assets/images/cover1.png";
import imagetwo from "../../../../assets/images/cover2.png";
import sampleApp from "../../../../assets/images/sampleApp.png";
import { ArrowStrokeDown, StackIcon, DownloadIcon } from "../../atoms/icons";
import { Layout } from "src/components/types";
import { Text, HeaderText } from "../../atoms/Text";
import { HorizontalCard } from "./horizontalCard";
import { VerticalCard } from "./verticalCard";
import React from "react";

export type CardProps = {
  title?: React.ReactNode;
  layout?: Layout;
  imgUrl?: string;
  content?: React.ReactNode;
  subtitle?: React.ReactNode;
  description?: string;
  rating?: string;
  className?: string;
  onClick?: () => void;
};

export const Card = <PROPS extends CardProps>({
  imgUrl,
  title,

  className,
  layout,
  content,
  onClick,
}: PROPS): JSX.Element => {
  return layout == "vertical" ? (
    <VerticalCard
      title={title}
      imgUrl={imgUrl}
      content={content}
      className={className}
    />
  ) : (
    <HorizontalCard
      title={title}
      imgUrl={imgUrl}
      content={content}
      className={className}
    />
  );
};
