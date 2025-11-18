import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthenticatedLayout from "./layouts/AuthenticatedLayout";
import UnAuthenticatedLayout from "./layouts/UnAuthenticatedLayout";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import LandingPage from "./pages/general/LandingPage";
import PageNotFound from "./pages/general/PageNotFound";
import HomePage from "./pages/home/HomePage";
import { initCSRF } from "./utils/csrf/csrf.util";
function App() {
  useEffect(() => {
    initCSRF();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <UnAuthenticatedLayout />,
      children: [
        {
          path: "/",
          element: <LandingPage />,
        },
        {
          path: "/auth/login",
          element: <LoginPage />,
        },
        {
          path: "/auth/register",
          element: <RegisterPage />,
        },
      ],
    },
    {
      path: "/home",
      element: <AuthenticatedLayout />,
      children: [
        {
          path: "/home",
          element: <HomePage />,
        },
      ],
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <Toaster position="bottom-right" reverseOrder={false} />
    </>
  );
}

export default App;
