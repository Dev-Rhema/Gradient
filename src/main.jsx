import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Overview from "./Overview";
import PageNotFound from "./PageNotFound";
import MyNodes from "./MyNodes";
import Rewards from "./Rewards";
import Referrals from "./Referrals";
import Profile from "./Profile";
import MainLayout from "./MainLayout";
import NodeItem from "./Components/NodeItem";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Overview,
      },

      {
        path: "my-nodes",
        Component: MyNodes,
      },
      {
        path: "my-nodes/:nodeId", // <-- dynamic route, not nested!
        element: <NodeItem />,
      },

      {
        path: "rewards",
        Component: Rewards,
      },
      {
        path: "referrals",
        Component: Referrals,
      },
      {
        path: "profile",
        Component: Profile,
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
