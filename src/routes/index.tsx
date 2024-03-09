import Boards from "../pages/Boards";
import Layout from "../layout";
import { RouteObject } from "react-router";

const routes: RouteObject[] = [
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                children: [
                    {
                        path: "",
                        element: <Boards />,
                    },
                ],
            },
        ],
    },
];

export default routes;
