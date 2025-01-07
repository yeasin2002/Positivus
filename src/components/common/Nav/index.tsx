import Logo from "@/assets/common/logo-dark.svg?react";
import { Button } from "@/components/ui";
import { cn } from "@/utils";
import React from "react";
import { Link } from "@tanstack/react-router";
import { MobileNav } from "./MobileNav";
import { navData } from "./nav.data";
interface Props extends React.ComponentProps<"nav"> {}

export const Nav = ({ className, ...props }: Props) => {
  return (
    <nav
      {...props}
      className={cn("flex items-center justify-between px-4 py-2", className)}
    >
      <Logo />
      <div
        id="large-device-nav"
        className="hidden items-center gap-x-4 md:flex"
      >
        <div className="space-x-3">
          {navData?.map(({ label, link }) => (
            <Link to={link} key={label} className="font-space_grotesk">
              {label}
            </Link>
          ))}
        </div>
        <Button variant={"secondary"} className="px-7 font-space_grotesk">
          Hire Me
        </Button>
      </div>
      <MobileNav className="md:hidden" />
    </nav>
  );
};
