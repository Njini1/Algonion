import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";


const UserPage = lazy(() => import('./pages/UserPage/UserPage.tsx'))
const CodeLogPage = lazy(() => import('./pages/CodeLogPage/CodeLogPage.tsx'))
const CodeLogDetailPage = lazy(() => import('./pages/CodeLogDetailPage/CodeLogDetailPage.tsx'))
const SearchPage = lazy(() => import('./pages/SearchPage/SearchPage.tsx'))
const CommunityPage = lazy(() => import('./pages/CommunityPage/CommunityPage.tsx'))
const RoomDetailPage = lazy(() => import('./pages/RoomDetailPage/RoomDetailPage.tsx'))
const LoginSuccessPage = lazy(() => import('./pages/LoginSuccessPage/LoginSuccessPage.tsx'))
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/profile/:username",
    element: <UserPage />,
  },
  {
    path: "/code-log/:username",
    element: <CodeLogPage />,
  },
  {
    path: "/code-log/:username/:codeId",
    element: <CodeLogDetailPage />,
  },
  {
    path: "/search",
    element: <SearchPage />,
  },
  {
    path: "/community",
    element: <CommunityPage />,
  },
  {
    path: "/room/:roomId",
    element: <RoomDetailPage />,
  },
  {
    path: "/login/success",
    element: <LoginSuccessPage />,
  },
]);




ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
