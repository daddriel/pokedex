import { createBrowserRouter,RouteObject,} from "react-router-dom";

import { DefaultLayout } from "../layouts/Default";
import { Home } from "../pages/Home";
import { PokedexPage } from "../pages/Pokedex";
// import { NavBarPoke } from "../components/NavBar";
import { PokemonPageDetail } from "../pages/PokemonPage";

const routes: RouteObject[] =[
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
      },
      {
        path: "pokemon/:id",
        element: <PokemonPageDetail/>
      },
    ],
  },
];

export const router = createBrowserRouter(routes);