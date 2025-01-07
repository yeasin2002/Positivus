import { cn } from "@/utils";
import { Menu } from "lucide-react";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navData } from "./nav.data";
import { Link } from "@tanstack/react-router";

interface Props extends React.ComponentProps<"div"> {}

export const MobileNav = ({ className, ...props }: Props) => {
  return (
    <div id="mobile-device-nav" className={cn(className)} {...props}>
      <Sheet>
        <SheetTrigger>
          <Menu />
        </SheetTrigger>
        <SheetContent>
          <div className="mt-3 flex flex-col">
            {navData.map(({ label, link }) => (
              <Link to={link} key={label + link}>
                {label}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};
