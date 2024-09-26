import React, { ReactNode } from "react";

type TitleProps = {
  children: ReactNode;
  tag: string;
  extraClass?: string;
};

export const Title = ({ children, tag, extraClass }: TitleProps) => {
  return <>{React.createElement(tag, { className: extraClass }, children)}</>;
};
