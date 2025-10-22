import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home";
import AllToys from "../pages/AllToys";
import ToyDetails from "../pages/ToyDetails";
import MyProfile from "../pages/MyProfile";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ForgotPassword from "../pages/ForgotPassword";
import NotFound from "../pages/NotFound";
import ExtraPage from "../pages/ExtraPage";
import PrivateRoute from "../components/PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        errorElement: <NotFound />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/alltoys", element: <AllToys /> },
            {
                path: "/toy/:id",
                element: (
                    <PrivateRoute>
                        <ToyDetails />
                    </PrivateRoute>
                ),
            },
            {
                path: "/profile",
                element: (
                    <PrivateRoute>
                        <MyProfile />
                    </PrivateRoute>
                ),
            },
            { path: "/extra", element: <ExtraPage /> },
            { path: "/login", element: <Login /> },
            { path: "/register", element: <Register /> },
            { path: "/forgot-password", element: <ForgotPassword /> },
        ],
    },
]);

export default router;
