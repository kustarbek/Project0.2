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

 nuri
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
          element: <h1>404 Not Fount</h1>,

          path: "",
          element: <Home />,


            path: "/",
            element: <Home />,
 main
        },
 
        
      ],
    },
    {
      path: "*",
      element: <h1>404 Not Fount</h1>,
    },
  ])
}
