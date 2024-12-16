import React, { Suspense } from "react";
import Loading from "@/components/Loading";
import NotFound from "@/components/NotFound";
import MainLayouts from "@/layouts/MainLayouts";
import FullStackDeveloper from "@/pages/developer-fullstack/FullStackDeveloper";

const HomePage = React.lazy(() => import("@/pages/home/HomePage"));
const DetailBlog = React.lazy(() => import("@/pages/details/DetailBlog"));

export const MainRoutes = {
  path: "/",
  element: <MainLayouts />,
  errorElement: <NotFound />,
  children: [
    {
      path: "/",
      element: (
        <Suspense fallback={<Loading />}>
          <HomePage />
        </Suspense>
      ),
    },
    {
      path: "/detail/:title/:id",
      element: (
        <Suspense fallback={<Loading />}>
          <DetailBlog />
        </Suspense>
      ),
    },
    {
      path: "/full-stack-developer",
      element: (
        <Suspense fallback={<Loading />}>
          <FullStackDeveloper />
        </Suspense>
      ),
    },
  ],
};
