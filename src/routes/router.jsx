import { createBrowserRouter } from "react-router";
import Navbar from "../components/Navbar";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Navbar></Navbar>
    },
    {
        path: "/auth",
        element: <h2>Authentication Laouut </h2>
    },
    {
        path: "/toydetail",
        element: <h2>Home layout </h2>
    },
    {
        path: "/*",
        element: <h2>Error404</h2>
    },
]);

export default router