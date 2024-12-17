import { useRoutes } from "react-router"
import { Layout } from "../widgets"
import { Home } from "../pages"

export const MyRoutes = () => {
    return useRoutes([
        {
            path: "",
            element: <Layout />,
            children: [
                {
                    path: "",
                    element: <Home />
                },

            ]
        },
        {
            path: "*",
            element: <h1>404 Not Fount</h1>
        },
    ])
}
