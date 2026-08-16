"use client";

import { trackEvent } from "@/lib/gtag";

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  eventName: string;
  eventParams?: Record<string, string>;
};

export default function TrackedLink({
  eventName,
  eventParams,
  onClick,
  children,
  ...rest
}: Props) {
  return (
    <a
      {...rest}
      onClick={(e) => {
        trackEvent(eventName, eventParams);
        onClick?.(e);
      }}
    >
      {children}
    </a>
  );
}
