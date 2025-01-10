import { Suspense } from "react";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

import { Nav } from "@/components/common/Nav";
import { RootErrorBoundary, RootNotFound } from "@/pages/landing-page";

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: RootNotFound,
  errorComponent: RootErrorBoundary,
});

function RootComponent() {
  return (
    <>
      <Nav />
      <Outlet />
      <Suspense>
        <TanStackRouterDevtools />
      </Suspense>
    </>
  );
}
