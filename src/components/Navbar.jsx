import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../layout/context/AuthProvider";
import { toast } from "react-toastify";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLogout = () => {
        logout()
            .then(() => {
                toast.success("Logged out successfully!");
            })
            .catch((err) => toast.error(err.message));
    };

    return (
        <div className="bg-rose-200 text-rose-900 shadow-lg fixed w-full top-0 left-0 z-50 w-[]">
            <div className="max-w-7xl mx-auto px-4 lg:px-8 flex justify-between items-center py-5">
                {/* Logo */}
                <Link
                    to="/"
                    className="text-2xl font-bold text-rose-700 hover:text-rose-800 transition"
                >
                    ToyTopia
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden lg:flex gap-6 font-medium">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-white bg-rose-500 px-3 py-1 rounded-lg"
                                    : "hover:text-rose-600 transition"
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/alltoys"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-white bg-rose-500 px-3 py-1 rounded-lg"
                                    : "hover:text-rose-600 transition"
                            }
                        >
                            All Toys
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/extra"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-white bg-rose-500 px-3 py-1 rounded-lg"
                                    : "hover:text-rose-600 transition"
                            }
                        >
                            Extra
                        </NavLink>
                    </li>
                </ul>

                {/* Right Side */}
                <div className="flex items-center gap-3">
                    {user ? (
                        <div className="flex items-center gap-3">
                            {/* Profile Image */}
                            {user.photoURL ? (
                                <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
                                    <img
                                        src={user.photoURL}
                                        alt="profile"
                                        className="w-10 h-10 rounded-full border-2 border-rose-400 object-cover"
                                    />
                                </div>
                            ) : (
                                <div className="w-10 h-10 rounded-full bg-rose-400 flex items-center justify-center text-white font-bold">
                                    {user.displayName
                                        ? user.displayName.charAt(0).toUpperCase()
                                        : "U"}
                                </div>
                            )}
                            <button
                                onClick={handleLogout}
                                className="btn btn-sm bg-rose-500 text-white hover:bg-rose-600"
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <div className="flex gap-2">
                            <Link to="/login" className="btn btn-sm bg-rose-500 text-white">
                                Login
                            </Link>
                            <Link
                                to="/register"
                                className="btn btn-sm btn-outline border-rose-500 text-rose-600 hover:bg-rose-500 hover:text-white"
                            >
                                Register
                            </Link>
                        </div>
                    )}

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-2xl text-rose-700"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown */}
            {menuOpen && (
                <div className="lg:hidden bg-rose-100 shadow-md py-3">
                    <ul className="flex flex-col gap-3 text-center font-medium">
                        <li>
                            <NavLink
                                to="/"
                                onClick={() => setMenuOpen(false)}
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-white bg-rose-500 px-3 py-1 rounded-lg"
                                        : "hover:text-rose-600"
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/alltoys"
                                onClick={() => setMenuOpen(false)}
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-white bg-rose-500 px-3 py-1 rounded-lg"
                                        : "hover:text-rose-600"
                                }
                            >
                                All Toys
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/extra"
                                onClick={() => setMenuOpen(false)}
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-white bg-rose-500 px-3 py-1 rounded-lg"
                                        : "hover:text-rose-600"
                                }
                            >
                                Extra
                            </NavLink>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;
