import React from "react";
import { Link } from "@tanstack/react-router";

import Logo from "@/assets/common/logo-white.svg?react";
import { navigationData } from "@/data";
import { contactLinksData } from "@/data/contactLinks.data";

interface Props extends React.ComponentProps<"div"> {}

export const FooterNavigation = ({ ...props }: Props) => {
  return (
    <div
      className="flex items-center justify-between  flex-col gap-y-2 md:flex-row"
      {...props}
    >
      <Logo className="w-44 md:w-40" />
      <div className="flex items-center gap-x-4 *:underline flex-col md:flex-row">
        {navigationData.map((nfn) => (
          <Link to={nfn.link} key={nfn.label}>
            {nfn.label}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-x-2">
        {contactLinksData.map((item) => (
          <Link to={item.url} key={item.name}>
            <item.Element />
          </Link>
        ))}
      </div>
    </div>
  );
};
