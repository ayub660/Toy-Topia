import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">

            <Navbar></Navbar>

            <main className="flex-1 pt-24">
                <Outlet></Outlet>
                <p>{import.meta.env.VITE_name}</p>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;
