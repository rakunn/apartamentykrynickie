"use client";

import { track } from "@vercel/analytics";
import type { AnchorHTMLAttributes, PropsWithChildren } from "react";

interface TrackedContactLinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  eventLabel: string;
  eventType: "email" | "phone";
}

export const TrackedContactLink = ({
  children,
  eventLabel,
  eventType,
  href,
  onClick,
  ...props
}: PropsWithChildren<TrackedContactLinkProps>) => (
  <a
    href={href}
    onClick={(event) => {
      track("contact_click", {
        type: eventType,
        label: eventLabel,
        href: href ?? "",
      });
      onClick?.(event);
    }}
    {...props}
  >
    {children}
  </a>
);
