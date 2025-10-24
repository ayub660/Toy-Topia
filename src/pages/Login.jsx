import React, { useState, useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../layout/context/AuthProvider";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Swal from "sweetalert2";

const Login = () => {
    const { login, googleLogin } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPass, setShowPass] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await login(email, password);
            Swal.fire({
                toast: true,
                position: "top-end",
                icon: "success",
                title: "Login successful!",
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true,
            });
            navigate(from, { replace: true });
        } catch (err) {
            let message = "Something went wrong!";
            if (err.code === "auth/user-not-found") message = "No account found with this email.";
            else if (err.code === "auth/wrong-password") message = "Incorrect password.";

            Swal.fire({
                toast: true,
                position: "top-end",
                icon: "error",
                title: message,
                showConfirmButton: false,
                timer: 2500,
                timerProgressBar: true,
            });
        }
    };

    const handleGoogleLogin = async () => {
        try {
            await googleLogin();
            Swal.fire({
                toast: true,
                position: "top-end",
                icon: "success",
                title: "Google login successful!",
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true,
            });
            navigate(from, { replace: true });
        } catch (err) {
            Swal.fire({
                toast: true,
                position: "top-end",
                icon: "error",
                title: "Google login failed: " + err.message,
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
            });
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-pink-50 px-4">
            <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
                <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Login</h1>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <input
                        type="email"
                        placeholder="Email address"
                        className="input input-bordered w-full focus:outline-pink-400"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <div className="relative">
                        <input
                            type={showPass ? "text" : "password"}
                            placeholder="Password"
                            className="input input-bordered w-full focus:outline-pink-400"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <span
                            className="absolute right-4 top-3.5 cursor-pointer text-gray-500"
                            onClick={() => setShowPass(!showPass)}
                        >
                            {showPass ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
                        </span>
                    </div>

                    <div className="flex justify-end">
                        <Link to="/forgot-password" className="link link-hover text-sm text-gray-500">
                            Forgot password?
                        </Link>
                    </div>

                    <button type="submit" className="btn bg-pink-500 hover:bg-pink-600 text-white w-full">
                        Login
                    </button>

                    <button
                        type="button"
                        onClick={handleGoogleLogin}
                        className="btn btn-outline w-full flex items-center justify-center gap-2"
                    >
                        <img src="https://img.icons8.com/color/24/google-logo.png" alt="google" />
                        Sign in with Google
                    </button>
                </form>

                <p className="text-center text-gray-500 text-sm mt-6">
                    Don’t have an account? <Link to="/register" className="text-pink-500 font-medium">Register</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
