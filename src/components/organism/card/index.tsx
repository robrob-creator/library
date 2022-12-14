/* eslint-disable prettier/prettier */
import { Layout } from "src/components/types";
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
  className?: string;
  handleClick?: React.MouseEventHandler<HTMLDivElement>;
};

export const Card = <PROPS extends CardProps>({
  imgUrl,
  title,
  className,
  subtitle,
  layout,
  content,
  handleClick,
}: PROPS): JSX.Element => {
  return layout == "vertical" ? (
    <VerticalCard
      title={title}
      imgUrl={imgUrl}
      content={content}
      subtitle={subtitle}
      className={className}
      handleClick={handleClick}
    />
  ) : (
    <HorizontalCard
      title={title}
      imgUrl={imgUrl}
      content={content}
      subtitle={subtitle}
      className={className}
      handleClick={handleClick}
    />
  );
};
