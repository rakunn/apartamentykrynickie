"use client";

import { scrollTo } from "@/app/helpers/scrollTo";
import { PropsWithChildren } from "react";

export const ClickableScroller = ({
  children,
  htmlId,
  className,
}: PropsWithChildren<{ htmlId: string; className: string }>) => {
  return (
    <button className={className} onClick={() => scrollTo(htmlId)}>
      {children}
    </button>
  );
};
