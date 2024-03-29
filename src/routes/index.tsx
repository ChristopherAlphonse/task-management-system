import { RouteObject } from "react-router";
import NotFound from "../NotFound";
import Layout from "../layout";
import Boards from "../pages/Boards/index";
import Home from "../pages/Home/index";
import Projects from "../pages/Projects";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/boards",
        element: <Boards />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/*",
        element: <NotFound />,
      },
    ],
  },
];

export default routes;
