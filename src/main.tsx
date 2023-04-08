import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import { ErrorPage } from "@app/routes";
import { Navbar } from "@app/components";
import { BrowseMovies, FavMovies, Home } from "@app/pages";
import { Provider } from "react-redux";
import { store } from "@app/redux/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/favourites",
    element: <FavMovies />,
    children: [
      {
        path: "favourites/:movieSlug",
      },
    ],
  },
  {
    path: "/browse",
    element: <BrowseMovies />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
