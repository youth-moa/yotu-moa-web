import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>Home</>
    ),
  },
  {
    path: "/login",
    element: (
      <LoginPage />
    ),
  },
])