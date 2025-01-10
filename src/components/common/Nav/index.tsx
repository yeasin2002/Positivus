import React from "react";
import { Link } from "@tanstack/react-router";

import Logo from "@/assets/common/logo-dark.svg?react";
import { cn } from "@/utils";
import { LargeDeviceNav } from "./LargeDeviceNav";
import { MobileNav } from "./MobileNav";

interface Props extends React.ComponentProps<"nav"> {}

export const Nav = ({ className, ...props }: Props) => {
  return (
    <nav
      {...props}
      className={cn("flex items-center justify-between py-10", className)}
    >
      <Link to="/">
        <Logo className="w-44 md:w-52" />
      </Link>
      <LargeDeviceNav className="hidden md:flex" />
      <MobileNav className="md:hidden" />
    </nav>
  );
};
