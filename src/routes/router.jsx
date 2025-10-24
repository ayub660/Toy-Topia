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
import PrivateRoute from "../components/PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        errorElement: <NotFound></NotFound>,
        children: [
            { path: "/", element: <Home></Home> },
            { path: "/alltoys", element: <AllToys></AllToys> },
            {
                path: "/toy/:id",
                element: (
                    <PrivateRoute>
                        <ToyDetails />
                    </PrivateRoute>
                ),
            },
            { path: "/profile", element: <PrivateRoute><MyProfile /></PrivateRoute> },
            { path: "/login", element: <Login></Login> },
            { path: "/register", element: <Register></Register> },
            { path: "/forgot-password", element: <ForgotPassword></ForgotPassword> },
            { path: "*", element: <NotFound></NotFound> },
        ],
    },
]);

export default router;
