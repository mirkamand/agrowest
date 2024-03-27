import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RootLayout from "./components/RootLayout";
import AboutPage from "./pages/AboutPage";
import MissionPage from "./pages/MissionPage";
import ProductDetails from "./components/ProductDetails";
import LocateBananaPage from "./pages/LocateBananaPage";
import FruitsPage from "./pages/FruitsPage";
import ErrorPage from "./pages/ErrorPage";
import "bootstrap/dist/js/bootstrap.min.js";
import GalleryPage from "./pages/GalleryPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/products/:productSlug", element: <ProductDetails /> },
      { path: "/mission", element: <MissionPage /> },
      { path: "/locate_banana", element: <LocateBananaPage /> },
      { path: "/fruits", element: <FruitsPage /> },
      { path: "/gallery", element: <GalleryPage /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
