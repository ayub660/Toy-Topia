import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    // User state - প্রথমে null (login নেই)
    const [user, setUser] = useState(null);

    // Temporary login/logout simulation
    const handleLogin = () => {
        setUser({
            name: "John Doe",
            photoURL: "https://i.pravatar.cc/40",
        });
    };

    const handleLogout = () => {
        setUser(null);
    };

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
                {user ? (
                    <div className="flex items-center gap-3">
                        <img
                            src={user.photoURL}
                            alt={user.name}
                            className="w-10 h-10 rounded-full border-2 border-white"
                            title={user.name}
                        />
                        <button onClick={handleLogout} className="btn btn-sm btn-rose">
                            Logout
                        </button>
                    </div>
                ) : (
                    <button onClick={handleLogin} className="btn btn-primary">
                        Login
                    </button>
                )}
            </div>
        </div>
    );
};

export default Navbar;
