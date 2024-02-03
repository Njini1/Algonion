import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import UserPage from './pages/UserPage/UserPage.tsx';
import CodeLogPage from './pages/CodeLogPage/CodeLogPage.tsx';
import CodeLogDetailPage from './pages/CodeLogDetailPage/CodeLogDetailPage.tsx';
import SearchPage from './pages/SearchPage/SearchPage.tsx';
import CommunityPage from './pages/CommunityPage/CommunityPage.tsx';
import RoomDetailPage from './pages/RoomDetailPage/RoomDetailPage.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/profile",
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
    path: "/search/:query",
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
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)