// src/pages/Login.jsx
import React, { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../layout/context/AuthProvider";
import { FcGoogle } from "react-icons/fc"; // Google icon

const Login = () => {
    const { signInWithEmail, signInWithGoogle } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleSubmit = (e) => {
        e.preventDefault();
        signInWithEmail(email, password)
            .then(() => navigate(from, { replace: true }))
            .catch((err) => alert(err.message));
    };

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(() => navigate(from, { replace: true }))
            .catch((err) => alert(err.message));
    };

    return (
        <div className="hero min-h-screen bg-gradient-to-r from-purple-200 via-pink-200 to-yellow-200">
            <div className="hero-content flex-col lg:flex-row-reverse">

                {/* Card */}
                <div className="card bg-base-100 w-full max-w-md shadow-2xl rounded-xl border border-gray-200">
                    <div className="card-body p-8">
                        <h2 className="text-4xl font-bold text-center mb-6">Login</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input
                                type="email"
                                placeholder="Email"
                                className="input input-bordered w-full"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <div className="text-right">
                                <Link to="/forgot-password" className="link link-hover text-sm">
                                    Forgot password?
                                </Link>
                            </div>
                            <button type="submit" className="btn btn-neutral w-full">
                                Login
                            </button>
                            <button
                                type="button"
                                onClick={handleGoogleLogin}
                                className="btn btn-outline w-full flex items-center justify-center gap-2"
                            >
                                <FcGoogle size={24} /> Sign in with Google
                            </button>
                        </form>
                        <p className="text-center mt-4 text-sm">
                            Don't have an account?{" "}
                            <Link to="/register" className="text-blue-500 font-medium">
                                Register
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
