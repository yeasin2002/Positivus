import React from "react";
import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/utils";
import { navData } from "./nav.data";

interface Props extends React.ComponentProps<"div"> {}

export const MobileNav = ({ className, ...props }: Props) => {
  return (
    <div id="mobile-device-nav" className={cn(className)} {...props}>
      <Sheet>
        <SheetTrigger>
          <Menu className="size-6" />
        </SheetTrigger>
        <SheetContent>
          <div className="mt-3 flex flex-col gap-y-1">
            {navData.map(({ label, link }) => (
              <Link to={link} key={label + link} className=" text-lg">
                {label}
              </Link>
            ))}
          </div>
          <Button variant={"secondary"} className="mt-4 px-7 ">
            Request a quote
          </Button>
        </SheetContent>
      </Sheet>
    </div>
  );
};
