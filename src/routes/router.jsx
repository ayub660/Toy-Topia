import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";

// Pages
import Home from "../pages/Home";
import AllToys from "../pages/AllToys";
import ToyDetail from "../pages/ToyDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ForgotPassword from "../pages/ForgotPassword";
import MyProfile from "../pages/MyProfile";
import ExtraPage from "../pages/ExtraPage";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        errorElement: <NotFound />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/alltoys", element: <AllToys /> },
            { path: "/toy/:id", element: <ToyDetail /> },
            { path: "/profile", element: <MyProfile /> },
            { path: "/extra", element: <ExtraPage /> },
            { path: "/login", element: <Login /> },
            { path: "/register", element: <Register /> },
            { path: "/forgot-password", element: <ForgotPassword /> },
        ],
    },
]);

export default router;
