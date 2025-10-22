// src/components/Navbar.jsx
import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar bg-rose-200 text-rose-900 shadow-lg px-4 lg:px-8">
            <div className="navbar-start">
                <Link to="/" className="btn btn-ghost text-2xl font-bold">
                    ToyTopia
                </Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? "text-white bg-rose-500 px-3 py-1 rounded-lg" : ""
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/alltoys"
                            className={({ isActive }) =>
                                isActive ? "text-white bg-rose-500 px-3 py-1 rounded-lg" : ""
                            }
                        >
                            All Toys
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/extra"
                            className={({ isActive }) =>
                                isActive ? "text-white bg-rose-500 px-3 py-1 rounded-lg" : ""
                            }
                        >
                            Extra
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className="navbar-end">
                <Link to="/login" className="btn btn-primary">
                    Login
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
