import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../layout/context/AuthProvider";
import { toast } from "react-toastify";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Register = () => {
    const { register, googleLogin } = useContext(AuthContext);
    const [name, setName] = useState("");
    const [photoURL, setPhotoURL] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPass, setShowPass] = useState(false);
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");

        const uppercase = /[A-Z]/.test(password);
        const lowercase = /[a-z]/.test(password);

        if (password.length < 6) {
            setError("Password must be at least 6 characters long.");
            toast.error("Password too short!");
            return;
        }

        if (!uppercase || !lowercase) {
            setError("Password must contain at least one uppercase and one lowercase letter.");
            toast.error("Password must have 1 uppercase & 1 lowercase letter!");
            return;
        }

        register(email, password, name, photoURL)
            .then(() => {
                toast.success("Registration successful!");
                navigate("/");
            })
            .catch((err) => {
                if (err.code === "auth/email-already-in-use") {
                    setError("Email is already in use!");
                    toast.error("Email already registered!");
                } else {
                    setError("Something went wrong. Try again!");
                    toast.error(err.message);
                }
            });
    };

    const handleGoogleLogin = () => {
        googleLogin()
            .then(() => {
                toast.success("Google sign-in successful!");
                navigate("/");
            })
            .catch((err) => {
                toast.error("Google login failed: " + err.message);
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-pink-50 px-4">
            <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
                <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
                    Register
                </h1>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="input w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-0"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <input
                            type="text"
                            placeholder="Photo URL"
                            className="input w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-0"
                            value={photoURL}
                            onChange={(e) => setPhotoURL(e.target.value)}
                        />
                    </div>

                    <div>
                        <input
                            type="email"
                            placeholder="Email address"
                            className="input w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-0"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="relative">
                        <input
                            type={showPass ? "text" : "password"}
                            placeholder="Password"
                            className="input w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-0"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <span
                            className="absolute right-4 top-3.5 cursor-pointer text-gray-500"
                            onClick={() => setShowPass(!showPass)}
                        >
                            {showPass ? (
                                <AiOutlineEyeInvisible size={20} />
                            ) : (
                                <AiOutlineEye size={20} />
                            )}
                        </span>
                    </div>

                    <button
                        type="submit"
                        className="btn bg-pink-500 hover:bg-pink-600 text-white w-full font-medium border-none"
                    >
                        Register
                    </button>

                    <button
                        type="button"
                        onClick={handleGoogleLogin}
                        className="btn btn-outline w-full flex items-center justify-center gap-2"
                    >
                        <img
                            src="https://img.icons8.com/color/24/google-logo.png"
                            alt="google"
                        />
                        Sign up with Google
                    </button>
                </form>

                {error && (
                    <p className="text-red-500 text-center text-sm mt-3">{error}</p>
                )}

                <p className="text-center text-gray-500 text-sm mt-6">
                    Already have an account?{" "}
                    <Link to="/login" className="text-pink-500 font-medium">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
