import { createBrowserRouter,RouteObject,} from "react-router-dom";

import { DefaultLayout } from "../layouts/Default";
import { Home } from "../pages/Home";
import { PokedexPage } from "../pages/Pokedex";
// import { NavBarPoke } from "../components/NavBar";
import { PokemonDetail } from "../components/Pokemon/Pokemon";
import { ExamenLayout } from "../layouts/Examen";
import { Page1 } from "../Examen/Page/Page1";
import { Page2 } from "../Examen/Page/Page2";
import { Page3 } from "../Examen/Page/Page3";

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
        element: <PokemonDetail/>
      },
    ],
  },
  {
    path: "/examen",
    element: <ExamenLayout />,
    children: [
      {
        path: "page1",
        element: <Page1 />
      },
      {
        path: "page2",
        element: <Page2 />
      },
      {
        path: "page3",
        element: <Page3 />
      },
    ],
  },
];

export const router = createBrowserRouter(routes);