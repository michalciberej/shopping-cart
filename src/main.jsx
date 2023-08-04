import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Error from "./components/Error";
import Products from "./pages/Products";
import SingleProduct from "./components/SingleProduct";
import AllProducts from "./components/AllProducts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/products",
    element: <Products />,
    errorElement: <Error />,
    children: [
      {
        path: "/products/all",
        element: <AllProducts />,
      },
      {
        path: "/products/category:",
        element: <AllProducts />,
      },
      {
        path: "/products:productId",
        element: <SingleProduct />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
