import {
  createBrowserRouter,
  RouteObject,
} from "react-router-dom";

import { DefaultLayout } from "../layouts/Default";
import { Home } from "../pages/Home";
import { PokedexPage } from "../pages/Pokedex";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <DefaultLayout />,
    children: [

      {
        path: "",
        element: <Home />
      },
      {
        path: "pokedex",
        element: <PokedexPage />,
      }
    ],
  },
];

export const router = createBrowserRouter(routes);